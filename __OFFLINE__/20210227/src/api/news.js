// https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&pageSize=40&apiKey=e8078a1cf5304d95a584d075e031c835

class NewsAPI {
  constructor(apiInfo) {
    const { API_KEY, conuntry, category, page, pageSize } = apiInfo

    this._API_KEY = API_KEY
    this.options = {
      conuntry,
      category,
      page,
      pageSize,
    }
  }

  getData() {
    return fetch(`https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&pageSize=40&apiKey=e8078a1cf5304d95a584d075e031c835
    `).then((res) => res.json)
  }

  setData() {}

  putData() {}

  deleteData() {}
}

export default NewsAPI

/**
 * const newsApi = new NewsAPI({ page: 1, pageSize: 5, country: 'zh' })
 * newsApi.getData().then(({articles}) => setNewsData(articles))
 * newsApi.setData({})
 * newsApi.putData(id, {})
 * newsApi.deleteData(id)
 */
