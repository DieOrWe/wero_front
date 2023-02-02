import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
    const post = 0;
    const get = 0;
    return (
        <div>
            <div className='flex flex-col mt-8 mx-20'>
                <div className='flex items-center mb-6'>
                    <img className='w-7 h-7 md:w-auto md:h-auto' src="img/PersonalSettings.png" alt="" />
                    <p className='text-lg md:text-xl font-bold ml-1'>회원정보</p>
                    <img className='mx-1 w-2 md:w-3' src="img/arrow.png" alt="" />
                    <img className='mx-1 w-7 h-7 md:w-auto md:h-auto' src="img/MyPage.png" alt="" />
                    <p className='text-lg md:text-xl font-bold ml-1'>마이페이지</p>
                </div>
                <div className='mb-7 w-28 h-8 md:w-40 md:h-10 rounded-lg bg-gray-100 items-center'>
                    <Link to={'/setting/userInfo'} className='flex justify-between items-center w-full h-full'>
                        <img src="img/leftArrow.png" alt="" />
                        <p>뒤로</p>
                        <p> </p>
                    </Link>
                </div>
                <div className='flex justify-between border-b-2 h-10 text-lg mb-5'>
                    <p>내가 쓴 편지의 수:</p>
                    <div className='flex space-x-2'>
                        <p>{post}</p>
                        <p>통</p>
                    </div>
                </div>
                <div className='flex justify-between border-b-2 h-10 text-lg'>
                    <p>내가 받은 편지의 수:</p>
                    <div className='flex space-x-2'>
                        <p>{get}</p>
                        <p>통</p>
                    </div>
                </div>
            </div>
            <div className='mb-56'></div>
        </div>
    )
}

export default MyPage