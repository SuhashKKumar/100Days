import Link from "next/link";

const SecondaryButton = ({ text, navigate }) => {
    return (
        <button className="bg-grey rounded w-[65%] py-3">
            <Link href={navigate}>{text}</Link>
        </button>
    );
};

export default SecondaryButton;
