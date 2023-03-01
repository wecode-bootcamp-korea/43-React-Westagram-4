import React from 'react';
import './MainYoojeong.scss';

const CommentTotalWrap = props => {
  return (
    <li className="commentTotalWrap">
      <a href="#none" className="commentId">
        user id
      </a>
      <span className="comment">{props.comment}</span>
      <button className="commentLikeButton">
        <img
          className="commentLike"
          src="/images/yoojeong/heart.png"
          alt="하트"
        />
      </button>
      <button className="deleteComment">x</button>
    </li>
  );
};

export default CommentTotalWrap;
