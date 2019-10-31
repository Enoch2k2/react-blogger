const initialState = {
  blogs: [],
  loading: false,
  blogsLoaded: false,
  currentBlog: null
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "GET_BLOGS":
      return {
        ...state,
        blogs: action.blogs,
        loading: false,
        blogsLoaded: true
      }
    case "GET_BLOG":
      return {
        ...state,
        loading: false,
        currentBlog: action.blog
      }
    case "LOADING_BLOGS":
      return {
        ...state,
        loading: true
      }
    case "ADD_BLOG":
      return {
        ...state,
        blogs: [...state.blogs, action.blog]
      }
    default:
      return state;
  }
}
