import { useContext, useEffect, useState } from "react";
import { showContext } from "../App";
import ModalShow from "../components/ModalShow";
import TitlePage from "../components/titlePage";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const MyList = () => {

    const { list } = useContext(showContext);

    const [modal, setModal] = useState(null);
    const [isScroll, setIsScroll] = useState(false);

    if (modal) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }

    const storedList = JSON.parse(localStorage.getItem("lista")) || [];

    console.log(storedList)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>

            <TitlePage tipo={"Mi Lista"} />

            {modal && (
                <ModalShow modal={modal} onClose={() => setModal(null)} list={list} />
            )}

            <div className="flex pt-11.5">
                <div className={`fixed text-4xl ps-10 mt-2.5 font-bold ${isScroll ? "bg-header-2" : "bg-header"} p-2 w-full`}>Mi Lista</div>
                <div className="p-12 mt-15 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 ">
                    {storedList.list ? (
                        storedList.list.map((lista) => (
                            <div key={lista.id}>
                                <img
                                    className="panel-show w-full h-full shrink-0 cursor-pointer scale-90"
                                    src={lista.image?.original || "default-image.jpg"}
                                    width={200}
                                    alt={lista?.name}
                                    onClick={() => setModal(lista)}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="w-full">
                            {/* <p className="text-2xl">No hay elementos en la lista...</p> */}
                            <DotLottieReact
                                src="https://lottie.host/a6373db8-e2ac-42db-89ad-c8aa8f88d500/KLeKTcC6mW.lottie"
                                loop
                                autoplay
                                className=" scale-200"
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MyList;