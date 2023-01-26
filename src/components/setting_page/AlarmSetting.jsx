import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const AlarmSetting = props => {
    const [pushStatus, setPushStatus] = useState(true);
    const [receiveStatus, setReceiveStatus] = useState(true);

    const onPushChangeToggle = e => {
        setPushStatus(!pushStatus);
    }
    const onReceiveChangeToggle = e => {
        setReceiveStatus(!receiveStatus);
    }

    return (
        <div>
            <div className='flex flex-col mt-8 mx-20'>
                <div className='flex items-center mb-6'>
                    <img src="img/AlarmSettings.png" alt="" />
                    <p className='text-xl font-bold mx-2'>알림설정</p>
                </div>
                <Link to={'/setting'}>
                    <div className='flex mb-7 justify-between items-center w-40 h-10 rounded-lg bg-gray-100'>
                        <img src="img/leftArrow.png" alt="" />
                        <p>뒤로</p>
                        <p> </p>
                    </div>
                </Link>
                <div className='flex justify-between mt-8 font-semibold text-xl text-slate-700'>
                    <p> </p>
                    <p>PUSH 알림</p>
                    <div className='flex gap-1 items-center'>
                        <div className='relative inline-block w-12 mr-2 align-middle'>
                            <input type="checkbox" name='toggle' id='toggle' onChange={onPushChangeToggle} checked={pushStatus}
                                className={pushStatus ? `left-0 bg-white absolute block w-7 h-7 rounded-full border-4 appearance-none cursor-pointer`
                                    : `right-0 duration-200 ease-in absolute block w-7 h-7 rounded-full bg-yellow-point border-4 outline-none appearance-none cursor-pointer`} />
                            <label htmlFor="toggle" className='block overflow-hidden h-7 rounded-full bg-gray-300 cursor-pointer'></label>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-6 font-semibold text-xl text-slate-700'>
                    <p> </p>
                    <p>수신 편지 알림</p>
                    <div className='flex gap-1 items-center'>
                        <div className='relative inline-block w-12 mr-2 align-middle'>
                            <input type="checkbox" name='receiveToggle' id='receiveToggle' onChange={onReceiveChangeToggle} checked={receiveStatus}
                                className={receiveStatus ? `left-0 bg-white absolute block w-7 h-7 rounded-full border-4 appearance-none cursor-pointer`
                                    : `right-0 duration-200 ease-in absolute block w-7 h-7 rounded-full bg-yellow-point border-4 outline-none appearance-none cursor-pointer`} />
                            <label htmlFor="receiveToggle" className='block overflow-hidden h-7 rounded-full bg-gray-300 cursor-pointer'></label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AlarmSetting