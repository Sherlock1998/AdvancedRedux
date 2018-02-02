import React from 'react';
import {connect} from 'react-redux';


const CommentList = (props) => {
  const list = props.comments.map(comments=>
     <li key={comments}>{comments}</li>
  );
  // const list = props.comments.map((comments,index)=>{
  //   return {
  //     <li key={index}>{comments}</li>
  //   }
  // })
  return (
    <ul className="comment-list">{list}</ul>
  )
  console.log(props)
}


function mapStateToProps(state) {
  return {comments:state.comments};
}

export default connect(mapStateToProps,null)(CommentList);
