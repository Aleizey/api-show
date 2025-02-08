import { useContext, useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { showContext } from "../App";
import ModalShow from "./ModalShow";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Header = () => {

    const { datos, list } = useContext(showContext);

    let [searchParams, setSearchParams] = useSearchParams()

    const [isScroll, setIsScroll] = useState(false);
    const [isSearch, setSearch] = useState(null);
    const [modal, setModal] = useState(null);

    let Array = []

    if (modal) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }

    const handleChange = (e) => {
        setSearchParams({ [e.target.name]: e.target.value })
    };

    const handleClick = () => {
        if (isSearch) { }
        setSearch(!isSearch);
    };

    if (datos) {

        if (searchParams.get('filter')) {
            Array = [...datos].filter(datos =>
                datos?.name?.toLowerCase()?.includes(searchParams.get("filter")?.toLowerCase())

            );
            console.log("datos filtro", datos)
        } else {
            Array = [...datos]
        }
    }

    useEffect(() => {

        if (datos) { datos }

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, [datos]);

    return (
        <>
            {modal && (
                <ModalShow modal={modal} onClose={() => setModal(null)} list={list} />
            )}

            <div className={`fixed w-full flex flex-row justify-between items-center py-2 px-2 ${isScroll ? "bg-header-2" : "bg-header"}`}>

                <div className="flex flex-row items-center space-x-2">
                    <div className="hidden max-sm:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </div>
                    <div>
                        <img src="https://images.vexels.com/media/users/3/254383/isolated/preview/2ebdc5662c86de652cc98d58b698a1a3-estrella-azul-plana.png?w=360" alt="" className="filter-logo" width={40} height={40} />
                    </div>
                    <Navbar />
                </div>

                <div className="flex flex-row items-center space-x-2">
                    <div className=" bg-black/57 p-1 flex flex-row items-center border border-gray-300"
                    >
                        {/* Buscador */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6 cursor-pointer" onClick={handleClick} >
                            <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        {isSearch ? (
                            <>
                                <div className=" max-lg:hidden">
                                    <input
                                        type="text"
                                        value={searchParams.get("filter") || ""}
                                        className="input-start bg-transparent text-white text-sm w-[300px] rounded-sm block ps-2 outline-0"
                                        onChange={handleChange}
                                        name='filter'
                                        alt='Buscador'
                                    />
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer  max-lg:hidden" onClick={() => setSearchParams("")}>
                                    <path d="M6 18 18 6M6 6l12 12" />
                                </svg>

                                <div className="fixed top-0 mt-15 me-5 z-100 p-5 pt-0 right-0  max-lg:hidden">
                                    <div className="filter-name w-110 max-h-80 overflow-y-scroll rounded-lg rounded-tr-none bg-black/80">
                                        {Array.length > 0 ? (
                                            Array.sort((a, b) => b.rating.average - a.rating.average).map((item) => (
                                                <div key={item.id} className="nav-search flex flex-row items-center justify-between text-lg text-gray-300 p-2 border-b border-b-gray-800/80 space-x-5 hover:bg-gray-500/10 cursor-pointer transition-all" onClick={() => setModal(item)}>
                                                    <p className="text-4xl">
                                                        {item.rating.average > 7 ?
                                                            (
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-green-400">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                                                </svg>
                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-400">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                                                                </svg>
                                                            )
                                                        }
                                                    </p>
                                                    <img src={item.image.original} alt="" className="me-auto shrink-0" width={100} height={40} />
                                                    <p className="text-xl font-bold text-nowrap overflow-hidden text-ellipsis ms-5 max-w-full me-auto"> {item.name}</p>
                                                    {item.ended ?
                                                        (<p className="text-white text-xs p-2 font-bold bg-gradient-to-r from-red-900 to-red-500 px-3 ">FINALIZADO</p>)
                                                        :
                                                        (<p className="text-white text-xs p-2 font-bold bg-gradient-to-r from-green-900 to-green-500  px-3 ">ACTIVO</p>)
                                                    }
                                                </div>
                                            ))
                                        ) : (
                                            <DotLottieReact
                                                src="https://lottie.host/fd9f0119-642b-49f3-8eca-4e05001bc1e2/PqCM9TKiVc.lottie"
                                                loop
                                                autoplay
                                            />
                                        )}
                                    </div>
                                </div>
                            </>

                        ) : null}

                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
                            <path d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>

                    </div>
                </div>

            </div>

            <Outlet />
        </>
    )
}

export default Header;