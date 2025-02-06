import TitlePage from "../components/titlePage";
import { useContext, useState } from "react";
import PanelShow from "../components/PanelShow";
import { showContext } from "../App";
import ModalShow from "../components/ModalShow";

const Categorias = () => {

    const { datos } = useContext(showContext);
    const [panel, setPanel] = useState(datos[0]);
    const [modal, setModal] = useState(null);

    if (modal) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }

    const Generos = [...new Set(datos.flatMap((item) => item.genres))];

    return (
        <>
            <TitlePage tipo={"Categorias"} />

            {panel && (
                <PanelShow key={panel.id} panel={panel} />
            )}

            {modal && (
                <ModalShow modal={modal} onClose={() => setModal(null)} />
            )}

            <div className="p-2">
                <div>
                    {Generos.map(ge => (
                        <div className="mb-15" key={ge}>
                            <p className="text-3xl font-bold my-3">{ge}</p>
                            <div className="carusel-show space-x-2">
                                {datos.map((item) => (
                                    item.genres.includes(ge) && (
                                        <div key={item.id}>
                                            <img src={item.image.original} alt="" className="panel-show w-full h-full cursor-pointer " onMouseOver={() => setPanel(item)} onClick={() => setModal(item)} />
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default Categorias;