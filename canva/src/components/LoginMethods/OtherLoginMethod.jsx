import Button from "../UI/Button";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { useGoogleHandler } from "@/hooks/useGoogleHandler";
import { setLoginMethod } from "@/config/redux/slices/loginMethod";

const OtherLoginMethod = () => {
    const { googleLoginHandler } = useGoogleHandler();
    const dispatch = useAppDispatch();
    const setMobileHandler = () => {
        const email = {
            method: "mobile",
            description:
                "We’ll check if you already have an account, You can't sign up with a mobile number in your current location",
            text: "Log in with mobile",
        };
        dispatch(setLoginMethod(email));
    };
    const setEmailHandler = () => {
        const email = {
            method: "email",
            description:
            "We’ll check if you have an account, and help create one if you don’t.",
            text: "Continue with email",
        };
        dispatch(setLoginMethod(email));
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
                label="Login with mobile"
                extraStyles="w-full"
                clickHandler={setMobileHandler}
            />
        </>
    );
};

export default OtherLoginMethod;
