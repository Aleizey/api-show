import { useFetch } from "../components/UseFetch";
import ApiError from "../components/ApiError";
import ApiLoading from "../components/ApiLoading";
import TitlePage from "../components/titlePage";
import { useState } from "react";
import PanelShow from "../components/PanelShow";

const Categorias = () => {

    const { datos, error, loading } = useFetch("https://api.tvmaze.com/shows");
    const [panel, setPanel] = useState(null);
    const [modal, setModal] = useState(null);

    if (loading) return <ApiLoading />;
    if (error) return <ApiError error={error} />;

    const Generos = [...new Set(datos.flatMap((item) => item.genres))];

    return (
        <>
            <TitlePage tipo={"Categorias"} />

            {panel && (
                <PanelShow panel={panel} />
            )}

            <div className="p-2">
                <div>
                    <div>
                        {Generos.map(ge => (
                            <>
                                <p className="text-3xl font-bold my-3" key={ge}>{ge}</p>
                                <div className="carusel-show space-x-2">
                                    {datos.map((item) => (
                                        item.genres.includes(ge) && (
                                            <div key={item.id}>
                                                <img src={item.image.original} alt="" className="panel-show w-full h-full " onMouseOver={() => setPanel(item)} onClick={() => setModal(item)} />
                                            </div>
                                        )
                                    ))}
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )

}

export default Categorias;