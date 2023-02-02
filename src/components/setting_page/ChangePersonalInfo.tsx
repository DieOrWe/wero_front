import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ChangePersonalInfo = () => {
    const [values, setValues] = useState({
        id: "",
        password: "",
        verifyPassword: "",
        nickName: "",
        eMail: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (values.password === values.verifyPassword) {
            alert('개인정보 변경이 완료되었습니다.')
            document.location.href = '/';
        } else {
            alert('Verify Password에 Password와 같은 값을 입력해 주세요.')
        }
    }

    return (
        <div>
            <div className='flex flex-col mt-8 mx-20'>
                <div className='flex items-center mb-6'>
                    <img className='w-7 h-7 md:w-auto md:h-auto' src="img/PersonalSettings.png" alt="" />
                    <p className='text-lg md:text-xl font-bold ml-1'>회원정보</p>
                    <img className='mx-1 w-2 md:w-3' src="img/arrow.png" alt="" />
                    <img className='mx-1 w-7 h-7 md:w-auto md:h-auto' src="img/ChangePersonalInfo.png" alt="" />
                    <p className='text-lg md:text-xl font-bold ml-1'>내정보 수정</p>
                </div>
                <div className='mb-7 w-28 h-8 md:w-40 md:h-10 rounded-lg bg-gray-100 items-center'>
                    <Link to={'/setting/userInfo'} className='flex justify-between items-center w-full h-full'>
                        <img src="img/leftArrow.png" alt="" />
                        <p>뒤로</p>
                        <p> </p>
                    </Link>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='w-full'>
                        <input type='text'
                            name='id'
                            value={values.id}
                            onChange={handleChange}
                            className="h-12 pl-2 text-lg font-mono gap-2 my-3 border-b-2 border-gray-400 border-solid w-full"
                            placeholder='ID'
                        />
                    </div>
                    <div className='w-full'>
                        <input type='password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                            className="h-12 pl-2 text-lg font-mono gap-2 my-3 border-b-2 border-gray-400 border-solid w-full"
                            placeholder='Password'
                        />
                    </div>
                    <div className='w-full'>
                        <input type='password'
                            name='verifyPassword'
                            value={values.verifyPassword}
                            onChange={handleChange}
                            className="h-12 pl-2 text-lg font-mono gap-2 my-3 border-b-2 border-gray-400 border-solid w-full"
                            placeholder='verifyPassword'
                        />
                    </div>
                    <div className='w-full'>
                        <input type='text'
                            name='nickName'
                            value={values.nickName}
                            onChange={handleChange}
                            className="h-12 pl-2 text-lg font-mono gap-2 my-3 border-b-2 border-gray-400 border-solid w-full"
                            placeholder='Nickname'
                        />
                    </div>
                    <div className='w-full'>
                        <input type='text'
                            name='eMail'
                            value={values.eMail}
                            onChange={handleChange}
                            className="h-12 pl-2 text-lg font-mono gap-2 my-3 border-b-2 border-gray-400 border-solid w-full"
                            placeholder='E-mail'
                        />
                    </div>
                    <div className='place-self-end'>
                        <button onClick={handleSubmit}
                            className='mt-16 h-12 rounded-3xl text-slate-200 bg-black w-44 border-slate-300'
                        >저장하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePersonalInfo