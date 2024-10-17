import PrimaryDescription from "./PrimaryDescription";
import Link from "next/link";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";

const Setup = ({ section }) => {
    const {
        id,
        sectionTitle,
        headline,
        description,
        btn,
        path,
        img,
        note,
        actionNote,
        actionNoteLink,
        name,
        designation,
        order,
    } = section;
    return (
        <div className="container flex flex-col gap-12 mx-auto md:flex-row md:justify-between md:items-center">
            <div
                className={`left-container flex flex-col gap-3 text-start items-start md:max-w-[50%] ${order}
                `}
            >
                <p className="text-primary-300 text-lg font-bold">
                    {sectionTitle}
                </p>
                <p className="font-semibold text-3xl">{headline}</p>
                <PrimaryDescription
                    description={description}
                    extraStyle="text-start"
                />
                {note && <p className="text-gray-400 text-sm">{note}</p>}
                {actionNote && (
                    <Link href={actionNoteLink} className="underline text-xl">
                        {actionNote}
                    </Link>
                )}
                <PrimaryButton text={btn} navigate={path} />
            </div>
            <div className={`right-container ${name && "relative"}`}>
                <Image
                    src={img}
                    alt={sectionTitle}
                    className={`rounded-lg  `}
                />
                {name && (
                    <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black to-transparent">
                        <div className=" text-end m-4">
                            <p className="text-2xl font-bold md:text-xl lg:text-2xl">
                                {name}
                            </p>
                            <p className="font-bold text-lg md:text-sm lg:text-lg">
                                {designation}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Setup;
