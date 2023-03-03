import React, { useState } from 'react';
import INFO_LIST from './Info_kitae';
import CommentKitae from './CommentKitae';
import './MainKitae.scss';

// import Comment from './Comment';

const MainKitae = () => {
  //댓글 입력값 저장
  const [comment, setComment] = useState('');
  const handleComment = event => setComment(event.target.value);

  // 댓글 입력값 저장 되는 곳 지정
  const [commentArray, setCommentArray] = useState([]);

  const handleCommentList = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(prev => [...prev, comment]);
    setComment('');
  };

  console.log(commentArray);

  return (
    <>
      <nav>
        <div className="navContents">
          <div className="navLogo">
            <img
              className="logoImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            />
            <div className="verticalLine"></div>
            <img
              className="logoText"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo_text.png"
            />
          </div>

          <input className="navSearch" placeholder="검색" />

          <div className="navLink">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
          </div>
        </div>
      </nav>

      <main>
        <div className="feeds">
          <article>
            <div className="feedUserIdBox">
              <div className="feedUserPicWrap">
                <img src="images/kitae/miniprofile.jpeg" alt="" />
              </div>
              <div className="feedUserId">kitaegram</div>
              <div className="feedThreeDotWrap">
                <div className="threeDotMent">
                  <a href="#">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- 피드 사진 --> */}
            <div className="feedImgWrap">
              <img src="images/kitae/feedPic.jpeg" alt="" />
            </div>
            {/* <!-- 피드 아이콘 --> */}
            <div className="feedIconsWrap">
              <div className="feedIconsLeft">
                <div className="iconHeart">
                  <a href="#">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                  </a>
                </div>
                <div className="iconBalloon">
                  <a href="#">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                  </a>
                </div>
                <div className="iconShare">
                  <a href="#none">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                  </a>
                </div>
              </div>
              <div className="feedIconright">
                <div className="iconBookmark">
                  <a href="#">
                    {' '}
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- 피드 댓글 --> */}
            <div className="feedReplWrap">
              <div className="feedLikeTextWrap">
                <button>
                  좋아요 <span>60</span>개
                </button>
              </div>
              <div className="feedRepls">
                <span>
                  <a href="#" className="userId">
                    kitaegram
                  </a>
                  in 몽골
                  <span>...</span>
                  <button className="allRepl">더보기</button>
                </span>
                <span className="mention">
                  <a href="#">댓글 5개 모두보기</a>
                </span>

                {/* <!-- 댓글시작 --> */}
                <span className="othersRepl">
                  <a href="#" className="userId">
                    USER_ID
                  </a>
                  <a href="#" className="mention">
                    @user.id
                  </a>
                  댓글이다.
                  <button type="button" className="replHoverThreeDotHidden">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    />
                  </button>
                  <button type="button" className="heartBtn">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt=""
                    />
                  </button>
                </span>
                {/* <!-- 추가댓글  --> */}
                <span className="othersRepl">
                  <a href="#" className="userId">
                    USER_ID
                  </a>
                  <a href="#  " className="mention">
                    @user.id
                  </a>
                  댓글이다.
                  <button type="button" className="replHoverThreeDotHidden">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    ></img>
                  </button>
                  <button type="button" className="heartBtn">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt=""
                    />
                  </button>
                </span>
                {/* <!-- 추가댓글 끝 --> */}
                {commentArray.map(list => {
                  return <CommentKitae list={list} />;
                })}
              </div>
              <span className="feedTime">2시간 전</span>
            </div>
            {/* <!-- 댓글쓰기 --> */}
            <div className="sendReplWrap">
              <div className="formDiv">
                <form onSubmit={handleCommentList}>
                  <div className="inputWrap">
                    <input
                      className="replInput"
                      type="text"
                      placeholder="댓글 달기..."
                      value={comment}
                      onChange={handleComment}
                    />
                  </div>
                  <div className="submitWrap">
                    <button
                      className="replBtnOpacity05"
                      type="button"
                      onClick={handleCommentList}
                    >
                      게시
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </article>
        </div>

        <div className="mainRight">
          <div className="myProfileWrap">
            <div className="myPicWrap">
              <img src="images/kitae/miniprofile.jpeg" alt="" />
            </div>
            <div className="myPicText">
              <div>kitaegram</div>
            </div>
          </div>
          <div className="sideBox">
            <div className="sideTitle">
              <div>스토리</div>
              <div>모두 보기</div>
            </div>
            <div className="sideListWrap">
              <div className="sideList">
                <ul>
                  <li>
                    <a href="#">
                      <div className="userProfileWrap">
                        <div className="userPicWrap">
                          <img src="images/kitae/miniprofile.jpeg" alt="" />
                        </div>
                        <div className="userProfileText">
                          <div>kitaegram</div>
                          <div>4시간 전</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sideBox">
            <div className="sideTitle">
              <div>회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>
            <div className="sideListWrap">
              <div className="sideList">
                <ul>
                  <li>
                    <a href="#">
                      <div className="userProfileWrap">
                        <div className="userPicWrap">
                          <img src="images/kitae/ger.jpeg" alt="" />
                        </div>
                        <div className="userProfileText">
                          <div>random_id</div>
                          <div>instagram 신규 가입</div>
                        </div>
                        <form action="">
                          <div className="followBtn">
                            <button type="submit">팔로우</button>
                          </div>
                        </form>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sideFoot">
            <nav>
              <ul>
                {INFO_LIST.map(info => (
                  <li key={info.id}>
                    <a href={info.text}>{info.text}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <span>© 2023 INSTAGRAM</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainKitae;
