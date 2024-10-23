import { faStar, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import person1 from "/public/_assets/images/person1.jpg";
import Logo from "./Logo";
import SecondaryHeadline from "./SecondaryHeadline";
import PrimaryDescription from "./PrimaryDescription";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";
const Testimonial = () => {
    const headline = " Ready to collect testimonials?";
    const description =
        "We are loved by Fortune 500 companies, early-stage startups, marketing agencies, real estate agents, freelancers, and many more. Your customers' testimonials are the best social proof you can get! Get started now 👇";
    const bulletPoints = [
        "No coding skill required.",
        "Start in under 2 minutes.",
    ];
    return (
        <div className="">
            <div className="layout">
                <div className="max-w-5xl bg-yellow-100 rounded-lg text-black flex flex-col items-start gap-5 p-12">
                    <div>
                        {Array(5)
                            .fill()
                            .map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    size="lg"
                                    style={{ color: "#f95801" }}
                                />
                            ))}
                    </div>
                    <h1 className="font-black text-2xl leading-relaxed text-start">
                        We embedded Testimonial.to on the last page of our
                        Prehireforms (candidates&apos; skills assessment forms)
                        and candidates&apos; testimonials started coming in
                        automatically!{" "}
                        <span className="bg-yellow-200">
                            Testimonials collection is now automated and we
                            don&apos;t need to ask customers or candidates to
                            drop us testimonials anymore!
                        </span>
                    </h1>
                    <div className="flex gap-2 items-center">
                        <Image
                            src={person1}
                            width={80}
                            className="rounded-full"
                            alt="Kam Ling"
                        />
                        <div className="flex flex-col gap-0.5 items-start">
                            <h1 className="font-bold text-lg">Kam Ling</h1>
                            <p className="font-medium text-xl">
                                Co-Founder at Prehireforms.com
                            </p>
                        </div>
                    </div>
                    <div className="self-end">
                        <Logo />
                    </div>
                </div>
            </div>
            <div className="layout">
                <SecondaryHeadline text={headline} />
                <PrimaryDescription description={description} />
                {bulletPoints.map((point, index) => {
                    return (
                        <div
                            key={index}
                            className="flex gap-3 items-center justify-center"
                        >
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                style={{ color: "#00fa32" }}
                            />
                            <p className="text-sm text-gray-300">{point}</p>
                        </div>
                    );
                })}
                <div className="btn-container md:w-[80%] lg:md:w-[60%]">
                    <PrimaryButton
                        text="Get started with FREE credits"
                        navigate="/signup"
                    />
                    <OutlineButton />
                </div>
                <p className="underline text-sm text-gray-400">
                    See our pricing →
                </p>
            </div>
        </div>
    );
};

export default Testimonial;
