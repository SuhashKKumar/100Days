import { section2Data } from "../_lib/data/section2/section2Data";
import PrimaryHeadline from "./PrimaryHeadline";
import Setup from "./Setup";

const Section2 = () => {
    const primaryHeadline =
        "Collect and display testimonials all in one solution";
    return (
        <div className="layout">
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
