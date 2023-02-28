import React from 'react';
import './MainKitae.scss';

//댓글 출력 및 반복

const Comment = props => {
  let commentArray = props.commentArray;
  return (
    <li className="comment">
      {commentArray.map((value, id) => {
        <li key={id} className="commentText">
          <div className="commentMargin">
            <span className="commentNameBold">lee</span>
            {value}
          </div>
          <div className="commentStart">
            <i className="far fa-trash-alt" />
            <i className="fas fa-heart colorHeart" />
          </div>
        </li>;
      })}
    </li>
  );
};

export default Comment;
