import React, { useEffect, useState } from 'react';
import { ASIDE_BOTTOM } from './AsideBottom';
import LeftSectionArticle from './LeftSectionArticle';
import './MainYoojeong.scss';

const MainYoojeong = () => {
  const [feedList, setFeedList] = useState();

  useEffect(() => {
    fetch('/data/yoojeong/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeedList(data));
  }, []);

  return (
    <div className="mainYoojeong">
      <nav className="upperNav">
        <div className="westaWrap">
          <img
            id="instagramLogo"
            src="/images/yoojeong/instagram.png"
            alt="인스타그램 로고"
          />
          <div className="westagram">Westagram</div>
        </div>
        <input className="search" type="text" placeholder="검색" />
        <div>
          <button className="upperIconsButton">
            <img
              className="upperIcons"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="탐색"
            />
          </button>
          <button className="upperIconsButton">
            <img
              className="upperIcons"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="하트"
            />
          </button>
          <button className="upperIconsButton" id="dropButton">
            <img
              className="upperIcons"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="프로필"
            />
          </button>
        </div>
        <div id="dropBox">
          <a href="#none">
            <img src="/images/yoojeong/save-instagram.png" alt="프로필" />
            프로필
          </a>
          <a href="#none">
            <img src="/images/yoojeong/save-instagram.png" alt="저장" />
            저장됨
          </a>
          <a id="setting" href="#none">
            <img src="/images/yoojeong/save-instagram.png" alt="설정" />
            설정
          </a>
          <a id="log_out" href="#none">
            로그아웃
          </a>
        </div>
      </nav>
      <div className="mainWrap">
        <div className="leftSection">
          {feedList &&
            feedList.map(feed => {
              return (
                <LeftSectionArticle
                  key={feed.id}
                  profileImg={feed.profileImg}
                  userId={feed.userId}
                  articleImg={feed.articleImg}
                  postText={feed.postText}
                  postTime={feed.postTime}
                />
              );
            })}
        </div>
        <div className="rightSection">
          <div className="userProfileWrap">
            <img
              className="userProfileImg"
              src="/images/yoojeong/account.png"
              alt="프로필"
            />
            <div className="userIdWrap">
              <div className="userId">wecode_bootcamp</div>
              <div className="userCompany">WeCode | 위코드</div>
            </div>
          </div>
          <div className="storyTotalWrap">
            <div className="storyWrap">
              <span className="rightSectionTitle">스토리</span>
              <button className="seeAll">모두 보기</button>
            </div>
            <ul>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/yoojeong/karl-magnuson-85J99sGggnw-unsplash.jpg"
                  alt="sunset"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    _yum_s
                  </a>
                  <div className="storyTime">16분 전</div>
                </div>
              </li>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/yoojeong/samsung-uk-no101tswX7I-unsplash.jpg"
                  alt="대화하는 두 여성"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    drink_eat_drink
                  </a>
                  <div className="storyTime">3시간 전</div>
                </div>
              </li>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/yoojeong/karl-magnuson-85J99sGggnw-unsplash.jpg"
                  alt="sunset"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    hyukyc
                  </a>
                  <div className="storyTime">20시간 전</div>
                </div>
              </li>
              <li className="storyProfileWrap">
                <img
                  className="storyProfileImg"
                  src="/images/yoojeong/samsung-uk-no101tswX7I-unsplash.jpg"
                  alt="대화하는 두 여성"
                />
                <div className="storyIdWrap">
                  <a href="#none" className="storyId">
                    jminkeek
                  </a>
                  <div className="storyTime">22시간 전</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="recommendTotalWrap">
            <div className="recommendWrap">
              <span className="rightSectionTitle">회원님을 위한 추천</span>
              <button className="seeAll">모두 보기</button>
            </div>
            <ul>
              <li className="recommendProfileWrap">
                <div className="recommendImgWrap">
                  <img
                    className="recommendProfileImg"
                    src="/images/yoojeong/samsung-uk-no101tswX7I-unsplash.jpg"
                    alt="대화하는 두 여성"
                  />
                  <div className="recommendIdWrap">
                    <a href="#none" className="recommendId">
                      joaaaaahye
                    </a>
                    <div className="recommendFollower">
                      _legend_a님 외 2명이...
                    </div>
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </li>
              <li className="recommendProfileWrap">
                <div className="recommendImgWrap">
                  <img
                    className="recommendProfileImg"
                    src="/images/yoojeong/karl-magnuson-85J99sGggnw-unsplash.jpg"
                    alt="sunset"
                  />
                  <div className="recommendIdWrap">
                    <a href="#none">rampart81</a>
                    <div className="recommendFollower">
                      ringo.in.seoul님 외 12...
                    </div>
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </li>
              <li className="recommendProfileWrap">
                <div className="recommendImgWrap">
                  <img
                    className="recommendProfileImg"
                    src="/images/yoojeong/samsung-uk-no101tswX7I-unsplash.jpg"
                    alt="대화하는 두 여성"
                  />
                  <div className="recommendIdWrap">
                    <a href="#none">shawnjjoo</a>
                    <div className="recommendFollower">
                      jimmylee1220님 외 1...
                    </div>
                  </div>
                </div>
                <button className="follow">팔로우</button>
              </li>
            </ul>
          </div>
          <p className="etcWrap">
            {ASIDE_BOTTOM.map(data => {
              return (
                <a key={data.id} className="etc" href="#">
                  {data.title}
                </a>
              );
            })}
          </p>
          <p className="etc">© 2023 WESTAGRAM</p>
        </div>
      </div>
    </div>
  );
};

export default MainYoojeong;
