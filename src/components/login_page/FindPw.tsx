import React, { useState } from "react";
import { Link } from "react-router-dom";

const FindPw = () => {
  const [values, setValues] = useState({
    id: "",
    email: "",
    password: "",
  });

  const [effectiveness, setEffectiveness] = useState({
    password: false,
  });
  const isPassword = (password: string): boolean => {
    const passwordRegex = /^\w{8,12}$/i;
    return passwordRegex.test(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    let isGood = false;
    if (e.target.name === "password") {
      isGood = isPassword(e.target.value);
    }
    setEffectiveness({
      ...effectiveness,
      [e.target.name]: isGood,
    });
  };

  const findPw = "/api/user/data/findPw";
  const handleSubmit = () => {
    if (effectiveness.password) {
      fetch(findPw, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: values.email,
          userId: values.id,
          userPw: values.password,
        }),
      })
        .then((resp) => resp.json())
        .then((resp) => alert(resp.message));
    }
  };

  const commonStyle = "h-12 pl-2 my-3 font-mono text-lg w-96 border-b-2";

  return (
    <div className="flex flex-col items-center">
      <div className="h-full bg-white">
        <div className="mx-60 md:mx-96"></div>
        <div className="ml-10 md:ml-44">
          <div className="mt-24 text-slate-700">
            <h1 className="text-4xl font-bold">Welcome to We로!</h1>
            <p className="mt-4 font-semibold">
              회원이 되어 당신의 이야기를 모두에게 들려주세요
            </p>
          </div>
          <div className="mt-10">
            <input
              type="text"
              name="id"
              value={values.id}
              onChange={handleChange}
              className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
              placeholder="ID"
            />
            <br />
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="h-12 gap-2 pl-2 my-3 font-mono text-lg border-b-2 border-gray-400 border-solid w-96"
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className={
                effectiveness.password
                  ? `${commonStyle} border-gray-400 border-solid`
                  : `${commonStyle} border-red-700 border-solid`
              }
              placeholder="변경할 비밀번호를 입력하세요"
            />
            {effectiveness.password === false ? (
              <p className="font-sans text-sm text-yellow-600">
                비밀번호는 영어와 숫자만 가능하고 8~12로 해주세요!
              </p>
            ) : null}
          </div>
          <div className="font-bold">
            <p className="mt-10">가입하신 ID와 이메일을 적어주세요.</p>
            <p className="mt-3">그리고 변경하실 비밀번호를 적어주세요.</p>
          </div>
          <div className="flex mt-20 ml-56 space-x-3 text-base text-slate-600">
            <Link to="/findId" className="border-b-2 border-slate-300">
              아이디 찾기
            </Link>
            <Link to="/" className="border-b-2 border-slate-300">
              로그인
            </Link>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-black rounded-md mt-28 h-14 text-slate-200 w-96 border-slate-300"
          >
            Done
          </button>
          <div className="flex">
            <p className="mt-3 text-sm border-b-2 ml-80 border-slate-300">
              고객센터
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindPw;
