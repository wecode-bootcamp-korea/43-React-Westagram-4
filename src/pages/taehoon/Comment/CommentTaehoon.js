import React from 'react';

const CommentTaehoon = props => {
  const { comment, setComment, commentArray, setCommentArray } = props;

  const newComment = e => {
    setComment(e.target.value);
  };

  const addNewComment = commentArray.map(commentArray => (
    <div key={commentArray.toString()}>{commentArray}</div>
  ));
  const onKeyUp = event => {
    if (event.key === 'Enter') {
      setCommentArray([...commentArray, comment]);
      setComment('');
    }
  };
  const onClick = () => {
    setCommentArray([...commentArray, comment]);
    setComment('');
  };

  return (
    <>
      <div
        className="commentList"
        key={commentArray.toString()}
        value={comment}
      >
        {addNewComment}
      </div>

      <div className="addComment">
        <input
          type="text"
          id="comment"
          placeholder="댓글 달기..."
          value={comment}
          onKeyUp={onKeyUp}
          onChange={newComment}
        />
        <button onClick={onClick} id="uploadComment">
          게시
        </button>
      </div>
    </>
  );
};

export default CommentTaehoon;
