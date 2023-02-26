import React, { useState } from 'react';
import './MainTaehoon.scss';
import instargramIcon from '../../../assets/taehoon/instagram.png';
import mari from '../../../assets/taehoon/IMG_1211.JPG';
import feedImg from '../../../assets/taehoon/IMG_1278.jpeg';

const MainTaehoon = () => {
  /* input의 value를 설정하고 그 값을 배열로 바꾼다.
배열.map을 써서 새로운 <div>로 만들고 commentList에 넣는다.*/
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const newComment = e => {
    setComment(e.target.value);
  };

  const addNewComment = commentArray.map(commentArray => (
    <div key={commentArray.toString()}>{commentArray}</div>
  ));
  const onKeyUp = event => {
    if (event.key === 'Enter') {
      setCommentArray([...commentArray, comment]);
      setComment('');
    }
  };
  const onClick = () => {
    setCommentArray([...commentArray, comment]);
    setComment('');
  };

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
                <article>
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

                      <div
                        className="commentList"
                        key={commentArray.toString()}
                        value={comment}
                      >
                        {addNewComment}
                      </div>

                      <div className="addComment">
                        <input
                          type="text"
                          id="comment"
                          placeholder="댓글 달기..."
                          value={comment}
                          onKeyUp={onKeyUp}
                          onChange={newComment}
                        />
                        <button onClick={onClick} id="uploadComment">
                          게시
                        </button>
                      </div>
                    </section>
                  </div>
                </article>
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
