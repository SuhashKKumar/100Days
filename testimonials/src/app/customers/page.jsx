import PrimaryDescription from "../_components/PrimaryDescription";
import PrimaryHeadline from "../_components/PrimaryHeadline";
import TextWithIcon from "../_components/TextWithIcon";
import { businessData } from "../_lib/data/business/businessData";

const page = () => {
    const headline = "Leverage your social proof";
    const description =
        "Testimonial makes collecting text and video testimonials fast and easy for any business who needs social proof.";
    return (
        <div>
            <div className="bg-grey py-3 px-7 pb-[6rem] flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <p className="font-medium text-lg">Our customers</p>
                    <PrimaryHeadline text={headline} extraStyle="text-start" />
                    <PrimaryDescription
                        description={description}
                        extraStyle="text-start sm:text-sm"
                    />
                </div>
                <div className="bg-code rounded-lg p-6`">
                    <ul className="flex flex-col gap-4">
                        <li className="text-primary-300 font-bold text-lg">
                            Business
                        </li>
                        {businessData.map(
                            (
                                { icon, point, color, textStyle, size },
                                index
                            ) => {
                                return (
                                    <li
                                        className="flex gap-4 items-center"
                                        key={index}
                                    >
                                        <TextWithIcon
                                            icon={icon}
                                            point={point}
                                            color={color}
                                            size={size}
                                            textStyle={textStyle}
                                        />
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;
