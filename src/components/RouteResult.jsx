export function RouteResult({url}){
    return(
        <div className="flex flex-col">
            <h3 className="text-[#F9D848] mt-16 text-center text-xl">Optimerad rutt:</h3>
            <a href={url} className="text-[#F9D848] text-center">Klicka här</a>
        </div>
    )
}