import React, { Component } from 'react'
import ThreadContext from '../../contexts/ThreadContext'
import ApiService from '../../services/api-service'
import {Section} from '../../components/Utils/Utils'
import CommentList from '../../components/CommentList/CommentList'
import AddComment from '../../components/AddComment/AddComment'
import DeleteThread from '../../components/DeleteThread/DeleteThread'
import './ThreadPage.css'


export default class TopicPage extends Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ThreadContext

   componentDidMount() {
      const {threadId} = this.props.match.params
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

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { thread } = this.context
    return (
      <div className='Thread_Page'>
        <Section className='thread_detail'>
          <div className='aa'>
            <div className='thread_title'>
              <h2>{thread && thread.thread_title}</h2>
            </div>
            <div className='thread_content'>
              <h5>{thread && thread.thread_content}</h5>
            </div>
          </div>
          <div className='dltbtn'>
            <DeleteThread thread={thread}/>
          </div>
        </Section>
        <Section>
          {this.renderComments()}
          <AddComment />
        </Section>
        <button className='backBtn' onClick={this.goBack}>Back</button>
      </div>
    );
  }
}