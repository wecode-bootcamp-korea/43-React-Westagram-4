import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../somyi/Login/LoginSomyi.scss';
import './LoginSomyi.scss';

const LoginSomyi = () => {
  const [saveIdValue, setSaveIdValue] = useState('');
  const [savePasswordValue, setSavePasswordValuee] = useState('');
  const isValidation =
    saveIdValue.indexOf('@') > -1 && savePasswordValue.length >= 5;

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-somyi');
  };

  const saveUserId = e => {
    setSaveIdValue(e.target.value);
  };

  const saveUserPassword = e => {
    setSavePasswordValuee(e.target.value);
  };

  return (
    <div className="loginSomyi">
      <h1>Westagram</h1>
      <form>
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          value={saveIdValue}
          onChange={saveUserId}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={savePasswordValue}
          onChange={saveUserPassword}
        />
        <button
          type="button"
          className={isValidation ? 'albled' : 'disabled'}
          disabled={isValidation ? false : true}
          onClick={goToMain}
        >
          로그인
        </button>
      </form>
      <div className="pwSearch">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default LoginSomyi;
