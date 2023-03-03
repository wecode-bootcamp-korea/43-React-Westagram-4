import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginKitae.scss';

const LoginKitae = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isActive, setIsActive] = useState(true);

  const goToMain = () => {
    // navigate('/main-kitae');
    fetch('http://10.58.52.101:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const isPassedLogin = isActive => {
    return id.includes('@') && pw.length >= 5
      ? setIsActive(!isActive)
      : setIsActive(isActive);
  };
  console.log(isActive);

  function saveUserId(event) {
    setId(event.target.value);
    console.log('id', id);
  }

  function saveUserPw(event) {
    setPw(event.target.value);
    console.log('pw', pw);
  }

  // const logIn = event => {
  //   fetch('http://10.58.113.116:8000/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: id,
  //       password: pw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // };

  return (
    <article>
      <div className="loginWrapper">
        <div className="loginLogo">wetagram</div>
        <form className="loginForm">
          <input
            id="loginId"
            className="loginText"
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            onKeyUp={isPassedLogin}
          />
          <input
            id="loginPw"
            className="loginText"
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
            onKeyUp={isPassedLogin}
          />

          <button
            disabled={isActive}
            id="activeBtn"
            className={isActive ? 'unactiveBtn' : 'activeBtn'}
            type="button"
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <a className="loginBottom" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </article>
  );
};

export default LoginKitae;
