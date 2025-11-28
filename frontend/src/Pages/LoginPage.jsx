import React, { useState } from "react";
import InputBar from "../Components/InputBar";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="bg-[#1d232a] w-full min-h-screen flex justify-center items-center">

            <div className="flex flex-col w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>

                <form className="flex flex-col gap-4">

                    <InputBar
                       type="text"
                        label="Email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={setEmail}
                    />

                    <InputBar
                        type="password"
                        label="Password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={setPassword}
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-900 transition duration-300"
                    >
                        Login
                    </button>

                </form>
            </div>

        </div>
    );
};

export default LoginPage;
