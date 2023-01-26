import React from 'react'
import { Link } from 'react-router-dom'

const UserInfo = props => {
    return (
        <div>
            <div className='flex flex-col mt-8 mx-20'>
                <div className='flex items-center mb-6'>
                    <img src="img/PersonalSettings.png" alt="" />
                    <p className='text-xl font-bold ml-2'>회원정보</p>
                </div>
                <Link to={'/setting'}>
                    <div className='flex mb-7 justify-between items-center w-40 h-10 rounded-lg bg-gray-100'>
                        <img src="img/leftArrow.png" alt="" />
                        <p>뒤로</p>
                        <p> </p>
                    </div>
                </Link>
                <Link to={'/setting/userInfo/myPage'}>
                    <div className='flex mb-2 justify-between items-center w-full h-16 rounded-lg bg-gray-100'>
                        <p> </p>
                        <div className='flex items-center'>
                            <img src="img/MyPage.png" alt="" />
                            <p className='ml-1'>마이페이지</p>
                        </div>
                        <img src="img/arrow.png" className='mr-2' alt="" />
                    </div>
                </Link>
                <Link to={'/setting/userInfo/changeUserInfo'}>
                    <div className='flex mb-2 justify-between items-center w-full h-16 rounded-lg bg-gray-100'>
                        <p> </p>
                        <div className='flex items-center'>
                            <img src="img/ChangePersonalInfo.png" alt="" />
                            <p className='ml-1'>개인정보 수정</p>
                        </div>
                        <img src="img/arrow.png" className='mr-2' alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default UserInfo