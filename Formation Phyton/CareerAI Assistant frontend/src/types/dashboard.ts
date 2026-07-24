export interface Dashboard {


    user:{

        id:number;

        email:string;

        role:string;

    };


    profile:{

        firstname:string;

        lastname:string;

        bio:string | null;

    };


    statistics:{

        skills:number;

        documents:number;

        applications:number;

        interviews:number;

    };


    matching:{

        job_offer_id:number;

        score:number;

        analysis:string;

    }[];

}