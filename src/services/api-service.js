import config from '../config'

const ApiService = {

  getTopics() {
    return fetch(`${config.API_ENDPOINT}/topics`, {
      headers: {
      },
    })
      .then(topicsRes =>
        (!topicsRes.ok)
          ? topicsRes.json().then(e => Promise.reject(e))
          : topicsRes.json()
      )     
  },

  getTopic(topicId) {
    return fetch(`${config.API_ENDPOINT}/topics/${topicId}`, {
      headers: {
      },
    })
      .then(topicRes =>
        (!topicRes.ok)
          ? topicRes.json().then(e => Promise.reject(e))
          : topicRes.json()
      )     
  },

  getThisThread(threadId) {
    return fetch(`${config.API_ENDPOINT}/threads/${threadId}`, {
      headers: {
      },
    })
      .then(threadRes =>
        (!threadRes.ok)
          ? threadRes.json().then(e => Promise.reject(e))
          : threadRes.json()
      )     
  },

  getThreads(topicId) {
    return fetch(`${config.API_ENDPOINT}/topics/${topicId}/threads`, {
      headers: {
      },
    })
      .then(threadsRes =>
        (!threadsRes.ok)
          ? threadsRes.json().then(e => Promise.reject(e))
          : threadsRes.json()
      )
  },

  getComments(threadId) {
    return fetch(`${config.API_ENDPOINT}/threads/${threadId}/comments`, {
      headers: {
      },
    })
      .then(commentRes =>
        (!commentRes.ok)
          ? commentRes.json().then(e => Promise.reject(e))
          : commentRes.json()
      )
  },

  getComment() {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      headers: {
      },
    })
      .then(commentRes =>
        (!commentRes.ok)
          ? commentRes.json().then(e => Promise.reject(e))
          : commentRes.json()
      )
  },

  getThread() {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      headers: {
      },
    })
      .then(threadsRes =>
        (!threadsRes.ok)
          ? threadsRes.json().then(e => Promise.reject(e))
          : threadsRes.json()
      )
  },

  postComment(threadId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        thread_id: threadId,
        content: text,
        comment_id: 30,
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  postThread(topicId, title, content) {
    return fetch(`${config.API_ENDPOINT}/threads`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        topic_id: topicId,
        thread_title: title,
        thread_content: content,
        user_id: 3,
      }),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
}

export default ApiService
