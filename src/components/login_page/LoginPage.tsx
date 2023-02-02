import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const LoginPage = () => {
    return (
        <div>
            {/* 왼쪽 로고, 문구 */}
            <div className='absolute mb-12 ml-12 bottom-5 left-10 text-white'>
                <div className='hidden 2xl:font-extrabold 2xl:inline 2xl:text-5xl'>
                    <p style={{ textShadow: "-1px 0px tomato, 0px 1px tomato, 1px 0px tomato, 0px -1px tomato" }} className='mix-blend-difference'>오늘 하루도 힘들었죠?</p>
                    <p style={{ textShadow: "-1px 0px tomato, 0px 1px tomato, 1px 0px tomato, 0px -1px tomato" }} className='mt-2 mb-8 mix-blend-difference'>WeRo에서 위로 받고 가세요</p>
                </div>
                <p style={{ textShadow: "-1px 0px tomato, 0px 1px tomato, 1px 0px tomato, 0px -1px tomato" }} className='hidden 2xl:inline 2xl:text-2xl 2xl:font-semibold mix-blend-difference'>
                    힘들면 쉬었다 가도 괜찮아요. 우리 모두가 응원하고있어요!</p>
            </div>

            <div className='flex flex-col items-center justify-center float-right h-screen bg-white'>
                <div className='mx-0 md:mx-96'></div>
                {/* 위에 welcome.. 문구 */}
                <div className='mb-12'>
                    <p className='mb-4 text-4xl font-bold hidden 2xl:inline'>Welcome!</p>
                    <p className='mb-4 text-4xl font-bold 2xl:hidden'>WeRo</p>
                    <p className='font-medium'>반가워요! 자세한 내용을 들려주시겠어요?</p>
                </div>
                {/* 구글로 로그인 */}
                <div className='flex justify-center py-4 border-2 rounded-lg'>
                    <p className='mx-24'>구글로 로그인</p>
                </div>
                <br />
                {/* or 선 */}
                <div className='flex items-center my-2 mx-14'>
                    <div className='h-px bg-black w-32 md:w-44'></div>
                    <p className='px-2'>or</p>
                    <div className='h-px bg-black w-32 md:w-44'></div>
                </div>

                {/* 아이디, 비밀번호 입력칸 ~ 로그인버튼 */}
                <Login />

                <div className='flex justify-center space-x-2 text-sm mt-7'>
                    <p>아직 회원이 아니신가요?</p>
                    <Link to='/signUp' className='border-b-2 text-slate-400 border-slate-400'>여기서 회원가입 하세요!</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage