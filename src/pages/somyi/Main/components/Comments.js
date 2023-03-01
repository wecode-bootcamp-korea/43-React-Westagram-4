import React from 'react';
import './Comments.scss';

const Comments = props => {
  const { value } = props;

  return (
    <li className="comments">
      somyi_s2 {value}
      <div className="btnContainer">
        <i className="fa-regular fa-heart" />
        <i className="fa-solid fa-xmark" />
      </div>
    </li>
  );
};

export default Comments;
