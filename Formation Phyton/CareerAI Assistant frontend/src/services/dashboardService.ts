import api from "./api";


export interface DashboardStats {
    applications: number;
    interviews: number;
    documents: number;
    matches: number;
}


export interface DashboardResponse {
    success: boolean;
    message: string;
    user_id: string | number;
    stats: DashboardStats;
}


export async function getDashboard(): Promise<DashboardResponse> {

    const response = await api.get<DashboardResponse>(
        "/dashboard/"
    );

    return response.data;
}