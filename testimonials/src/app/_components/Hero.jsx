"use client";
import Link from "next/link";
import OutlineButton from "./OutlineButton";
import PrimaryButton from "./PrimaryButton";
import PrimaryHeadline from "./PrimaryHeadline";
import PrimaryDescription from "./PrimaryDescription";
import VideoComp from "./VideoComp";
import Customers from "./Customers";

const Hero = () => {
const primaryHeadline ='Get testimonials from your customers with ease';
const primaryDescription ="Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting."
    return (
        <section className="my-[3rem] mx-auto text-center flex flex-col gap-4 px-6 md:px-7 md:max-w-5xl md:my-[5rem]">
            <PrimaryHeadline text={primaryHeadline} />
            <PrimaryDescription description={primaryDescription} />
            <div className="btn-container my-4 flex flex-col gap-4 items-center w-[65%] mx-auto md:flex-row md:w-[60%]">
                <PrimaryButton text="Try FREE now" navigate="/signup" />
                <OutlineButton />
            </div>
            <p className="text-gray-400 text-sm font-light mx-auto w-[60%]">
                Get started with free credits on us.
                <Link className="underline font-normal ms-1" href="/pricing">
                    See our pricing →
                </Link>
            </p>
            <VideoComp />
<Customers/>        </section>
    );
};

export default Hero;
