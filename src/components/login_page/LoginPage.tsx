import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import WhatIsWero from "./WhatIsWero";

const LoginPage = () => {
    const googleLoginUrl = "/api/user/getGoogleAuthUrl";
    const handleGoogle = () => {
        fetch(googleLoginUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.text())
            .then((resp) => {
                window.open(resp, "_blank", "width=500, height=500");
            });
    };

    return (
        <div>
            {/* 왼쪽 로고,문구 */}
            <div className="absolute mb-12 ml-12 text-white bottom-5 left-10">
                <p className="hidden text-gray-300 2xl:inline 2xl:text-3xl 2xl:font-semibold">
                    오늘 하루 힘든 일이 있었나요?
                </p>
                <div className="hidden 2xl:font-extrabold 2xl:inline 2xl:text-5xl">
                    <p className="">오늘의 나에게 편지를 쓰고</p>
                    <p className="mt-2 mb-8">타인의 편지로 위로 받아가세요</p>
                </div>
            </div>

            <div className="float-right h-screen bg-white">
                <div className="mt-2 ml-5 place-self-start mb-28">
                    <WhatIsWero />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="mx-56 md:mx-96"></div>
                    {/* 위에 welcome.. 문구 */}
                    <div className="mb-12">
                        <p className="hidden mb-4 text-4xl font-bold 2xl:inline">
                            Welcome!
                        </p>
                        <p className="mb-4 text-4xl font-bold 2xl:hidden">
                            WeRo
                        </p>
                        <p className="font-medium">
                            반가워요! 자세한 내용을 들려주시겠어요?
                        </p>
                    </div>
                    {/* 구글로 로그인 */}
                    <div
                        onClick={handleGoogle}
                        className="flex justify-center py-4 border-2 rounded-lg"
                    >
                        <p className="mx-24">구글로 로그인</p>
                    </div>
                    <br />
                    {/* or 선 */}
                    <div className="flex items-center my-2 mx-14">
                        <div className="w-32 h-px bg-black md:w-44"></div>
                        <p className="px-2">or</p>
                        <div className="w-32 h-px bg-black md:w-44"></div>
                    </div>

                    {/* 아이디, 비밀번호 입력칸 ~ 로그인버튼 */}
                    <Login />

                    <div className="flex justify-center space-x-2 text-sm mt-7">
                        <p>아직 회원이 아니신가요?</p>
                        <Link
                            to="/signUp"
                            className="border-b-2 text-slate-400 border-slate-400"
                        >
                            여기서 회원가입 하세요!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
