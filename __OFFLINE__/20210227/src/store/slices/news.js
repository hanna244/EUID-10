// initialState
const initialState = {
  articles: [],
  totalResults: 0,
}
// reducer
export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case '리듀서야 상태 업데이트 좀 해줘':
      return action.newState
    default:
      return state
  }
}

// 리듀서 상태 업데이트 (동기)
export const _getNews = (newState) => {
  return {
    type: '리듀서야 상태 업데이트 좀 해줘',
    payload: newState,
  }
}

// 서버에 데이터 요청/응답 (비동기)
export const getNewsThunk = () => {
  // news api
  // newApi.getNews()
  // const newsApi = { getData: () => {}}

  return (dispatch) => {
    // return newsApi.getData()
    // .then((json) => dispatch(_getNews(json)))
  }
}
