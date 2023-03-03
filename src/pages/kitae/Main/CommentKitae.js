import React from 'react';

const CommentKitae = props => {
  const { list } = props;

  return (
    <div>
      <span className="othersRepl">
        <a href="#" className="userId">
          USER_ID
        </a>
        <a href="#" className="mention">
          @user.id {list}
        </a>
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
    </div>
  );
};

export default CommentKitae;
