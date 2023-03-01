import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginYoojeong.scss';

const LoginYoojeong = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setisActive] = useState(false);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-yoojeong');
  };

  const saveUserId = event => {
    setId(event.target.value);
  };

  const saveUserPassword = event => {
    setPassword(event.target.value);
  };

  const avtiveButton = () => {
    return id.includes('@') && password.length > 4
      ? setisActive(true)
      : setisActive(false);
  };

  const buttonDisabled = id.includes('@') && password.length > 4 ? false : true;

  return (
    <main className="loginYoojeong">
      <h1 className="westagram">Westagram</h1>
      <input
        className="id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={saveUserId}
        onKeyUp={avtiveButton}
      />
      <input
        className="password"
        type="password"
        placeholder="비밀번호"
        onChange={saveUserPassword}
        onKeyUp={avtiveButton}
      />
      <button
        className={isActive ? 'activeBtn' : 'unActiveBtn'}
        onClick={goToMain}
        disabled={buttonDisabled}
      >
        로그인
      </button>
      <a href="#none" className="forgetText">
        비밀번호를 잊으셨나요?
      </a>
    </main>
  );
};

export default LoginYoojeong;
