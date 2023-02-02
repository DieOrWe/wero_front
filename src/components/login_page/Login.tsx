import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const BaseUrl = "http://localhost:8080/api/user/login";

    const focusRef = useRef<any>();

    const [values, setValues] = useState({
        id: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = () => {
        // fetch(BaseUrl, {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json", 
        //     },
        //     body: JSON.stringify({
        //         userCreatedWhen: '',
        //         userEmail: '',
        //         userId: values.id,
        //         userNickName: '',
        //         userNotify: true,
        //         userPw: values.password,
        //     }),
        // })
        // .then ((response) => {
        //     if (!response.ok) {
        //     alert('아이디 혹은 비밀번호를 다시 입력하세요.');
        //     throw new Error('login error! -- 400 or 500');
        //   }
        //   return response.json()
        // })
        // .then((res) => {
        //     localStorage.setItem('token', res.token);
        //     localStorage.setItem('user_id', values.id);
        //     document.location.href = '/';
        // })
        localStorage.setItem('user_id', values.id);
        document.location.href = '/';
    }

    useEffect(() => {
        focusRef.current.focus();
    }, [])

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div>
            <div className='flex flex-col items-center'>
                <div>
                    <input type='text'
                        name='id'
                        value={values.id}
                        onChange={handleChange}
                        className="h-12 my-3 border-b-2 border-gray-400 border-solid w-72 md:w-96"
                        placeholder='E-mail'
                        ref={focusRef}
                    />
                </div>
                <div>
                    <input type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onKeyDown={onEnter}
                        className="h-12 my-3 border-b-2 border-gray-400 border-solid w-72 md:w-96"
                        placeholder='Password'
                    />
                </div>
                <div className='flex mb-20 space-x-5 md:space-x-24'>
                    <div className='flex'>
                        <input type="checkbox" name="" id="" />
                        <p className='mx-1 text-sm'>아이디 기억하기</p>
                    </div>
                    <div className='space-x-2 text-xs md:text-sm'>
                        <Link to='/findId' className='border-b-2 text-slate-800 border-slate-400'>아이디 찾기</Link>
                        <Link to='/findPw' className='border-b-2 text-slate-800 border-slate-400'>비밀번호 찾기</Link>
                    </div>
                </div>
                <button onClick={handleSubmit}
                    className='h-10 text-white bg-black rounded-md w-72 md:w-96 border-slate-300'
                >Log In</button>
            </div>

        </div>
    )
}

export default Login