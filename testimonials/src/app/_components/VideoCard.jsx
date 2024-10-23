"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const VideoCard = ({ section }) => {
    const {
        name,
        designation,
        description,
        rating,
        bgImg,
    } = section;
    return (
        <div className="card p-0 gap-0">
            <div className={`relative`}>
                <Image
                    className=" rounded-t-lg"
                    src={bgImg}
                    width={"full"}
                    height={500}
                    alt="test"
                />
                <div className="bg-gradient-to-t from-black to-transparent w-full absolute bottom-0 left-0 pb-3">
                    <div className=" px-5 flex flex-col text-start gap-1">
                        <h4 className="text-xl font-bold ">{name}</h4>
                        <h5 className="font-semibold w-[65%]">
                            {designation}
                        </h5>
                        <h5 className="flex flex-row justify-end gap-1">
                            {rating &&
                                Array(rating)
                                    .fill()
                                    .map((_, index) => (
                                        <FontAwesomeIcon
                                            key={index}
                                            icon={faStar}
                                            size="lg"
                                            style={{ color: "#FFD43B" }}
                                        />
                                    ))}
                        </h5>
                    </div>
                </div>
            </div>
            <div className="bg-primary-300 rounded-b-lg">
                <p className="text-xl text-start font-bold py-2 px-3">
                    &ldquo;{description}&rdquo;
                </p>
            </div>
        </div>
    );
};

export default VideoCard;
