import React,{Component} from 'react';

export default class CommentBox extends Component {
  render() {
    return (
      //optional: give top level component a classname so it's easier to debug in browser
      <div className="comment-box">
        <textarea />
        <button>Submit comment</button>
      </div>
    )
  }
}
