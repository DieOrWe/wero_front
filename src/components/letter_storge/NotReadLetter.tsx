import React, { useEffect, useState } from 'react'
import './Letter.css'

const dummyData = [
    {
        state: '안읽음',
        nickName: '닉네임3',
        letterName: '제목 제목',
        date: '2023.01.18',
        content: '나는 3번인데ㅋㅋ',
    },
]

interface MailData {
    state: string,
    nickName: string,
    letterName: string,
    date: string,
    content: string,
}

interface ReadMail {
    letterName: string,
    content: string,
    nickName: string,
}

const NotReadLetter = () => {
    const [letter, setLetter] = useState<ReadMail>({
        letterName: '',
        content: '',
        nickName: '',
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (data: MailData) => {
        setLetter({
            letterName: data.letterName,
            content: data.content,
            nickName: data.nickName,
        });
        setShow(true);
    }

    const [letters, setLetters] = useState<MailData[]>([]);

    useEffect(() => {
        setLetters(dummyData);
    }, []);

    return (
        <div className='mt-12 ml-20 mr-20'>
            <ol style={{ listStyleType: 'decimal' }} reversed>
                {letters.map((data, index) => {
                    return (
                        <div key={index} onClick={() => handleShow(data)} className='flex justify-between py-2 mb-3 border-b-2'>
                            <div className='flex space-x-4'>
                                <li>{data.state}</li>
                                <p>{data.nickName}</p>
                            </div>
                            <p>{data.letterName}</p>
                            <p>{data.date}</p>
                        </div>
                    )
                })}
            </ol>

            {show && (<div className='modal'>
                <div className='overlay' onClick={handleClose}>
                    <div className="modal-content">
                        <div className='flex justify-between'>
                            <h1 className='pr-8 mb-5 text-2xl font-semibold border-b-2 border-slate-600'>{letter.letterName}</h1>
                            <h3 className='pl-4 mb-5 text-xl border-b-2 border-slate-600'>{letter.nickName}</h3>
                        </div>
                        <p className='pb-20 mb-10 text-xl border-b-2 border-slate-600'>
                            {letter.content}
                        </p>
                        <button className="close-modal bg-slate-200 rounded-xl" onClick={handleClose}>
                            뒤로가기
                        </button>
                        <button className="text-white bg-black answer-btn rounded-xl" onClick={handleClose}>
                            회신
                        </button>
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default NotReadLetter