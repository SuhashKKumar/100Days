import Link from "next/link";
import { section2Data } from "../_lib/data/section2/section2Data";
import VideoCard from "./VideoCard";
import TextCard from "./TextCard";
import PrimaryHeadline from "./PrimaryHeadline";
import Setup from "./Setup";

const Section2 = () => {
    const primaryHeadline =
        "Collect and display testimonials all in one solution";
    return (
        <div className="my-[3rem] mx-auto text-center flex flex-col gap-4 px-6 md:px-7 md:max-w-5xl md:my-[5rem]">
            <PrimaryHeadline text={primaryHeadline} />
            <div className="flex flex-col gap-12">
                {section2Data.map((section, index) => (
                    <Setup key={index} section={section} />
                ))}
            </div>
        </div>
    );
};

export default Section2;
