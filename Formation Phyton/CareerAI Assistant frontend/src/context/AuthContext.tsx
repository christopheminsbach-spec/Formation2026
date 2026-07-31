import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";


import {
    login as loginService
} from "../services/authService";



interface User {

    id:number;

    first_name:string;

    last_name:string;

    email:string;

    role:string;

}



interface AuthContextType {

    user:User | null;

    token:string | null;

    loading:boolean;

    login:(email:string,password:string)=>Promise<void>;

    logout:()=>void;

}



const AuthContext =
    createContext<AuthContextType | null>(null);



export function AuthProvider({
    children
}:{
    children:React.ReactNode
}){


    const [user,setUser] =
        useState<User | null>(null);


    const [token,setToken] =
        useState<string | null>(null);


    const [loading,setLoading] =
        useState(true);



    /*
        Chargement automatique
        au démarrage de React
    */

    useEffect(()=>{


        const savedToken =
            localStorage.getItem(
                "access_token"
            );


        const savedUser =
            localStorage.getItem(
                "user"
            );


        if(savedToken){

            setToken(savedToken);

        }


        if(savedUser){

            setUser(
                JSON.parse(savedUser)
            );

        }


        setLoading(false);


    },[]);



    /*
        Connexion utilisateur
    */

    async function login(
        email:string,
        password:string
    ){


        const data =
            await loginService({

                email,

                password

            });



        localStorage.setItem(
            "access_token",
            data.access_token
        );


        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );



        setToken(
            data.access_token
        );


        setUser(
            data.user
        );

    }



    /*
        Déconnexion
    */

    function logout(){


        localStorage.removeItem(
            "access_token"
        );


        localStorage.removeItem(
            "user"
        );


        setToken(null);

        setUser(null);

    }



    return (

        <AuthContext.Provider

            value={{

                user,

                token,

                loading,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}



export function useAuth(){


    const context =
        useContext(
            AuthContext
        );


    if(!context){

        throw new Error(
            "useAuth doit être utilisé dans AuthProvider"
        );

    }


    return context;

}