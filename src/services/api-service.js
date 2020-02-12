import config from '../config'

const ApiService = {

  getTopics() {
    return fetch(`${config.API_ENDPOINT}/TOPICS`, {
      headers: {
      },
    })
      .then(topicsRes =>
        (!topicsRes.ok)
          ? topicsRes.json().then(e => Promise.reject(e))
          : topicsRes.json()
      )     
  },

  getThreads() {
    return fetch(`${config.API_ENDPOINT}/THREADS`, {
      headers: {
      },
    })
      .then(threadsRes =>
        (!threadsRes.ok)
          ? threadsRes.json().then(e => Promise.reject(e))
          : threadsRes.json()
      )
  },
}

export default ApiService
