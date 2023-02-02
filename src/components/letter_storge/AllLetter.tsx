import React, { useEffect, useState } from 'react'
import './Letter.css'

const dummyData = [
    {
        id: '1',
        state: '읽음',
        nickName: '닉네임1',
        letterName: '제목 제목 제목제목제목',
        date: '2023.01.12',
        content: '안녕 나는 1번이야',
    }, {
        id: '2',
        state: '읽음',
        nickName: '닉네임2',
        letterName: '제목 제목',
        date: '2023.01.14',
        content: '나는 2번이야',
    }, {
        id: '3',
        state: '안읽음',
        nickName: '닉네임3',
        letterName: '제목 제목',
        date: '2023.01.18',
        content: '나는 3번인데ㅋㅋ',
    },
]

interface MailData {
    id: string,
    state: string,
    nickName: string,
    letterName: string,
    date: string,
    content: string,
}

interface ReadMail {
    id: string,
    letterName: string,
    content: string,
    nickName: string,
}

const AllLetter = () => {
    const [letter, setLetter] = useState<ReadMail>({
        id: '',
        letterName: '',
        content: '',
        nickName: '',
    });
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (data: MailData) => {
        setLetter({
            id: data.id,
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

    // 삭제할 편지 id 리스트 : deleteLetters
    const [deleteLetters, setDeleteLetters] = useState<string[]>([]);
    const handleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as Element;
        for (let i = 0; i < deleteLetters.length; i++) {
            const element = deleteLetters[i];
            if (element === target.id) {
                setDeleteLetters(deleteLetters.filter((element) => element !== target.id));
                return '';
            }
        }
        setDeleteLetters([
            ...deleteLetters,
            target.id,
        ])
    }

    return (
        <div className='ml-10 mr-10 md:ml-12 md:mr-20'>
            <img src="img/delete.png" className='float-right w-6' alt="" />
            <ol style={{ listStyleType: 'decimal' }} reversed className='pt-10' >
                {letters.map((data, index) => {
                    return (
                        <div key={data.id} className='flex space-x-5 text-sm md:text-base'>
                            <input type="checkbox" id={data.id} onClick={handleCheck} className="check w-12 h-10 appearance-none bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E')]
                            checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E')]" />
                            <div onClick={() => handleShow(data)} className='flex justify-between w-full py-2 mb-3 border-b-2'>
                                <div className='flex space-x-4'>
                                    <li >{data.state}</li>
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
                        <button className="text-white bg-black answer-btn rounded-xl" onClick={handleClose}>
                            회신
                        </button>
                    </div>
                </div>
            </div>)}

        </div>
    )
}

export default AllLetter