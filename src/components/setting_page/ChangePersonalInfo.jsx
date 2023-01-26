import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ChangePersonalInfo = props => {
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
                    <img src="img/PersonalSettings.png" alt="" />
                    <p className='text-xl font-bold mx-2'>회원정보</p>
                    <img src="img/arrow.png" className='mx-1 w-3' alt="" />
                    <img src="img/ChangePersonalInfo.png" className='mx-1' alt="" />
                    <p className='text-xl font-bold'>내정보 수정</p>
                </div>
                <Link to={'/setting/userInfo'}>
                    <div className='flex mb-7 justify-between items-center w-40 h-10 rounded-lg bg-gray-100'>
                        <img src="img/leftArrow.png" alt="" />
                        <p>뒤로</p>
                        <p> </p>
                    </div>
                </Link>
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