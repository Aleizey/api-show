import DOMPurify from "dompurify";

const ModalShow = ({ modal, onClose }) => {

    return (

        <>

            <div className="modal-show overflow-y-scroll fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50">
                <div className="relative p-4 w-full max-w-5xl max-h-full">
                    <div className="animate-modal mt-12 relative overflow-hidden bg-white rounded-lg shadow-sm bg-modal">
                        <div className="relative">
                            <button className="z-1 absolute right-0 mt-2 me-2 p-2 bg-black/60 hover:bg-gray-800/60 rounded-full cursor-pointer
                            " onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-7">
                                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <img className="w-full modal-img object-cover" src={modal.image.original} alt="" />
                        </div>
                        <div className="px-10 mt-4 space-y-2.5">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2">
                                    <div className="flex flex-row space-x-2">
                                        <p className="text-lg text-gray-400">{modal.premiered.slice(0, 4)}</p>
                                        <p className=" w-min text-black font-bold bg-blue-500 items-center flex px-3 text-center rounded-sm">{modal.type}</p>
                                    </div>
                                    <div className="flex flex-row space-x-2 items-center my-3">
                                        <span className="bg-amber-400 p-1 rounded-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" size-5">
                                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                        <p className="font-bold text-3xl">
                                            {modal.rating.average}
                                        </p>
                                    </div>
                                    <div className="">
                                        <div className="" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(modal.summary) }} />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start space-y-3">
                                    <div>
                                        <p className="text-gray-400">Géneros : <span className="text-white"> {modal.genres.join(", ")} </span></p>
                                    </div>
                                    <div>
                                        <p className=" text-gray-400">Pertenece a :</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row justify-between mt-6 pb-4 border-b border-b-gray-700">
                                    <div className="text-3xl font-bold">Episodios</div>
                                    <div className="text-2xl">{modal.name}</div>
                                </div>
                                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam rerum eligendi officiis labore non laborum cum similique, doloribus corrupti, numquam ullam accusantium. Inventore laudantium qui nihil sequi accusantium. Atque?
                                    Consequatur officia ipsum quam a libero delectus cupiditate dignissimos, eveniet temporibus repellat itaque officiis hic labore eaque, minus beatae sed rerum unde reiciendis! Ipsa numquam, repellat maxime delectus esse eligendi.
                                    Vel dolores soluta quas corrupti adipisci repellendus minus! Excepturi distinctio non expedita odio, necessitatibus doloremque quas nesciunt vel voluptatum aperiam illum velit quam asperiores placeat perferendis optio nisi ipsam voluptas.
                                    Quas, ipsa maxime assumenda voluptates, minus facilis vero est repudiandae architecto nulla excepturi, quo cupiditate deserunt quam adipisci ipsum! Magni quas reprehenderit neque distinctio magnam itaque. Voluptate suscipit corporis quidem!
                                    Error fugiat dicta ratione facilis et ea minima! Molestias eligendi iusto voluptatem corporis repellat debitis. Excepturi, temporibus nostrum numquam saepe ad a suscipit quas at aspernatur dolores fugit, soluta ea.
                                    Magnam in iste rem, similique fuga autem dolor accusantium, eos est numquam ipsum rerum itaque impedit amet asperiores officiis! Recusandae velit eius pariatur ab libero expedita eos amet dolorum excepturi!
                                    Voluptas recusandae quaerat unde vero qui explicabo ullam distinctio nostrum, facere saepe dignissimos placeat aliquid alias corporis in veritatis vitae excepturi dolorem accusamus reiciendis? Repudiandae ipsum provident repellat harum nostrum!
                                    Hic odit, labore beatae quisquam harum explicabo consectetur rem tenetur ipsa vero nulla neque nesciunt laborum placeat pariatur quam vitae facilis illo quae odio eaque natus provident sed ex. Voluptate.
                                    Illo facilis voluptas quas dolore quos? Similique ut facilis, doloribus eos dolore totam nisi? Id magni veritatis eaque amet. Aperiam labore neque, quibusdam repellat voluptate rerum maiores suscipit eveniet minima!
                                    Iure, similique aspernatur veniam vero nobis quos vel consequuntur! Optio non cupiditate iusto repudiandae itaque amet officia a magni blanditiis dignissimos, dolorem minima, corporis quaerat quibusdam! Fuga at accusantium consectetur.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default ModalShow;