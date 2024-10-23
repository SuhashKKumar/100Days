import Link from "next/link";
import { section1Data } from "../_lib/data/section1/section1Data";
import VideoCard from "./VideoCard";
import TextCard from "./TextCard";
import PrimaryHeadline from "./PrimaryHeadline";

const Section1 = () => {
    const primaryHeadline = "Add testimonials to your website with no coding!";
    return (
        <div className="my-[3rem] mx-auto text-center flex flex-col gap-4 px-6 md:px-7 md:max-w-5xl md:my-[5rem]">
            <PrimaryHeadline text={primaryHeadline} />
            <p className="primary-description">
                Copy and paste our HTML code to add the Wall Of Love (
                <span className="underline">
                    <Link href="/wall-of-fame">👉 full version</Link>
                </span>
                ) to your website. We support any no-code platform (Webflow,
                WordPress, you name it!)
            </p>
            <div className="columns-[255px] mx-auto w-[80%] md:w-[100%] md:columns-[275px] lg:w-[100%]">
                {section1Data.map((section, index) => {
                    return section.type === "video" ? (
                        <VideoCard key={index} section={section} />
                    ) : (
                        <TextCard key={index} section={section} />
                    );
                })}
            </div>
        </div>
    );
};

export default Section1;
