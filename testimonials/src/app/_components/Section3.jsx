import Image from "next/image";
import { customersData } from "../_lib/data/customers/customersData";
import PrimaryDescription from "./PrimaryDescription";
import PrimaryHeadline from "./PrimaryHeadline";
import Link from "next/link";

const Section3 = () => {
    const text = "Integrate with any platform";
    const description =
        "We built the ultimate tool for showcasing your satisfied customers. With 3-lines of HTML code, you can embed all your testimonials to any platform!";
    return (
        <div className="my-[3rem] mx-auto text-center flex flex-col gap-4 px-6 md:px-7 md:max-w-5xl md:my-[5rem]">
            <PrimaryHeadline text={text} />
            <PrimaryDescription description={description} />
            <div className="grid gap-y-3 justify-items-center items-center grid-cols-2 md:grid-cols-4 md:gap-y-6">
                {customersData.slice(0, -2).map(({ id, alternate, path }) => (
                    <div
                        key={id}
                        className="bg-white w-[13rem] h-[3.5rem] flex items-center rounded-xl"
                    >
                        <Image className="mx-auto" src={path} alt={alternate} />
                    </div>
                ))}
            </div>
            <p className="underline text-gray-400">
                <Link href="/integrations">✨ See all 100+ integrations</Link>
            </p>
        </div>
    );
};

export default Section3;
