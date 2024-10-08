import Logo from "./Logo";
import Image from "next/image";
import { footerData } from "../_lib/data/footer/footerData";
// import { products } from "../_lib/data/footer/products";
// import { company } from "../_lib/data/footer/company";
// import { customers } from "../_lib/data/footer/customers";
// import footer from "/public/_assets/images/footer.png";

const Footer = () => {
    return (
        <footer className="px-6 my-6 grid md:grid-cols-12 gap-8 lg:gap-20">
            <div className="md:col-span-3 lg:col-span-4">
                <Logo />
                <p className="mt-2">
                    The easiest solution to getting text and video testimonials
                    from your customers
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:col-span-9 lg:col-span-8">
                {footerData.map(({ id, section, subsection }) => {
                    return (
                        <div key={id}>
                            <p className="text-sm uppercase">{section}</p>
                            <ul className="flex flex-col mt-2 gap-1">
                                {subsection.map(({ id, name, image, path }) =>
                                    !image ? (
                                        <li
                                            key={id}
                                            className="text-sm text-gray-400 hover:text-gray-100"
                                        >
                                            {name}
                                        </li>
                                    ) : (
                                        <Image
                                            key={id}
                                            src={path}
                                            alt="Here's our new video"
                                        />
                                    )
                                )}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </footer>
    );
};

export default Footer;
