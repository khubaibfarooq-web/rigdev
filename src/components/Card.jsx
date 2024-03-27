import abstract from "../assets/images/k8-1.png"
const Card = ({ children }) => {
    return (
        <div className="border border-mediumGrey rounded-primaryBorder pb-[40px]">
            <div className="bg-white pt-[24px] pb-[32px] px-[24px] border-b border-mediumGrey rounded-primaryBorder">
                {children}
                <img src={abstract} className="mb-[32px] w-full" />
                <h5 className="mb-[24px]">Abstract Away K8s Primitives</h5>
                <p>Deploy, manage and debug applications with end-to-end ownership without experiencing bottlenecks or battling Kubernetes hurdles.</p>
            </div>
        </div>
    )
}
export default Card