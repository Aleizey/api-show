import TitlePage from "../components/titlePage";
import { useContext, useState } from "react";
import PanelShow from "../components/PanelShow";
import { showContext } from "../App";

const Categorias = () => {

    const { datos } = useContext(showContext);
    const [panel, setPanel] = useState(datos[0]);
    const [modal, setModal] = useState(null);


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