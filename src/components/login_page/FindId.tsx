import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const FindId = () => {
    const [email, setEmail] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleSubmit = () => {
        alert('이메일로 ID가 전송되었습니다!')
        document.location.href = '/';
    }
    return (
        <div className='flex flex-col items-center'>
            <div className='h-full bg-white'>
                <div className='mx-60 md:mx-96'></div>
                <div className='ml-10 md:ml-44'>
                    <div className='mt-24 text-slate-700'>
                        <h1 className='text-4xl font-bold'>Welcome to We로!</h1>
                        <p className='mt-4 font-semibold'>회원이 되어 당신의 이야기를 모두에게 들려주세요</p>
                    </div>
                    <div className='mt-10'>
                        <input type='text'
                            name='eMail'
                            value={email}
                            onChange={handleChange}
                            className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
                            placeholder='E-mail'
                        />
                    </div>
                    <div className='font-bold'>
                        <p className='mt-10'>가입하신 ID의 이메일을 적어주세요.</p>
                        <p className='mt-3'>해당 이메일로 ID를 보내드릴게요!</p>
                    </div>
                    <div className='flex mt-20 ml-56 space-x-3 text-base text-slate-600'>
                        <Link to='/findPw' className='border-b-2 border-slate-300'>비밀번호 찾기</Link>
                        <Link to='/' className='border-b-2 border-slate-300'>로그인</Link>
                    </div>
                    <button onClick={handleSubmit}
                        className='bg-black rounded-md mt-28 h-14 text-slate-200 w-96 border-slate-300'
                    >Send E-mail</button>
                    <div className='flex'>
                        <p className='mt-3 text-sm border-b-2 ml-80 border-slate-300'>고객센터</p>
                    </div>
                </div>
                <div className='h-10'></div>
            </div>
        </div>
    )
}

export default FindId