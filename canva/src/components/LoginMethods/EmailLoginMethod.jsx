"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { resetLoginMethod } from "@/config/redux/slices/loginMethod";
import { useEmailHandler } from "@/hooks/useEmailHandler";
import Button from "../UI/Button";
import { db } from "@/config/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { closeModal } from "@/config/redux/slices/modalSlice";
import { setUserDetails } from "@/config/redux/slices/userDetails";

const EmailLoginMethod = () => {
    const initialState = {
        email: "",
        username: "",
        password: "",
        error: "",
    };
    const [oldUser, setOldUser] = useState(true);
    const [usersList, setUsersList] = useState([]);
    const [loginDetails, setLoginDetails] = useState(initialState);
    const { emailHandler } = useEmailHandler();
    const dispatch = useAppDispatch();
    const usersRef = collection(db, "users");
    useEffect(() => {
        const getUsersList = async () => {
            try {
                const users = await getDocs(usersRef);
                const filteredUsers = users.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
                setUsersList(filteredUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        getUsersList();
    }, [loginDetails]);
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const loginDetailsHandler = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value, error: "" });
    };
    const searchEmailHandler = () => {
        const { email } = loginDetails;
        if (validateEmail(email)) {
            const result = usersList.find((user) => user.email === email);
            if (result) {
                setOldUser(true);
                setLoginDetails({ ...loginDetails, error: "" });
                sessionStorage.setItem("userDetails", JSON.stringify(...usersList));
                dispatch(setUserDetails(result));
                dispatch(closeModal());
            } else {
                setOldUser(false);
            }
        } else {
            setLoginDetails({
                ...loginDetails,
                error: "Please enter a valid email",
            });
        }
    };
    const submitEmailHandler = async () => {
        const { email, password, username } = loginDetails;
        if (validateEmail(email)) {
            await emailHandler(email, password, username);
            dispatch(resetLoginMethod());
        } else
            setLoginDetails({
                ...loginDetails,
                error: "Please enter a valid email",
            });
    };
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold text-sm">
                    Email (personal or work)
                </label>
                <input
                    type="email"
                    id="email"
                    value={loginDetails.email}
                    name="email"
                    onChange={loginDetailsHandler}
                    placeholder="tonystark@gmail.com"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                    required
                />
                {loginDetails.error && (
                    <p className="text-red-500 text-sm">{loginDetails.error}</p>
                )}
            </div>
            {!oldUser && (
                <>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="username"
                            className="font-semibold text-sm"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="text"
                            name="username"
                            value={loginDetails.username}
                            onChange={loginDetailsHandler}
                            placeholder="tonystark123"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-semibold text-sm"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={loginDetails.password}
                            onChange={loginDetailsHandler}
                            placeholder="password"
                            className="border border-gray-300 rounded-lg p-2 w-full"
                            required
                        />
                    </div>
                </>
            )}
            <Button
                variant="primary"
                label="Continue"
                extraStyles="w-full"
                clickHandler={oldUser ? searchEmailHandler : submitEmailHandler}
            />
        </div>
    );
};

export default EmailLoginMethod;
