import React from 'react';
import './Comment';

//댓글 출력 및 반복

const Comment = props => {
  const { comment, setComment, commentArray, setCommentArray } = props;
  // let commentArray = props.commentArray;
  // return (
  //   <li className="comment">
  //     {commentArray.map((value, id) => {
  //       <li key={id} className="commentText">
  //         <div className="commentMargin">
  //           <span className="commentNameBold">lee</span>
  //           {value}
  //         </div>
  //         <div className="commentStart">
  //           <i className="far fa-trash-alt" />
  //           <i className="fas fa-heart colorHeart" />
  //         </div>
  //       </li>;
  //     })}
  //   </li>
  // );

  const handleComment = event => setComment(event.target.value);

  const handleCommentList = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(prev => [...prev, comment]);
    setComment('');
  };

  // const onKeyUp = event => {
  //   if (event.key === 'Enter') {
  //     setCommentArray(prev => [...prev, comment]);
  //     setComment('');
  //   }
  //   console.log(event);
  // };

  const onSubmit = event => {
    console.log(1);
    // setCommentArray(prev => [...prev, comment]);
    // setComment('');

    event.preventDefault();
  };
  console.log(commentArray);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="inputWrap">
          <input
            className="replInput"
            type="text"
            placeholder="댓글 달기..."
            value={comment}
            onChange={handleComment}
            // onKeyUp={onKeyUp}
          />
        </div>
        <div className="submitWrap">
          <button
            className="replBtnOpacity05"
            type="submit"
            onClick={handleCommentList}
          >
            게시
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
