import React, { useState } from "react";

const WhatIsWero = () => {
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="flex">
            <div>
                <div
                    onClick={handleOpen}
                    className="text-xl border-b-2 border-black"
                >
                    WeRo가 뭔가요?
                </div>
                <div
                    onClick={handleOpen}
                    className="text-xl border-b-2 border-black"
                >
                    반드시 눌러보세요!!!
                </div>
            </div>

            {show && (
                <div className="modal">
                    <div className="overlay">
                        <div className="w-20 modal-content">
                            <div className="flex justify-between text-3xl font-bold border-b-4 border-black">
                                <p>WeRo에 오신 것을 환영해요!</p>
                                <button
                                    className="w-14 h-10 bg-slate-300 rounded-xl"
                                    onClick={handleClose}
                                >
                                    X
                                </button>
                            </div>
                            <div className="mt-4">
                                <p className="font-semibold">
                                    WeRo가 무엇인가요?
                                </p>
                                <p className="mt-3">
                                    WeRo는 오늘 하루를 돌아보며
                                </p>
                                <p>
                                    나에게 혹은 누군가에게 편지를 작성하는
                                    서비스에요.
                                </p>
                                <br />
                                <p>편지를 작성하면 WeRo의 알고리즘을 통해</p>
                                <p>
                                    당신의 위로가 필요한 누군가에게 편지를
                                    전달해요.
                                </p>
                                <br />
                                <p>
                                    물론 원한다면 편지를 전달하지 않을 수도
                                    있어요.
                                </p>
                                <br />
                                <hr className="mb-4 border-black border-1" />
                                <p className="font-semibold">
                                    저는 편지를 언제 받나요?
                                </p>
                                <p className="mt-3">
                                    다른 이용자가 편지 작성을 완료하면
                                    마찬가지로
                                </p>
                                <p>
                                    알고리즘을 통해 당신에게도 편지가
                                    도착할거에요!
                                </p>
                                <br />
                                <p>WeRo의 알고리즘에 의하면 여러 통의</p>
                                <p>
                                    편지를 작성할수록 편지를 받을 확률이
                                    높아져요!
                                </p>
                                <br />
                                <br />
                                <p className="font-semibold">
                                    이제 로그인하여 WeRo를 이용해보세요!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatIsWero;
