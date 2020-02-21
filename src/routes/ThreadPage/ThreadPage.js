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
    ApiService.getThisThread(threadId)
        .then(this.context.setThread)
        .catch(this.context.setError)
    ApiService.getComments(threadId)
      .then(this.context.setComments)
      .catch(this.context.setError)
   }


  renderComments(){
    const { comments = []} = this.context
    return comments.map(comment =>
      <CommentList 
        key = {comment.id}
        comment = {comment} 
      />
      )
  }
  render() {
    const { thread } = this.context
    return (
      <div className='Thread_Page'>
        <Section>
        <h2>{thread && thread.thread_title}</h2>
        <h4>{thread && thread.thread_content}</h4>
        <DeleteThread thread={thread}/>
      </Section>
        <Section>
        <p>Comments</p>
        {this.renderComments()}
        <AddComment />
      </Section>
      </div>
    );
  }
}