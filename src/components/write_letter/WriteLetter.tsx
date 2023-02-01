import React, { useState } from 'react'

const WriteLetter = () => {
    const BaseUrl = "http://localhost:8080/api/myLetter/createMyLetter";
    const [letter, setLetter] = useState({
        title: '',
        content: '',
        isCheck: false,
    });
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setLetter({
            ...letter,
            [e.target.name]: e.target.value,
        })
    }
    const handleClick = () => {
        let now = new Date();
        let todayYear = now.getFullYear();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const nowDate = `${todayYear}-${todayMonth}-${todayDate}`;
        fetch(BaseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                myLetterContent: letter.content,
                myLetterCreatedWhen: nowDate,
                myLetterId: `${localStorage.getItem('user_id')}-${letter.title}`,
                myLetterIsPrivate: letter.isCheck,
                myLetterTitle: letter.title,
                writerId: localStorage.getItem('user_id'),
            }),
        });
        alert('전송이 완료되었습니다!');
        document.location.href = '/';
    }
    const handleCheck = () => {
        setLetter({
            ...letter,
            isCheck: !letter.isCheck,
        })
    }

    return (
        <div>
            <div className='flex mb-3 ml-10 text-3xl font-bold mt-14'>
                <img src="img/Write.png" alt="" className='w-10 mr-2' />
                <h1>편지 쓰기</h1>
            </div>
            <div className='mx-20 mt-16'>
                <input type="text" onChange={handleChange} name='title' className='w-full mb-10 border-b-2 border-slate-500' placeholder='제목' />
                <textarea onChange={handleChange} name='content' value={letter.content} className='w-full border-b-2 border-black h-96' placeholder='오늘의 이야기를 들려주세요. :)' />
                <div className='flex items-center justify-between mt-4 space-x-2'>
                    <div className='flex items-center'>
                        <input type="checkbox" onClick={handleCheck} className='w-4 h-4' name="" id="open" />
                        <label htmlFor='open'>편지 공개</label>
                    </div>
                    <button
                        onClick={handleClick}
                        className='h-10 mt-16 bg-black right-20 md:h-12 w-36 md:w-52 rounded-2xl text-slate-200 border-slate-300'
                    >전송</button>
                </div>
            </div>
            <div className='h-16'></div>
        </div>
    )
}

export default WriteLetter