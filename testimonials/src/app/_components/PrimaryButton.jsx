import Link from "next/link";

const PrimaryButton = ({ text, navigate }) => {
    return (
        <button className="rounded py-2 px-6 bg-primary-300 hover:bg-primary-400">
            <Link href={navigate}>{text}</Link>
        </button>
    );
};

export default PrimaryButton;
