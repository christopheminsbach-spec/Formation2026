import api from "./axios";

export interface DashboardData {
  [key: string]: unknown;
}

export const getDashboard = async (): Promise<DashboardData> => {
  const response = await api.get<DashboardData>(
    "/dashboard/"
  );

  return response.data;
};