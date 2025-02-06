import { useEffect } from "react";
import ApiError from "./ApiError";
import ApiLoading from "./ApiLoading";
import { useFetch } from "./UseFetch";

const SeasonsInfo = ({ seasonsShow }) => {

    const { datos, error, loading } = useFetch(`https://api.tvmaze.com/seasons/${seasonsShow.id}/episodes`);

    if (loading) return <ApiLoading />;
    if (error) return <ApiError error={error} />;

    return (
        <div>
            {datos.map(epi => (
                <div key={epi.id}>
                    <h2>{epi.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default SeasonsInfo;
