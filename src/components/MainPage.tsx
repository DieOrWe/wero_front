import React, { useEffect } from 'react'
import { useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import LetterStorge from './letter_storge/LetterStorge';
import FirstSettingPage from './setting_page/FirstSettingPage';
import WriteLetter from './write_letter/WriteLetter';

const MainPage = () => {
    const [notify, setNotify] = useState('Notification');
    const [show, setShow] = useState(true);
    useEffect(() => {
        if (localStorage.getItem('pro') !== null) {
            setShow(false)
        }

        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const currentHour = currentDate.getHours();
            const currentMinute = currentDate.getMinutes();

            if ((currentHour === 12 && currentMinute === 9) || (currentHour === 0 && currentMinute === 0)) {
                setNotify('Notification_notified_btm')
            }
        }, 60000); // 매 분마다 호출
        return () => clearInterval(intervalId);
    }, [])

    const handleClose = () => {
        setShow(false)
        localStorage.setItem('pro', 'true');
    };

    const [topButton, setTopButton] = useState({
        email: '_clicked',
        write: '',
        setting: '',
    })
    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as Element;
        if (target.className === 'email') {
            setNotify('Notification')
        }
        setTopButton({
            email: '',
            write: '',
            setting: '',
            [target.className]: '_clicked',
        });
    }

    const onLogout = () => {
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
        localStorage.removeItem('pro');
        document.location.href = '/';
    }

    return (
        <HashRouter>
            <div className='flex justify-center'>
                <div className='h-full bg-white'>
                    <div className='mx-56 md:mx-96'></div>
                    <div className='flex justify-end mt-8 mr-8 space-x-3 md:space-x-5'>
                        <Link to='/'><button className='w-7 h-7 md:w-auto md:h-auto' onClick={handleClick}><img className='email' src={`img/Email${topButton.email}.png`} alt="email" /></button></Link>
                        <Link to='/write'><button className='w-7 h-7 md:w-auto md:h-auto' onClick={handleClick}><img className='write' src={`img/Write${topButton.write}.png`} alt="write" /></button></Link>
                        <Link to='/setting'><button className='w-7 h-7 md:w-auto md:h-auto' onClick={handleClick}><img className='setting' src={`img/Setting${topButton.setting}.png`} alt="setting" /></button></Link>
                        <Link to='/'><button className='w-7 h-7 md:w-auto md:h-auto' onClick={handleClick}><img className='email' src={`img/${notify}.png`} alt="email" /></button></Link>
                        <img className='w-7 h-7' onClick={onLogout} src="img/Logout.png" alt="logout" />
                    </div>
                    <div>
                        <Routes>
                            <Route path='/*' element={<LetterStorge />}></Route>
                            <Route path='/write/*' element={<WriteLetter />}></Route>
                            <Route path='/setting/*' element={<FirstSettingPage />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>

            {show && (<div className='modal'>
                <div className='overlay' onClick={handleClose}>
                    <div className="modal-content">
                        <div className='flex justify-between'>
                            <p className='text-3xl font-bold'>WeRo 이용 가이드</p>
                            <button onClick={handleClose} className='text-2xl'>X</button>
                        </div>
                        <br />
                        <p className='text-lg font-semibold'>1. 상단의 연필 아이콘을 클릭해요.</p>
                        <img src="img/1.png" alt="" />
                        <br />
                        <p className='text-lg font-semibold'>2. 편지를 작성하고 편지 공개 여부를 선택 후 전송버튼을 눌러요.</p>
                        <img src="img/2.png" alt="" />
                        <br />
                        <p className='text-lg font-semibold'>3. 잠시 기다리면 편지가 올거에요</p>
                        <img src="img/3.png" alt="" />
                        <img src="img/4.png" alt="" />
                    </div>
                </div>
            </div>)}
        </HashRouter>
    )
}

export default MainPage