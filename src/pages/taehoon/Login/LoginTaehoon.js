import React, { useState } from 'react';
import './LoginTaehoon.scss';
import { useNavigate } from 'react-router-dom';

const LoginTaehoon = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [changeButtonColor, setChangeButtonColor] =
    useState('changeButtonColor');

  const onKeyUp = event => {
    id.includes('@') && pw.length >= 5
      ? setChangeButtonColor('blue')
      : setChangeButtonColor('changeButtonColor');

    if (event.key === 'Enter') {
      id.includes('@') && pw.length >= 5
        ? goToMain()
        : alert('아이디를 확인해주세요.');
    }
  };

  const onClick = () => {
    id.includes('@') && pw.length >= 5
      ? goToMain()
      : alert('아이디를 확인해주세요.');
  };

  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };
  const goToMain = () => {
    navigate('/main-taehoon');
  };

  return (
    <div onKeyUp={onKeyUp} className="login">
      <div className="loginPage">
        <div className="westagramBox">westagram</div>
        <div className="idBox">
          <input
            type="text"
            id="id"
            value={id}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
        </div>

        <div className="passwordBox">
          <input
            type="password"
            id="password"
            value={pw}
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
        </div>

        {/* <button className={changeButtonColor} value="value" onClick={onClick}>
          로그인
        </button> */}

        <button
          disabled={id.includes('@') && pw.length > 4 ? false : true}
          className={changeButtonColor}
          value="value"
          onClick={onClick}
        >
          로그인
        </button>

        <div className="forgetPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
};

export default LoginTaehoon;
