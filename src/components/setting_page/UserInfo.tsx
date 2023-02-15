import React from "react";
import { Link } from "react-router-dom";

const UserInfo = () => {
    return (
        <div>
            <div className="flex flex-col mx-20 mt-8">
                <div className="flex items-center mb-6">
                    <img
                        className="w-7 h-7 md:w-auto md:h-auto"
                        src="img/PersonalSettings.png"
                        alt=""
                    />
                    <p className="ml-1 text-lg font-bold md:text-xl">
                        회원정보
                    </p>
                </div>
                <div className="items-center h-8 bg-gray-100 rounded-lg mb-7 w-28 md:w-40 md:h-10">
                    <Link
                        to={"/setting"}
                        className="flex items-center justify-between w-full h-full"
                    >
                        <img src="img/leftArrow.png" alt="" />
                        <p>뒤로</p>
                        <p> </p>
                    </Link>
                </div>
                <Link to={"/setting/userInfo/myPage"}>
                    <div className="flex items-center justify-between w-full h-16 mb-2 bg-gray-100 rounded-lg">
                        <p> </p>
                        <div className="flex items-center">
                            <img
                                className="w-7 h-7 md:w-auto md:h-auto"
                                src="img/MyPage.png"
                                alt=""
                            />
                            <p className="ml-1">마이페이지</p>
                        </div>
                        <img src="img/arrow.png" className="mr-2" alt="" />
                    </div>
                </Link>
                <Link to={"/setting/userInfo/changeUserInfo"}>
                    <div className="flex items-center justify-between w-full h-16 mb-2 bg-gray-100 rounded-lg">
                        <p> </p>
                        <div className="flex items-center">
                            <img
                                className="w-7 h-7 md:w-auto md:h-auto"
                                src="img/ChangePersonalInfo.png"
                                alt=""
                            />
                            <p className="ml-1">개인정보 수정</p>
                        </div>
                        <img src="img/arrow.png" className="mr-2" alt="" />
                    </div>
                </Link>
            </div>
            <div className="mb-44"></div>
        </div>
    );
};

export default UserInfo;
