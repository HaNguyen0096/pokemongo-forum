import React from 'react'

export function Input({ className, ...props }) {
  return (
    <input className={['Input', className].join(' ')} {...props} />
  )
}

export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}

export function Section({ className, list, ...props }) {
  const classes = [
    'Section',
    list && 'Section--list',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section className={classes} {...props} />
  )
}

export const getThreadsForTopic = (threads=[], topicName) => (
  (!topicName)
    ? threads
    : threads.filter(thread => thread.topic_name === topicName)
)

export const getThisTopic = (topics=[], topicName) => 
  topics.filter(topic => topic.topic_name === topicName)[0]

export const getThisThread = (threads=[], threadId) => 
  threads.filter(thread => thread.thread_id === threadId)[0]

export const getCommentsForThread = (comments=[], threadId) => (
  comments.filter(comment => comment.thread_id === threadId)
)

export const countThreadsForTopic = (threads=[], topicId) => 
  threads.filter(thread => thread.topic_id === topicId).length

export const countCommentsForThread = (comments=[], threadId) => 
  comments.filter(comment => comment.thread_id === threadId).length

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />
}
  
export function Textarea({ className, ...props }) {
  return (
    <textarea className={['Textarea', className].join(' ')} {...props} />
  )
}


