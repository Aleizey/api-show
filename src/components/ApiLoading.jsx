
export default function ApiLoading() {

    return (
        <div className="loading">
            <div className="overflow-y-hidden fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50">

                <div className="size-25 rounded-full animate-spin border-8 border-dashed border-blue-500 border-t-transparent">
                </div>
            </div>
        </div>

        // <>
        //     <div className="overflow-y-hidden fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50">

        //         <div class="scene  ">

        //             <div class="cube">
        //                 <div class="face front grid grid-cols-2"><span className="text-black scale">•</span></div>
        //                 <div class="face back grid grid-cols-2 "><span className="text-black scale">•</span><span className="text-black scale">•</span></div>
        //                 <div class="face right grid grid-cols-2 "><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span></div>
        //                 <div class="face left grid grid-cols-2 "><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span></div>
        //                 <div class="face top grid grid-cols-2 "><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span></div>
        //                 <div class="face bottom grid grid-cols-2"><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span><span className="text-black scale">•</span></div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}