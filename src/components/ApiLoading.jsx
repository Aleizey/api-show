
export default function ApiLoading() {

    return (
        <div className="loading">
            <div className="overflow-y-scroll fixed inset-0 z-200 flex justify-center items-center bg-black/80 bg-opacity-50">

                <div className="size-25 rounded-full animate-spin border-8 border-dashed border-red-500 border-t-transparent">
                </div>
            </div>
        </div>
    )
}