import DOMPurify from "dompurify";
import { useFetch } from "./UseFetch";
import ApiLoading from "./ApiLoading";
import ApiError from "./ApiError";

const PanelShow = ({ panel }) => {

    const { datos, error, loading } = useFetch(`https://api.tvmaze.com/shows/${panel.id}/images`);

    if (loading) console.log(loading);
    if (error) return <ApiError error={error} />;

    const back = datos?.find(image => image.type === "background");

    return (
        <div className="h-panel">
            <div className="bg-h-panel"></div>
            <img
                className="w-full h-full object-cover"
                src={back?.resolutions?.original?.url || panel.image?.original}
                alt={panel.name}
            />
            <div className="flex flex-col justify-center p-5 space-y-5 shadow-text-panel overflow-hidden">
                <p className="text-8xl font-bold w-64 mt-auto max-sm:mb-auto max-sm:text-6xl">{panel.name.toUpperCase()}</p>
                <div
                    className="text-xs w-96 max-sm:text-[10px] max-lg:w-80"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(panel.summary),
                    }}
                />
                <div className="space-x-2 mt-auto max-sm:hidden">
                    {panel.genres.map((ge) => (
                        <span key={ge} className="text-sm bg-black/80 p-2 px-5 font-bold">
                            {ge.toUpperCase()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PanelShow;
