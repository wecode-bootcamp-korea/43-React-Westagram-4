import React from 'react';
import './MainTaehoon.scss';
import instargramIcon from '../../../assets/taehoon/instagram.png';
import mari from '../../../assets/taehoon/IMG_1211.JPG';
import feedImg from '../../../assets/taehoon/IMG_1278.jpeg';
const MainTaehoon = () => {
  return (
    <div className="main">
      <div className="bar">
        <nav className="navigation">
          <div className="navLeft">
            <img className="instargramIcon" src={instargramIcon} alt="none" />
            <div className="navTitle">Westagram</div>
          </div>
          <input type="text" placeholder="검색" className="searchBox" />
          <div>
            <img
              className="navIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt=""
            />
            <img
              className="navIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt=""
            />
            <img
              className="navIcon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
            />
          </div>
        </nav>
        <main className="mainPage">
          <div className="mainfeed">
            <section className="mainLeft">
              <div className="feed">
                <artcle>
                  <div className="writer">
                    <img src={mari} alt="" className="mari" />
                    <h5 className="name">taehoon_hong</h5>
                  </div>
                  <img className="myPhoto" src={feedImg} alt="" />
                  <div>
                    <section>
                      <i id="awsomeIcon" className="fa-regular fa-heart" />
                      <i id="awsomeIcon" className="fa-regular fa-message" />
                      <i
                        id="awsomeIcon"
                        className="fa-solid fa-arrow-up-from-bracket"
                      />
                    </section>
                    <section>
                      <span className="whoIsLike">여러명이 좋아합니다.</span>

                      <div className="commentList" />

                      <div className="addComment">
                        <input
                          type="text"
                          id="comment"
                          placeholder="댓글 달기..."
                        />
                        <button id="uploadComment">게시</button>
                      </div>
                    </section>
                  </div>
                </artcle>
              </div>
            </section>
            <section className="mainRight">
              <div className="writer">
                <img src={mari} alt="" className="idOwner" />
                <h6 className="idOwnerName">taehoon_hong</h6>
              </div>
              <div className="story">
                <h6 className="storyTitle">스토리</h6>
                <div className="storyList">
                  <img src={mari} alt="" className="storyImage" />
                  <h6 className="storyOwner">Hong</h6>
                </div>
                <div className="storyList">
                  <img className="storyImage" src={mari} alt="" />
                  <h6 className="storyOwner">HongTaeHoon</h6>
                </div>
                <div className="storyList">
                  <img className="storyImage" src={mari} alt="" />
                  <h6 className="storyOwner">TaeHoon</h6>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainTaehoon;
