

const TitlePage = ({tipo}) => {

    return (
        <div className=" bottom-0 right-0 fixed z-200">
            <p className="text-2xl bg-black/80 border-s-4 border-s-blue-500 cursor-pointer p-3 mb-5 pe-3 ">{tipo.toUpperCase()}</p>
        </div>
    )


}

export default TitlePage