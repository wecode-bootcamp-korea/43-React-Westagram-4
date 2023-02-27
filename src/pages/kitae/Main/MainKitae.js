import React from 'react';
import './MainKitae.scss';
const MainKitae = () => {
  return (
    <>
      <nav>
        <div class="navContents">
          <div class="navLogo">
            <img
              class="logoImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            />
            <div class="verticalLine"></div>
            <img
              class="logoText"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo_text.png"
            />
          </div>

          <input class="navSearch" placeholder="검색" />

          <div class="navLink">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
          </div>
        </div>
      </nav>

      <main>
        <div class="feeds">
          <article>
            <div class="feedUserIdBox">
              <div class="feedUserPicWrap">
                <img src="images/miniprofile.jpeg" alt="" />
              </div>
              <div class="feedUserId">kitaegram</div>
              <div class="feedThreeDotWrap">
                <div class="threeDotMent">
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
            <div class="feedImgWrap">
              <img src="images/feedPic.jpeg" alt="" />
            </div>
            {/* <!-- 피드 아이콘 --> */}
            <div class="feedIconsWrap">
              <div class="feedIconsLeft">
                <div class="iconHeart">
                  <a href="#">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                  </a>
                </div>
                <div class="iconBalloon">
                  <a href="#">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" />
                  </a>
                </div>
                <div class="iconShare">
                  <a href="#none">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" />
                  </a>
                </div>
              </div>
              <div class="feedIconright">
                <div class="iconBookmark">
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
            <div class="feedReplWrap">
              <div class="feedLikeTextWrap">
                <button>
                  좋아요 <span>60</span>개
                </button>
              </div>
              <div class="feedRepls">
                <span>
                  <a href="#" class="userId">
                    kitaegram
                  </a>
                  in 몽골
                  <span>...</span>
                  <button class="allRepl">더보기</button>
                </span>
                <span class="mention">
                  <a href="#">댓글 5개 모두보기</a>
                </span>

                {/* <!-- 댓글시작 --> */}
                <span class="othersRepl">
                  <a href="#" class="userId">
                    USER_ID
                  </a>
                  <a
                    href="#
            "
                    class="mention"
                  >
                    @user.id
                  </a>
                  댓글이다.
                  <button type="button" class="replHoverThreeDotHidden">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    />
                  </button>
                  <button type="button" class="heartBtn">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt=""
                    />
                  </button>
                </span>
                {/* <!-- 추가댓글  --> */}
                <span class="othersRepl">
                  <a href="#" class="userId">
                    USER_ID
                  </a>
                  <a
                    href="#
          "
                    class="mention"
                  >
                    @user.id
                  </a>
                  댓글이다.
                  <button type="button" class="replHoverThreeDotHidden">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    ></img>
                  </button>
                  <button type="button" class="heartBtn">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                      alt=""
                    />
                  </button>
                </span>
                {/* <!-- 추가댓글 끝 --> */}
              </div>
              <span class="feedTime">2시간 전</span>
            </div>
            {/* <!-- 댓글쓰기 --> */}
            <div class="sendReplWrap">
              <div class="formDiv">
                <div class="inputWrap">
                  <input
                    class="replInput"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                </div>
                <div class="submitWrap">
                  <button class="replBtnOpacity05" type="button">
                    게시
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="mainRight">
          <div class="myProfileWrap">
            <div class="myPicWrap">
              <img src="images/miniprofile.jpeg" alt="" />
            </div>
            <div class="myPicText">
              <div>kitaegram</div>
            </div>
          </div>
          <div class="sideBox">
            <div class="sideTitle">
              <div>스토리</div>
              <div>모두 보기</div>
            </div>
            <div class="sideListWrap">
              <div class="sideList">
                <ul>
                  <li>
                    <a href="#">
                      <div class="userProfileWrap">
                        <div class="userPicWrap">
                          <img src="images/miniprofile.jpeg" alt="" />
                        </div>
                        <div class="userProfileText">
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
          <div class="sideBox">
            <div class="sideTitle">
              <div>회원님을 위한 추천</div>
              <div>모두 보기</div>
            </div>
            <div class="sideListWrap">
              <div class="sideList">
                <ul>
                  <li>
                    <a href="#">
                      <div class="userProfileWrap">
                        <div class="userPicWrap">
                          <img src="images/ger.jpeg" alt="" />
                        </div>
                        <div class="userProfileText">
                          <div>random_id</div>
                          <div>instagram 신규 가입</div>
                        </div>
                        <form action="">
                          <div class="followBtn">
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
          <div class="sideFoot">
            <nav>
              <ul>
                <li>
                  <a href="#">Instagram 정보</a>
                </li>
                <li>
                  <a href="#">도움말</a>
                </li>
                <li>
                  <a href="#">홍보 센터</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">채용 정보</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">약관</a>
                </li>
                <li>
                  <a href="#">디렉터리</a>
                </li>
                <li>
                  <a href="#">프로필</a>
                </li>
                <li>
                  <a href="#">해시태그</a>
                </li>
                <li>
                  <a href="#">언어</a>
                </li>
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
