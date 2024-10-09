"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "./PrimaryButton";
import OutlineButton from "./OutlineButton";
import PrimaryHeadline from "./PrimaryHeadline";
import PrimaryDescription from "./PrimaryDescription";

const Hero = () => {
    return (
        <div className="my-[3rem] mx-auto text-center flex flex-col gap-4 px-6 md:px-7 md:max-w-5xl md:my-[5rem]">
            <PrimaryHeadline />
            <PrimaryDescription />
            <div className="btn-container my-4 flex flex-col gap-4 items-center w-[65%] mx-auto md:flex-row md:w-[60%]">
                <PrimaryButton text="Try FREE now" navigate="/signup" />
                <OutlineButton/>
            </div>
            <p className="text-gray-400 text-sm font-light mx-auto w-[60%]">
                Get started with free credits on us.
                <Link className="underline font-normal ms-1" href="/pricing">
                    See our pricing →
                </Link>
            </p>
        </div>
    );
};

export default Hero;
