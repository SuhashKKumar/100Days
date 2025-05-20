import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/config/firebase/firebase";
import { setUserDetails } from "@/config/redux/slices/userDetails";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { closeModal } from "@/config/redux/slices/modalSlice";
import { resetLoginMethod } from "@/config/redux/slices/loginMethod";

export const useGoogleHandler = () => {
    const dispatch = useAppDispatch();

    const googleLoginHandler = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            const user = auth?.currentUser;
            const userDetails = {
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL,
                uid: user?.uid,
            };
            sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
        dispatch(closeModal());
        dispatch(resetLoginMethod())
    };

    return { googleLoginHandler };
};
