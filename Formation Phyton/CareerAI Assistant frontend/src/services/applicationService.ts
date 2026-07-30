import api from "./api";


export interface Application {

  id: number;

  company: string;

  position: string;

  status: string;

  created_at: string;

}



export interface CreateApplication {

  company: string;

  position: string;

}



export async function getApplications() {

  const response =
    await api.get<Application[]>(
      "/applications/"
    );

  return response.data;

}



export async function createApplication(
  data: CreateApplication
) {

  const response =
    await api.post(
      "/applications/",
      data
    );

  return response.data;

}



export async function updateApplicationStatus(
  id:number,
  status:string
) {

  const response =
    await api.put(
      `/applications/${id}`,
      {
        status
      }
    );

  return response.data;

}