import React, { useState } from 'react';
import Comments from './Comments';
import './Feeds.scss';

const Feeds = props => {
  const { info } = props;
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
    <section className="feeds">
      <header>
        <div />
        <p>{info.userId}</p>
      </header>
      <article>
        <div className="postImg">
          <img src={`${info.userImg}`} alt="사용자 게시 이미지" />
        </div>
        <div className="feedBottom">
          <i className="fa-sharp fa-regular fa-heart" />
          <i className="fa-sharp fa-regular fa-comment" />
          <i className="fa-sharp fa-regular fa-share-from-square" />
          <i className="fa-sharp fa-regular fa-bookmark" />
          <div>
            <div />
            <span>{info.userId}</span>님 &nbsp;
            <span>외 4명</span>이 좋아합니다
          </div>
          <div>
            <span>{info.userId}</span> &nbsp;{info.feedText}
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
  );
};

export default Feeds;
