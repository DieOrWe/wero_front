import React, { useEffect, useState } from 'react'
import './Letter.css'

const dummyData = [
    {
        state: '보냄',
        nickName: '나',
        letterName: '보낸 편지1',
        date: '2023.01.18',
        content: '나는 1번 보낸편지',
    }, {
        state: '보냄',
        nickName: '나',
        letterName: '보낸 편지2',
        date: '2023.01.18',
        content: '나는 2',
    }, {
        state: '보냄',
        nickName: '나',
        letterName: '보낸 편지3',
        date: '2023.01.18',
        content: '3번입니다.',
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

const SendLetter = () => {
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
        <div className='ml-12 mr-20'>
            <img src="img/delete.png" className='float-right w-6' alt="" />
            <ol style={{ listStyleType: 'decimal' }} reversed className='pt-10' >
                {letters.map((data, index) => {
                    return (
                        <div className='flex space-x-5'>
                            <input type="checkbox" className="check w-12 h-10 appearance-none bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E')]
                            checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E')]" />
                            <div key={index} onClick={() => handleShow(data)} className='flex justify-between w-full py-2 mb-3 border-b-2'>
                                <div className='flex space-x-4'>
                                    <li>{data.state}</li>
                                    <p>{data.nickName}</p>
                                </div>
                                <p>{data.letterName}</p>
                                <p>{data.date}</p>
                            </div>
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
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default SendLetter