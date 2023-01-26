import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = props => {
    const post = 0;
    const get = 0;
    return (
        <div>
            <div className='flex flex-col mt-8 mx-20'>
                <div className='flex items-center mb-6'>
                    <img src="img/PersonalSettings.png" alt="" />
                    <p className='text-xl font-bold mx-2'>회원정보</p>
                    <img src="img/arrow.png" className='mx-1 w-3' alt="" />
                    <img src="img/MyPage.png" className='mx-1' alt="" />
                    <p className='text-xl font-bold'>마이페이지</p>
                </div>
                <Link to={'/setting/userInfo'}>
                    <div className='flex mb-7 justify-between items-center w-40 h-10 rounded-lg bg-gray-100'>
                        <img src="img/leftArrow.png" alt="" />
                        <p>뒤로</p>
                        <p> </p>
                    </div>
                </Link>
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
        </div>
    )
}

export default MyPage