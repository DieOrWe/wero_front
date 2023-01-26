import React from 'react'
import { Link } from 'react-router-dom'

const Setting = props => {
    return (
        <div>
            <div className='flex flex-col space-y-2 mt-20 mx-20'>
                <Link to={'/setting/userInfo'}>
                    <div className='flex justify-between items-center w-full h-16 rounded-lg bg-gray-100'>
                        <p> </p>
                        <div className='flex items-center'>
                            <img src="img/PersonalSettings.png" alt="" />
                            <p className='ml-1'>회원정보</p>
                        </div>
                        <img src="img/arrow.png" className='mr-2' alt="" />
                    </div>
                </Link>
                <Link to={'/setting/alarmSetting'}>
                    <div className='flex justify-between items-center w-full h-16 rounded-lg bg-gray-100'>
                        <p> </p>
                        <div className='flex items-center'>
                            <img src="img/AlarmSettings.png" alt="" />
                            <p className='ml-1'>알림설정</p>
                        </div>
                        <img src="img/arrow.png" className='mr-2' alt="" />
                    </div>
                </Link>
                <Link to={'/setting/userInfo'}>
                    <div className='flex justify-between items-center w-full h-16 rounded-lg bg-gray-100'>
                        <p> </p>
                        <div className='flex items-center'>
                            <img src="img/CustService.png" alt="" />
                            <p className='ml-1'>고객센터</p>
                        </div>
                        <img src="img/arrow.png" className='mr-2' alt="" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Setting