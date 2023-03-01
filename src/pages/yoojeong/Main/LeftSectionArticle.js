import React, { useState } from 'react';
import CommentTotalWrap from './CommentTotalWrap';

const LeftSectionArticle = props => {
  const { profileImg, userId, articleImg, postText, postTime } = props;

  // input에 작성된 값을 받겠다(배열에 담기 위해)
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
    <div className="leftSectionArticle">
      <nav className="profileNav">
        <span className="profileNavInner1">
          <img className="profileImg" src={profileImg} alt="프로필" />
          <a href="#none" className="profileName">
            {userId}
          </a>
        </span>
        <span className="profileNavInner2">...</span>
      </nav>
      <img className="uploadImg" src={articleImg} alt="피자" />
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
      <div className="commentText">{postText}</div>

      <ul className="newComment">
        {comments.map((comment, index) => {
          return <CommentTotalWrap key={index} comment={comment} />;
        })}
      </ul>
      <div className="commentTime">{postTime}</div>
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
  );
};

export default LeftSectionArticle;
