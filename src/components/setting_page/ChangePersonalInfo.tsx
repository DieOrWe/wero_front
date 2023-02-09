import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const ChangePersonalInfo = () => {
    const [values, setValues] = useState({
        userCreatedWhen: "",
        id: "",
        notify: true,
        password: "",
        nickName: "",
        eMail: "",
    });

    const findUser = "http://localhost:8080/api/user";
    useEffect(() => {
        fetch(findUser + `/${localStorage.getItem('user_id')}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
        })
            .then(resp => resp.json())
            .then(resp => setValues({
                ...values,
                userCreatedWhen: resp.userCreatedWhen,
                id: resp.userId,
                notify: resp.userNotify,
                eMail: resp.userEmail,
                nickName: resp.userNickName
            }))
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [effectiveness, setEffectiveness] = useState({
        nickName: true,
        eMail: true,
    })
    const isNickName = (nickName: string): boolean => {
        const nickNameRegex =
            /^[가-힣a-zA-Z0-9]{2,}$/;
        return nickNameRegex.test(nickName);
    };
    const isEmail = (email: string): boolean => {
        const emailRegex =
            /^[a-z0-9_+.-]{3,}@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        let isGood = false;
        if (e.target.name === 'nickName') {
            isGood = isNickName(e.target.value);
        } else if (e.target.name === 'eMail') {
            isGood = isEmail(e.target.value);
        }
        setEffectiveness({
            ...effectiveness,
            [e.target.name]: isGood,
        })
    };

    const handleShow = () => {
        if (effectiveness.nickName && effectiveness.eMail) {
            setShow(true);
        } else {
            alert('아직 완성되지 않은 부분이 있어요!')
        }
    }

    const updateUser = "http://localhost:8080/api/user/data";
    const handleSave = async () => {
        await fetch(updateUser, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                userCreatedWhen: values.userCreatedWhen,
                userEmail: values.eMail,
                userId: values.id,
                userNickName: values.nickName,
                userNotify: values.notify,
                userPw: values.password,
            }),
        })
            .then(resp => resp.json())
            .then(resp => {
                if (Object.keys(resp).includes('message')) {
                    alert(resp.message);
                } else {
                    localStorage.removeItem('token');
                    localStorage.setItem('token', resp.token);
                    alert('변경 사항이 저장되었습니다!')
                    document.location.href = '/';
                }
            })
    }


    const commonStyle = 'h-12 pl-2 my-3 font-mono text-lg w-96 border-b-2';

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
                    <p className='mt-5'>변경하실 닉네임을 입력해주세요.</p>
                    <div>
                        <input
                            type="text"
                            name="nickName"
                            value={values.nickName}
                            onChange={handleChange}
                            className={effectiveness.nickName ?
                                `${commonStyle} border-gray-400 border-solid` : `${commonStyle} border-red-700 border-solid`}
                            placeholder='Nickname'
                        />
                        {
                            effectiveness.nickName === false ?
                                <p className="font-sans text-sm text-yellow-600">닉네임은 두 글자 이상으로 정해주세요</p>
                                : null
                        }
                    </div>
                    <p className='mt-14'>변경하실 이메일을 입력해주세요</p>
                    <div>
                        <input
                            type="text"
                            name="eMail"
                            value={values.eMail}
                            onChange={handleChange}
                            className={effectiveness.eMail ?
                                `${commonStyle} border-gray-400 border-solid` : `${commonStyle} border-red-700 border-solid`}
                            placeholder='E-mail'
                        />
                        {
                            effectiveness.eMail === false ?
                                <p className="font-sans text-sm text-yellow-600">이메일을 정확하게 적어주세요!</p>
                                : null
                        }
                    </div>
                    <div className='place-self-end'>
                        <button onClick={handleShow}
                            className='mt-16 h-12 rounded-3xl text-slate-200 bg-black w-44 border-slate-300'
                        >저장하기</button>
                    </div>
                </div>
            </div>
            {show && (<div className='modal'>
                <div className='overlay'>
                    <div style={{ width: "300px" }} className="modal-content">
                        <input className='w-56 h-8 mb-3' type="text" value={localStorage.getItem('user_id')!} readOnly />
                        <br />
                        <input className='w-56 h-8 mb-20' onChange={handleChange} value={values.password} name='password' type="password" placeholder='password' />
                        <button className="mb-10 text-white bg-black close-modal rounded-xl" onClick={handleSave}>
                            저장하기
                        </button>
                        <button className="close-modal bg-slate-200 rounded-xl" onClick={handleClose}>
                            뒤로가기
                        </button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default ChangePersonalInfo