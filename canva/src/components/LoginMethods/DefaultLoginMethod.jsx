import Button from "../UI/Button";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { useGoogleHandler } from "@/hooks/useGoogleHandler";
import { setLoginMethod } from "@/config/redux/slices/loginMethod";

const DefaultLoginMethod = () => {
    const {googleLoginHandler}= useGoogleHandler();
    const dispatch = useAppDispatch();
    const setEmailHandler = () => {
            const email = {
                method: "email",
                description:
                    "We’ll check if you have an account, and help create one if you don’t.",
                text: "Continue with email",
            };
            dispatch(setLoginMethod(email));
        };
        const otherMethodHandler = () => {
        const otherEmail = {
            method: "otherEmail",
            description: "",
            text: "Continue to Canva",
        };
        dispatch(setLoginMethod(otherEmail));
    };
    return (
        <>
            <Button
                variant="secondary"
                outline={true}
                label="Continue with Google"
                extraStyles="w-full"
                clickHandler={googleLoginHandler}
            />
            <Button
                variant="secondary"
                outline={true}
                label="Continue with email"
                extraStyles="w-full"
                clickHandler={setEmailHandler}
            />
            <Button
                variant="secondary"
                outline={true}
                label="Continue another way"
                extraStyles="w-full"
                clickHandler={otherMethodHandler}
            />
            <p className="text-xs">
                By Continuing, you agree to Canva's{" "}
                <a href="#" className="underline text-purple-600">
                    Terms of Use.
                </a>{" "}
                Read our{" "}
                <a className="underline text-purple-600">Privacy Policy.</a>
            </p>
            <h3
                onClick={() => {
                    setLoginMethod("workEmail");
                }}
                className="text-center font-semibold mt-4 text-sm cursor-pointer hover:text-gray-600"
            >
                Sign up with your work email
            </h3>
        </>
    );
};

export default DefaultLoginMethod;
