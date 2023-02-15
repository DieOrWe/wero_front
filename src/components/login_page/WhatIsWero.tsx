import React, { useState } from "react";
import SimpleSlider from "./SimpleSlider";

const WhatIsWero = () => {
    const [show, setShow] = useState(true);
    const handleOpen = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className="flex text-[#4F4F4F]">
            <div onClick={handleOpen} className="text-sm border-b border-black">
                {" "}
                WeRo가 뭔가요?
            </div>

            {show && (
                <div className="modal">
                    <div className="overlay">
                        <div className="w-20 h-3/4 modal-content">
                            <div className="flex justify-between text-[26px] font-bold border-b-4 border-black">
                                <p>WeRo에 오신 것을 환영해요!</p>
                                <button
                                    className="h-9 w-10 bg-slate-300 rounded-xl mb-2 text-[22px]"
                                    onClick={handleClose}
                                >
                                    X
                                </button>
                            </div>
                            <div className="flex justify-center mt-4">
                                <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WhatIsWero;
