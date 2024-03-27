import convention from "../assets/images/convention.svg"
import Metas from "../components/Metas";
import DevCard from "../components/DevCard";
import auto from "../assets/images/auto.png";
import local from "../assets/images/local.png";
import build from "../assets/images/Builds.png";
import roll from "../assets/images/roll.png";


const developer = () => {
    return (
        <section id="developer" className='px-[40px] '>
            <div className="bg-dullBlack rounded-mediumBorder pt-[120px] pb-[120px]">
                <div className="container mx-auto px-[30px]">
                    <Metas
                        img={convention}
                        pillTitle={'Convention over Configuration'}
                        title={'Developer-Friendly Kubernetes Abstractions'}
                        description={'Deploy and scale applications without battling the intricacies of K8s and spending valuable time configuring low-level K8s resources repeatedly.'}
                    />
                    <div className="flex flex-wrap mb-[80px]">
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={auto}
                                className={`top-[55px] left-1/2 transform -translate-x-1/2 -translate-y-1/2]`}
                                title={'Autoscaler'}
                                description={'Seamlessly enable vertical- and horizontal autoscaling with CPU- & Memory limits, number of replicas & avg. CPU utilisation Targets.'}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={local}
                                className={`top-[55px] left-1/2 transform -translate-x-1/2 -translate-y-1/2]`}
                                title={'Network Interfaces'}
                                description={'Manage Private and Public Network Interfaces and let Rig automatically handle the rest.'}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={roll}
                                className={`top-[65px] right-0`}
                                title={'Environment Variables'}
                                description={'Automate configuring the low-level Kubernetes resources on both container and pod-level.'}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={build}
                                className={`top-0`}
                                title={'Config Files'}
                                description={'Our platform simplifies config files and their mounting.Don’t spend time changing low-level K8s resources.'}
                            />
                        </div>
                    </div>

                    <Metas
                        img={convention}
                        pillTitle={'Development'}
                        title={'Flexible and scalable Deployment Engine'}
                        description={'Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rig enables developers to deploy well-configured applications in Kubernetes without the complexity.'}
                    />
                    <div className="flex flex-wrap mb-[80px]">
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={auto}
                                className={`top-[55px] left-1/2 transform -translate-x-1/2 -translate-y-1/2]`}
                                title={'Autoscaler'}
                                description={'Seamlessly enable vertical- and horizontal autoscaling with CPU- & Memory limits, number of replicas & avg. CPU utilisation Targets.'}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={local}
                                className={`top-[55px] left-1/2 transform -translate-x-1/2 -translate-y-1/2]`}
                                title={'Network Interfaces'}
                                description={'Manage Private and Public Network Interfaces and let Rig automatically handle the rest.'}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={roll}
                                className={`top-[65px] right-0`}
                                title={'Environment Variables'}
                                description={'Automate configuring the low-level Kubernetes resources on both container and pod-level.'}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-[8px] mb-[20px]">
                            <DevCard
                                imgSrc={build}
                                className={`top-0`}
                                title={'Config Files'}
                                description={'Our platform simplifies config files and their mounting.Don’t spend time changing low-level K8s resources.'}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default developer