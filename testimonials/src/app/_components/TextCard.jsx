"use client";
import { useState } from "react";
import Image from "next/image";
import {
    faHeart,
    faHeartCrack,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector, useAppDispatch } from "../_lib/hooks/ReduxHooks";
import {
    likeComment,
    unlikeComment,
} from "../_lib/redux/features/textCardLikes/textCardLikesSlice";

const TextCard = ({ section }) => {
    const {
        id,
        type,
        name,
        designation,
        description,
        rating,
        bgImg,
        logo,
        sideLogo,
        heart,
        topRating,
        modalbtn,
    } = section;
    const [reaction, setReaction] = useState(false);
    const postLikes = useAppSelector((state) => state.likesCount.value);
    const dispatch = useAppDispatch();
    const likeHandler = () => {
        if (!reaction) {
            dispatch(likeComment());
            setReaction(true);
        } else {
            dispatch(unlikeComment());
            setReaction(false);
        }
    };
    // console.log(bgImg,"bgImg from text card")
    return (
        <>
            <div className="card">
                <div className="flex gap-2 items-start">
                    <Image
                        className="rounded-full w-[50px] h-[50px]"
                        src={bgImg}
                        alt={name}
                    />
                    <div className="flex flex-col gap-1 text-start w-[70%]">
                        <h5 className="text-md font-semibold">{name}</h5>
                        <p className="text-sm">{designation}</p>
                    </div>
                    {sideLogo && (
                        <Image
                            className="rounded-full w-[25px] h-[25px]"
                            src={sideLogo}
                            alt={name}
                        />
                    )}
                </div>
                {topRating && (
                    <div className="text-start">
                        {Array(topRating)
                            .fill()
                            .map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    size="lg"
                                    style={{ color: "#FFD43B" }}
                                />
                            ))}
                    </div>
                )}
                <p className="text-start">{description}</p>
                {modalbtn && <p className="text-start">{modalbtn}</p>}
                {logo && (
                    <Image
                        className="rounded-full w-[80px] mx-auto"
                        src={logo}
                        alt={name}
                    />
                )}
                {heart && (
                    <div className="flex items-center gap-1">
                        <div onClick={likeHandler}>
                            {reaction ? (
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    size="lg"
                                    style={{ color: "#ff0000" }}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faHeartCrack}
                                    size="lg"
                                    style={{ color: "#ff0000" }}
                                />
                            )}
                        </div>
                        <p>{postLikes}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default TextCard;
