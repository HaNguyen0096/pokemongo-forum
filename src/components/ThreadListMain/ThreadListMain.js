import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { moment } from 'moment-timezone'

export default class ThreadListMain extends Component{
  render() {
    const { thread, topic, countComments } = this.props
    // const time = moment(thread.modified).tz('America/New_York')
    // const dec = moment("2014-12-01T12:00:00Z")
    // console.log(moment(thread.modified))
    return (
      <div className='ThreadList'>
        <Link to={`/topic/${topic.id}/${thread.id}`} className='ThreadListItem'>
        <div className='ThreadListItem__title'>
            <h2>{thread.thread_title}</h2>
        </div>
        </Link>
        {/* <div className='Note__dates'>
          <div className='Note__dates-modified'>
            Modified:
            {' '}
            <span className='Date'>
              {format(time, 'Do MMM YYYY')}
            </span>
          </div>
        </div> */}
        <p>{thread.thread_content}</p>
        <p>Comments: {countComments}</p>
      </div>      
    )
  }
}