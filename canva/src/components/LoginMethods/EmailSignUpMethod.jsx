"use client";
import React, { useState } from "react";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { resetLoginMethod } from "@/config/redux/slices/loginMethod";
import { useEmailHandler } from "@/hooks/useEmailHandler";
import Button from "../UI/Button";

const EmailSingUpMethod = () => {
    const initialState = {
        email: "",
        username: "",
        password: "",
        error: "",
    };
    const [loginDetails, setLoginDetails] = useState(initialState);

    const { emailHandler } = useEmailHandler();
    const dispatch = useAppDispatch();
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const loginDetailsHandler = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value, error: "" });
    };

    const submitEmailHandler = async () => {
        if (validateEmail(loginDetails.email)) {
            await emailHandler(
                loginDetails.email,
                loginDetails.password,
                loginDetails.username
            );
            dispatch(resetLoginMethod());
        } else
            setLoginDetails({
                ...loginDetails,
                error: "Please enter a valid email",
            });
    };
    return (
        <div className="flex flex-col gap-3">
            <t-r className="flex flex-col gap-1">
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
            </t-r>
            <div className="flex flex-col gap-1">
                <label htmlFor="username" className="font-semibold text-sm">
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
                <label htmlFor="password" className="font-semibold text-sm">
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
            <Button
                variant="primary"
                label="Continue"
                extraStyles="w-full"
                clickHandler={submitEmailHandler}
            />
        </div>
    );
};

export default EmailSingUpMethod;
