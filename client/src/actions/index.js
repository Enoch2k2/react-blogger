const baseUrl = 'http://localhost:3001'

export const addBlog = ( blog, history ) => {
  return dispatch => {
    return fetch(baseUrl + '/blogs', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ blog })
    })
    .then(resp => resp.json())
    .then(blog => {
      dispatch({ type: "ADD_BLOG", blog })
      history.push('/blogs')
    })
  }
}

export const getBlogs = () => {
  return dispatch => {
    dispatch({ type: "LOADING_BLOGS" })
    return fetch(baseUrl + '/blogs')
      .then(resp => resp.json())
      .then(blogs => {
        return dispatch({ type: 'GET_BLOGS', blogs })
      })
  }
}

export const getBlog = id => {
  return dispatch => {
    dispatch({ type: "LOADING_BLOGS" });
    return fetch(baseUrl + '/blogs/' + id)
      .then(resp => resp.json())
      .then( blog => dispatch({ type: "GET_BLOG", blog }))
  }
}

export const removeBlog = (id, history) => {

}