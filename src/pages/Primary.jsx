import TitlePage from "../components/titlePage";
import PanelShow from "../components/PanelShow";
import { useContext, useState } from "react";
import { showContext } from "../App";
import ModalShow from "../components/ModalShow";

export default function Primary() {

    const { datos } = useContext(showContext);
    const [panel, setPanel] = useState(datos[0]);
    const [modal, setModal] = useState(null);

    if (modal) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }

    return (
        <>
            <TitlePage tipo={"Home"} />

            {panel && (
                <PanelShow panel={panel} />
            )}

            {modal && (
                <ModalShow modal={modal} onClose={() => setModal(null)} />
            )}

            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 ">
                {datos.map((item) => (
                    <div key={item.id}>
                        <img src={item.image.original} alt="" className="panel-show w-full h-full shrink-0" onMouseOver={() => setPanel(item)} onClick={() => setModal(item)} />
                    </div>
                ))}
            </div>
        </>
    );
}
