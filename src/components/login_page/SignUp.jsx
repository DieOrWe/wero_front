import React, { useEffect, useRef, useState } from 'react'

const SignUp = () => {
    const focusRef = useRef();
    const [values, setValues] = useState({
        id: "",
        password: "",
        verifyPassword: "",
        nickName: "",
        eMail: "",
    });

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = e => {
        if (values.password === values.verifyPassword) {
            alert('이제 로그인 하여 We로 서비스를 이용해보세요!!')
            document.location.href = '/';
        } else {
            alert('Verify Password에 Password와 같은 값을 입력해 주세요.')
        }
    }

    useEffect(() => {
        focusRef.current.focus();
    }, [])

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
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
                    <div className='mt-16'>
                        <div>
                            <input type='text'
                                name='id'
                                value={values.id}
                                onChange={handleChange}
                                className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
                                placeholder='ID'
                                ref={focusRef}
                            />
                        </div>
                        <div>
                            <input type='password'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
                                placeholder='Password'
                            />
                        </div>
                        <div>
                            <input type='password'
                                name='verifyPassword'
                                value={values.verifyPassword}
                                onChange={handleChange}
                                className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
                                placeholder='verifyPassword'
                            />
                        </div>
                        <div>
                            <input type='text'
                                name='nickName'
                                value={values.nickName}
                                onChange={handleChange}
                                className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
                                placeholder='Nickname'
                            />
                        </div>
                        <div>
                            <input type='text'
                                name='eMail'
                                value={values.eMail}
                                onChange={handleChange}
                                onKeyDown={onEnter}
                                className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
                                placeholder='E-mail'
                            />
                        </div>
                        <div className='flex ml-48 space-x-3 text-base text-slate-600'>
                            <p className='border-b-2 border-slate-300'>아이디 찾기</p>
                            <p className='border-b-2 border-slate-300'>비밀번호 찾기</p>
                        </div>
                        <button onClick={handleSubmit}
                            className='mt-16 bg-black rounded-md h-14 text-slate-200 w-96 border-slate-300'
                        >Sign Up</button>
                        <div className='flex'>
                            <p className='mt-3 text-sm border-b-2 ml-80 border-slate-300'>고객센터</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp