import { useEffect, useState } from "react";
import ApiError from "./ApiError";
import ApiLoading from "./ApiLoading";
import { useFetch } from "./UseFetch";
import DOMPurify from "dompurify";

const SeasonsInfo = ({ seasonsShow }) => {

    const { datos, error, loading } = useFetch(`https://api.tvmaze.com/seasons/${seasonsShow.id}/episodes`);

    if (loading) return <ApiLoading />;
    if (error) return <ApiError error={error} />;

    return (
        <div className=" space-y-4">

            {datos.map(epi => (
                <div key={epi.id} className="flex flex-row items-center space-x-5 border-b-1 border-b-[#555] rounded-b-sm py-3 transition-all hover:bg-gray-600/10 cursor-pointer">
                    <div>
                        <p className="text-3xl">
                            {epi.number ? epi.number : "#"}
                        </p>
                    </div>
                    <div>
                        <div className="w-[200px] h-[120px]">
                            <img src={epi.image ? epi.image.original : "https://www.hemomadrid.com/wp-content/uploads/2015/09/imagen-vacia.jpg"} className=" rounded-sm w-full h-full object-cover shrink-0" alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex flex-row justify-between text-xl font-bold">
                            <div>{epi.name}</div>
                            <div>{epi.runtime} min</div>
                        </div>
                        <div>
                            <div className="text-sm text-[#b1b1b1]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(epi.summary ? epi.summary : "N/A") }} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SeasonsInfo;
