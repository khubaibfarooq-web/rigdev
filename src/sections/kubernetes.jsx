import Card from "../components/Card"

const kubernetes = () => {
    return (
        <section id="kubernetes" className="pt-[140px] pb-[150px] bg-dullGrey">
            <div className="container px-3 mx-auto md:space-y-0 md:px-6">
                <div className='text-center'>
                    <div className="text-md pt-1 pb-1 px-3 bg-white border border-lightGreyText  rounded-full inline-flex items-center justify-center mb-[10px]">
                        Fixing K8 complexity
                    </div>
                    <h2 className="max-w-xl mx-auto leading-6 text-4xl font-normal text-center mb-[50px] md:text-5xl ">Don’t let the complexity of Kubernetes leak into your engineering team</h2>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/3 md:w-1/2 px-[10px]">
                        <Card />
                    </div>
                    <div className="w-full lg:w-1/3 md:w-1/2 px-[10px]">
                        <Card />
                    </div>
                    <div className="w-full lg:w-1/3 md:w-1/2 px-[10px]">
                        <Card />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default kubernetes