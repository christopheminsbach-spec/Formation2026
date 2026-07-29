import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import api from "../api/axios";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  const [loading] = useState(false);

  const login = async (
    email: string,
    password: string
  ) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    const { access_token, user } = response.data;

    localStorage.setItem("access_token", access_token);

    setToken(access_token);

    if (user) {
      setUser(user);
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth doit être utilisé dans AuthProvider");
  }

  return context;
}