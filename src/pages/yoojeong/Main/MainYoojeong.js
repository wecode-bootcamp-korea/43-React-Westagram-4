import React, { useState } from 'react';
import CommentTotalWrap from './CommentTotalWrap';
import './MainYoojeong.scss';

const MainYoojeong = () => {
  // input에 작성된 텍스트가 화면상 input창에 보일 수 있도록
  const [inputValue, setInputValue] = useState('');

  // 작성된 댓글들을 배열에 담아 관리 (array.map 사용을 위해)
  const [comments, setComments] = useState([]);

  // enter키 누르면 댓글이 comment 배열에 추가
  const addCommentByEnter = e => {
    if (e.code === 'Enter' && inputValue.length > 0) {
      setComments(commentList => [...commentList, inputValue]);

      setInputValue('');
    }
  };

  // 게시 버튼 누르면 댓글이 comment 배열에 추가
  const addCommentByClick = e => {
    if (inputValue.length > 0) {
      setComments(commentList => [...commentList, inputValue]);

      setInputValue('');
    }
  };

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
          <div className="leftSectionArticle">
            <nav className="profileNav">
              <span className="profileNavInner1">
                <img
                  className="profileImg"
                  src="/images/yoojeong/user.png"
                  alt="프로필"
                />
                <a href="#none" className="profileName">
                  canon_mj
                </a>
              </span>
              <span className="profileNavInner2">...</span>
            </nav>
            <img
              className="uploadImg"
              src="/images/yoojeong/chad-montano-MqT0asuoIcU-unsplash.jpg"
              alt="피자"
            />
            <div className="profileIconWrap">
              <button className="profileHeart">
                <img
                  className="profileHeart"
                  src="/images/yoojeong/heart.png"
                  alt="하트"
                />
              </button>
              <button className="profileComment">
                <img
                  className="profileComment"
                  src="/images/yoojeong/speech-bubble.png"
                  alt="댓글"
                />
              </button>
              <button className="profileUproad">
                <img
                  className="profileUproad"
                  src="/images/yoojeong/upload.png"
                  alt="업로드"
                />
              </button>
              <button className="profileSave">
                <img
                  className="profileSave"
                  src="/images/yoojeong/save-instagram.png"
                  alt="저장"
                />
              </button>
            </div>
            <div className="likeWrap">
              <a href="#none" className="likeId">
                aineworld
              </a>
              님<span className="likeCount">외 10명</span>이 좋아합니다.
            </div>
            <ul className="newComment">
              {comments.map((comment, index) => {
                return <CommentTotalWrap key={index} comment={comment} />;
              })}
            </ul>
            <div className="commentTime">42분 전</div>
            <div className="addcommentWrap">
              <input
                className="addComment"
                type="text"
                placeholder="댓글 달기..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={addCommentByEnter}
              />
              <button className="addCommentButton" onClick={addCommentByClick}>
                게시
              </button>
            </div>
          </div>
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
            <a className="etc" href="#">
              instagram 정보
            </a>
            ・
            <a className="etc" href="#">
              지원
            </a>
            ・
            <a className="etc" href="#">
              홍보 센터
            </a>
            ・
            <a className="etc" href="#">
              API
            </a>
            <a className="etc" href="#">
              채용
            </a>
            ・
            <a className="etc" href="#">
              정보
            </a>
            ・
            <a className="etc" href="#">
              개인정보처리방침
            </a>
            ・
            <a className="etc" href="#">
              약관
            </a>
            ・
            <a className="etc" href="#">
              디렉터리
            </a>
            ・
            <a className="etc" href="#">
              프로필
            </a>
            ・
            <a className="etc" href="#">
              해시태그
            </a>
            ・
            <a className="etc" href="#">
              언어
            </a>
          </p>
          <p className="etc">© 2023 WESTAGRAM</p>
        </div>
      </div>
    </div>
  );
};

export default MainYoojeong;
