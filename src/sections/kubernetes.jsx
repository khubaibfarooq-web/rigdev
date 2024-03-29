import Card from "../components/Card"

const kubernetes = () => {
    return (
        <section id="kubernetes" className="bg-dullGrey pt-[50px] pb-[50px] md:pt-[140px] md:pb-[150px]">
            <div className="container px-3 mx-auto md:space-y-0 md:px-6">
                <div className='text-center'>
                    <div className="text-md pt-1 pb-1 px-3 mb-[20px] bg-white border border-lightGreyText rounded-full inline-flex items-center justify-center">
                        Fixing K8 complexity
                    </div>
                    <h2 className="max-w-xl mx-auto text-2xl font-normal text-center mb-[25px] md:mb-[50px] md:text-5xl">Don’t let the complexity of Kubernetes leak into your engineering team</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full px-[10px] mb-[20px] xl:w-1/3 md:w-1/2 md:mb-[20px]">
                        <Card />
                    </div>
                    <div className="w-full px-[10px] mb-[20px] xl:w-1/3 md:w-1/2 md:mb-[20px]">
                        <Card />
                    </div>
                    <div className="w-full px-[10px] mb-[20px] xl:w-1/3 md:w-1/2 md:mb-[20px]">
                        <Card />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default kubernetes