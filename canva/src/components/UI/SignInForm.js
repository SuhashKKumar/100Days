import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { resetLoginMethod } from "@/config/redux/slices/loginMethod";
import EmailLoginMethod from "../LoginMethods/EmailLoginMethod";
import OtherLoginMethod from "../LoginMethods/OtherLoginMethod";
import MobileLoginMethod from "../LoginMethods/MobileLoginMethod";
import DefaultLoginMethod from "../LoginMethods/DefaultLoginMethod";

const SignInForm = () => {
    const dispatch = useAppDispatch();
    const loginMethod = useAppSelector((state) => state.loginMethod);

    return (
        <div className="flex items-center p-4 gap-4">
            <div className="flex flex-col gap-4 p-4 md:p-0 md:w-[50%]">
                <div className="flex items-center">
                    {loginMethod.method && (
                        <div
                            onClick={() => dispatch(resetLoginMethod())}
                            className="cursor-pointer px-2 rounded-full "
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                    )}

                    <h1 className="font-serif text-3xl">{loginMethod.text}</h1>
                </div>
                {loginMethod.description && (
                    <p className="text-sm text-gray-700">
                        {loginMethod.description}
                    </p>
                )}

                {!loginMethod.method && <DefaultLoginMethod />}
                {loginMethod.method === "email" && <EmailLoginMethod />}
                {loginMethod.method === "mobile" && <MobileLoginMethod />}
                {loginMethod.method === "otherEmail" && <OtherLoginMethod />}
            </div>
            <div className="hidden md:block rounded-lg md:max-w-[300px]">
                <Image
                    src="/Drawing.jpg"
                    width={300}
                    layout="responsive"
                    className="rounded-lg"
                    height={400}
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
};

export default SignInForm;
