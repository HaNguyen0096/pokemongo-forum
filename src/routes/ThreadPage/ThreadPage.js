import React, { Component } from 'react'
import ThreadContext from '../../contexts/ThreadContext'
import ApiService from '../../services/api-service'
import {Section} from '../../components/Utils/Utils'
import CommentList from '../../components/CommentList/CommentList'
import AddComment from '../../components/AddComment/AddComment'
import DeleteThread from '../../components/DeleteThread/DeleteThread'


export default class TopicPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ThreadContext

   componentDidMount() {
      const {threadId} = this.props.match.params
      console.log(threadId)
      this.context.clearError()
    //ApiService.getThisThreads(threadId)
    //    .then(this.context.setThread)
    //    .catch(this.context.setError)
    ApiService.getComments(threadId)
      .then(this.context.setComments)
      .catch(this.context.setError)
   }


  renderComments(){
    //console.log(this.context)
    const { comments = []} = this.context
    console.log(this.context)
    return comments.map(comment =>
      <CommentList 
        key = {comment.id}
        comment = {comment} 
      />
      )
  }
  render() {
    return (
      <Section>
        <h2>Comments</h2>
        {this.renderComments()}
        <AddComment />
      </Section>
    );
  }
}