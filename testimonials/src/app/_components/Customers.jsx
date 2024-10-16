import Image from "next/image";
import { customersData } from "../_lib/data/customers/customersData";

const Customers = () => {
    return (
        <div className="flex flex-col gap-5 border-b border-gray-800 py-9">
            <h2 className="uppercase text-xl font-bold text-gray-300">
                TRUSTED CUSTOMERS
            </h2>
            <div className="grid gap-y-3 justify-items-center items-center grid-cols-2 md:grid-cols-5 md:gap-y-6">
                {customersData.map(({ id, alternate, path }) => {
                    return (
                        <Image
                            src={path}
                            key={id}
                            alt={alternate}
                            width={80}
                            height={100}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Customers;
