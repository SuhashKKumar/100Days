import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase/firebase";
import { setUserDetails } from "@/config/redux/slices/userDetails";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { closeModal } from "@/config/redux/slices/modalSlice";

export const useEmailHandler = () => {
    const dispatch = useAppDispatch();
    const emailHandler = async (email, password, username) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth?.currentUser;
            const userDetails = {
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL,
                id: user?.uid,
                displayName: username,
            };
            saveUserDetails(userDetails);
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
        dispatch(closeModal());
    };

    const saveUserDetails = (userDetails) => {
        sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
        dispatch(setUserDetails(userDetails));
    };

    return { emailHandler };
};
