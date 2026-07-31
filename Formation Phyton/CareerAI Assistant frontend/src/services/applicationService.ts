import api from "../api/api";

export async function getApplications() {

    const response = await api.get("/applications");

    return response.data;
}

export async function createApplication(data: any) {

    const response = await api.post("/applications", data);

    return response.data;
}

export async function deleteApplication(id: number) {

    const response = await api.delete(`/applications/${id}`);

    return response.data;
}