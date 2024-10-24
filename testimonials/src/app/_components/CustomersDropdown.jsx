import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { customersDropdownData } from "../_lib/data/CustomersDropdown/CustomersDropdownData";
import Link from "next/link";

const CustomersDropdown = () => {
    return (
        <div className="bg-grey rounded-xl p-8 flex flex-col gap-3">
            {customersDropdownData.map(({ id, name, icon }) => {
                return (
                    <Link
                        href=""
                        key={id}
                        className="flex items-center gap-4 justify-start hover:bg-black px-6 py-4 rounded-lg"
                    >
                        <div className="bg-white p-3.5 rounded-xl w-[3.25rem] flex justify-center">
                            <FontAwesomeIcon
                                icon={icon}
                                size="lg"
                                style={{ color: "#595b5f" }}
                            />
                        </div>
                        <p>{name}</p>
                    </Link>
                );
            })}
        </div>
    );
};

export default CustomersDropdown;
