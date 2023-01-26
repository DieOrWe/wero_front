import React from 'react'
import { useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import LetterStorge from './letter_storge/LetterStorge';
import FirstSettingPage from './setting_page/FirstSettingPage';
import WriteLetter from './write_letter/WriteLetter';

const MainPage = props => {
    const [topButton, setTopButton] = useState({
        email: '_clicked',
        write: '',
        setting: '',
        notification: '',
    })
    const handleClick = e => {
        setTopButton({
            email: '',
            write: '',
            setting: '',
            notification: '',
            [e.target.alt]: '_clicked',
        });
    }

    const onLogout = () => {
        sessionStorage.removeItem('user_id');
        document.location.href = '/';
    }

    return (
        <HashRouter>
            <div className='flex justify-center'>
                <div className='h-full bg-white'>
                    <div className='mx-56 md:mx-96'></div>
                    <div className='flex justify-end mt-8 mr-8 space-x-5'>
                        <Link to='/'><img src={`img/Email${topButton.email}.png`} alt="email" onClick={handleClick} /></Link>
                        <Link to='/write'><img src={`img/Write${topButton.write}.png`} alt="write" onClick={handleClick} /></Link>
                        <Link to='/setting'><img src={`img/Setting${topButton.setting}.png`} alt="setting" onClick={handleClick} /></Link>
                        <Link to='/notification'><img src={`img/Notification${topButton.notification}.png`} alt="notification" onClick={handleClick} /></Link>
                        <img onClick={onLogout} src="img/Logout.png" alt="logout" />
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