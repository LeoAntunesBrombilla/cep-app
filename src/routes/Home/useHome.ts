import { useQuery } from "@tanstack/react-query";
import { api } from "../../api";

type fetchCepProps = {
    cepId: string
}

const fetchCep = async ({ cepId }: fetchCepProps) => {

    const { data } = await api.get(`cep?cep=${cepId}`);
    return data;
};

export const useHome = ({ cepId }: fetchCepProps) => useQuery(["cep", cepId], () => fetchCep({ cepId }), { enabled: false });
