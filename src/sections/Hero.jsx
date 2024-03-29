import { NavLink } from "react-router-dom";
import arrowRight from "../assets/images/arrow-right.svg";
import gitBlack from "../assets/images/git-black.svg";
import google from "../assets/images/gogle.svg";
import aws from "../assets/images/aws.svg";
import cloud from "../assets/images/cloud.svg";
import stack from "../assets/images/stack.png";


const Hero = () => {
    return (
        <section id="hero" className="bg-white pt-[80px] pb-[60px] md:pt-[160px] md:pb-[120px]">
            <div className="container px-3 mx-auto md:px-6">
                <div className="flex flex-wrap items-center flex-col-reverse md:flex-row">
                    <div className="md:w-1/2">
                        <div className="mb-10 md:mb-[124px]">
                            <h1 className="max-w-xl leading-6 text-4xl font-normal text-center mb-8 md:text-5xl md:text-left">
                                The application platform for Kubernetes
                            </h1>
                            <p className="mb-7 max-w-md">Deploy, manage and troubleshoot cloud-native applications at scale without overwhelming your engineers with the complexity of Kubernetes.</p>
                            <div className="md:flex items-center">
                                <NavLink className="inline-flex items-center justify-between bg-secondaryText pt-2 pb-2 px-5 rounded-secondaryBorder mb-3 mr-2 md:mb-0 md:mr-3 ">
                                    <span className="text-white font-medium">Documentation</span>
                                    <img className="ml-3 h-auto w-auto" src={arrowRight} />
                                </NavLink>

                                <NavLink className="inline-flex items-center justify-between bg-white pt-2 pb-2 px-4 rounded-secondaryBorder border border-lightGreyText">
                                    <img className="mr-3 h-auto w-auto" src={gitBlack} />
                                    <span className="font-medium">Get Started</span>
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <p className="text-primaryText font-medium mb-[12px]">Compaitable with</p>
                            <div className="flex flex-wrap space-x-2 ">
                                <img src={google} className="mb-1 md:mb-0" alt="Google icon" />
                                <img src={aws} className="mb-1 md:mb-0" alt="AWS icon" />
                                <img src={cloud} alt="Cloud icon" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-[40px] md:mb-0 md:w-1/2">
                        <img src={stack} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero