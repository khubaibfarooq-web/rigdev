const DevCard = (props) => {

    const { imgSrc, className, title, description } = props
    return (
        <>
            <div className="bg-lightBlack border rounded-primaryBorder border-darkGrey min-h-xl relative overflow-hidden">
                <img className={`absolute ${className}`} src={imgSrc} />
                <div className="absolute top-[280px] left-1/2 transform -translate-x-1/2 -translate-y-1/2] text-center w-full">
                    <h4 className="text-lg text-white mb-[10px]">{title}</h4>
                    <p className="text-md max-w-lg mx-auto text-slateGrey">{description}</p>
                </div>
            </div>
        </>
    )
}

export default DevCard