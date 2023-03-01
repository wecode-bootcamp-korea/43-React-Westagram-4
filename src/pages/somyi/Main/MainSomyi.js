import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Feeds from './components/Feeds';
import Footer from './components/Footer';
import './MainSomyi.scss';

const MainSomyi = () => {
  const navigate = useNavigate();

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('./data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setDataList(data);
      });
  }, []);

  return (
    <div className="mainSomyi">
      <nav className="navContainer">
        <div className="logoWrap">
          <img
            src="/images/somyi/instagram.png"
            alt="logo"
            onClick={() => {
              navigate('/login-somyi');
            }}
          />
          <h1>Westagram</h1>
        </div>
        <div className="searchWrap">
          <i className="fa-sharp fa-solid fa-magnifying-glass" />
          <input type="text" placeholder="검색" />
        </div>
        <div className="menuWrap">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="탐색"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="마이페이지"
          />
        </div>
      </nav>
      <main>
        <div className="contentsContainer">
          <div className="feedsWrap">
            {dataList.map(info => {
              return <Feeds key={info.id} info={info} />;
            })}
          </div>
          <div className="subContentsWrap">
            <header>
              <div className="ProfileImg" />
              <div>
                <h2>wecode_bootcamp</h2>
                <p>WeCode | 위코드</p>
              </div>
            </header>
            <section className="storyWrap">
              <div className="storyHeader">
                <h3 className="gray">스토리</h3>
                <span>모두보기</span>
              </div>
              <article>
                <div className="grdientBorder">
                  <div />
                </div>
                <p>somyi_s2_91016</p>
              </article>
              <article>
                <div className="grdientBorder">
                  <div />
                </div>
                <p>somyi_s2_91016</p>
              </article>
              <article>
                <div className="grdientBorder">
                  <div />
                </div>
                <p>somyi_s2_91016</p>
              </article>
            </section>
            <section className="recommondWrap">
              <div className="recommondHeader">
                <h3 className="gray">회원님을 위한 추천</h3>
                <span>모두보기</span>
              </div>
              <article className="newRocommond">
                <div className="userPofileImg" />
                <div>
                  <b>guess_who</b>
                  <p>mettugi_world님 외 3명이 팔로우하고 있습니다.</p>
                </div>
                <button type="button">팔로우</button>
              </article>
              <article className="newRocommond">
                <div className="userPofileImg" />
                <div>
                  <b>guess_who</b>
                  <p>mettugi_world님 외 3명이 팔로우하고 있습니다.</p>
                </div>
                <button type="button">팔로우</button>
              </article>
              <article className="newRocommond">
                <div className="userPofileImg" />
                <div>
                  <b>guess_who</b>
                  <p>mettugi_world님 외 3명이 팔로우하고 있습니다.</p>
                </div>
                <button type="button">팔로우</button>
              </article>
            </section>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainSomyi;
