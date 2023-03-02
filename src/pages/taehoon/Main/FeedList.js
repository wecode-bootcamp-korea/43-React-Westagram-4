import React, { useState } from 'react';
import CommentTaehoon from '../Comment/CommentTaehoon';

const FeedList = props => {
  const { id, img, name, feedImage } = props;
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  return (
    <div className="feed">
      <article key={id}>
        <div className="writer">
          <img src={img} alt="" className="mari" />
          <h5 className="name">{name}</h5>
        </div>
        <img className="myPhoto" src={feedImage} alt="" />
        <div>
          <section className="iconList">
            <p className="icon">
              <i id="awsomeIcon" className="fa-regular fa-heart" />
              <i id="awsomeIcon" className="fa-regular fa-message" />
              <i
                id="awsomeIcon"
                className="fa-solid fa-arrow-up-from-bracket"
              />
            </p>

            <i className="fa-regular fa-bookmark" />
          </section>
          <section>
            <span className="whoIsLike">여러명이 좋아합니다.</span>

            <CommentTaehoon
              key={commentArray.toString()}
              comment={comment}
              setComment={setComment}
              commentArray={commentArray}
              setCommentArray={setCommentArray}
            />
          </section>
        </div>
      </article>
    </div>
  );
};

export default FeedList;
