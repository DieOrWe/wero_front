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
                    <p className="ml-1 text-lg font-bold md:text-xl text-[#5F5F5F]">
                        회원정보
                    </p>
                </div>
                <div className='mb-7 w-28 h-8 md:w-40 md:h-10 rounded-lg bg-gray-100 items-center'>
                    <Link to={'/setting'} className='flex justify-center items-center w-full h-full'>
                        <p className='font-bold text-[#5F5F5F]'>뒤로</p>
                        <p> </p>
                    </Link>
                </div>
                <div className='flex flex-col space-y-2 mx-12'>
                <Link to={'/setting/userInfo/myPage'}>
                    <div className='flex mb-2 justify-center items-center w-full h-16 rounded-lg bg-gray-100'>
                        <p> </p>
                        <div className='flex items-center'>
                            <img className='w-7 h-7 md:w-auto md:h-auto' src="img/MyPage.png" alt="" />
                            <p className='ml-1 font-bold text-[#5F5F5F]'>마이페이지</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/setting/userInfo/changeUserInfo'}>
                    <div className='flex mb-2 justify-center items-center w-full h-16 rounded-lg bg-gray-100'>
                        <p> </p>
                        <div className='flex items-center'>
                            <img className='w-7 h-7 md:w-auto md:h-auto' src="img/ChangePersonalInfo.png" alt="" />
                            <p className='ml-1 font-bold text-[#5F5F5F]'>개인정보 수정</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mb-44"></div>
        </div>
    </div>
    );
};

export default UserInfo;
