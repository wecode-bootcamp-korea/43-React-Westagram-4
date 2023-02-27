import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comments from './components/Comments';
import './MainSomyi.scss';

const MainSomyi = () => {
  const navigate = useNavigate();

  const [comment, setComment] = useState('');
  const commentValue = e => {
    setComment(e.target.value);
  };

  const [commentArray, setCommentArray] = useState([]);

  const addComment = e => {
    e.preventDefault();

    if (comment === '') {
      return;
    }

    setCommentArray(commentValueList => [...commentValueList, comment]);
    setComment('');
  };

  return (
    <div className="main">
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
          <section className="feeds">
            <header>
              <div />
              <p>wecode_bootcamp</p>
            </header>
            <article>
              <div className="postImg">
                <img src="images/somyi/userimg.jpeg" alt="사용자 게시 이미지" />
              </div>
              <div className="feedBottom">
                <i className="fa-sharp fa-regular fa-heart" />
                <i className="fa-sharp fa-regular fa-comment" />
                <i className="fa-sharp fa-regular fa-share-from-square" />
                <i className="fa-sharp fa-regular fa-bookmark" />
                <div>
                  <div />
                  <span>seungyoun_iain</span>님 &nbsp;
                  <span>외 4명</span>이 좋아합니다
                </div>
                <div>
                  <span>wecode_bootcamp</span> &nbsp;어쩌구
                  저쩌구저쩌주저ㅓ어어ㅓㄴ
                </div>
                <ul>
                  {commentArray.map((value, index) => (
                    <Comments value={value} key={index} />
                  ))}
                </ul>
              </div>
              <form className="commentWrap" onSubmit={addComment}>
                <input
                  type="text"
                  placeholder="댓글달기"
                  value={comment}
                  onChange={commentValue}
                />
                <button type="button" onClick={addComment}>
                  게시
                </button>
              </form>
            </article>
          </section>
          <div className="main_right">
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
            <footer className="gray">
              <ul>
                <li>Instagram 정보</li>
                <li>지원</li>
                <li>지원</li>
                <li>홍보센터</li>
                <li>API</li>
                <li>채용정보</li>
                <li>개인정보처리방침</li>
                <li>약관</li>
                <li>디렉터리</li>
                <li>프로필</li>
                <li>해시태그</li>
                <li>언어</li>
              </ul>
              <small>&copy; 2019 INSTAGRAM</small>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainSomyi;
