
const SpinCard = (props) => {
    const { title, description, btnTitle } = props
    return (
        <div className="bg-white border rounded-primaryBorder border-mercuryGrey p-[24px]">
            <h4 className="text-lg text-secondaryText mb-[22px]">{title}</h4>
            <p className="text-md text-primaryText">{description}</p>

        </div>
    )
}

export default SpinCard