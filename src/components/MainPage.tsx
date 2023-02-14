import React, { useEffect } from 'react'
import { useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import LetterStorge from './letter_storge/LetterStorge';
import FirstSettingPage from './setting_page/FirstSettingPage';
import WriteLetter from './write_letter/WriteLetter';

const MainPage = () => {
    const [notify, setNotify] = useState('Notification');
    useEffect(() => {
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
        </HashRouter>
    )
}

export default MainPage