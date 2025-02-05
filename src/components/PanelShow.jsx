import DOMPurify from "dompurify";

const PanelShow = ({ panel }) => {

    return (
        <>
            <div className="h-panel">
                <img className="w-full h-full object-cover" src={panel.image.original} alt="" />
                <div className="flex flex-col p-5 space-y-5 shadow-text-panel ">
                    <p className="text-8xl font-bold w-xs mt-auto">{panel.name.toUpperCase()}</p>
                    <div className="text-xs w-lg" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(panel.summary.toUpperCase()) }} />
                    <div className="space-x-2 mt-auto">{panel.genres.map(ge =>
                        <span key={ge} className="text-sm bg-black/80 p-2 px-5 font-bold">
                            {ge.toUpperCase()}</span>
                    )}</div>
                </div>
            </div>
        </>
    )
};

export default PanelShow;