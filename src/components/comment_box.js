import React,{Component} from 'react';


export default class CommentBox extends Component {
  constructor() {
    super()

    this.state = {
      comment: '',
    }
  }
  handleChange(event) {
    this.setState({comment: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({comment: ''});
  }
  render() {
    return (
      //optional: give top level component a classname so it's easier to debug in browser
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
         value={this.state.comment}
         onChange={this.handleChange.bind(this)} />
        <button action="submit">Submit comment</button>
      </form>
    )
  }
}
