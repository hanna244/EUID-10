import React from 'react'
import styled from 'styled-components/macro'

const NewsContainer = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`

/* -------------------------------------------------------------------------- */

export default function News() {
  // 데이터 상태
  const [newsData, setNewsData] = React.useState([])
  const [country] = React.useState('kr')
  const [category] = React.useState('entertainment')
  const [displayCount] = React.useState(5)
  const [currentPage, setCurrentPage] = React.useState(4)
  const [totalPage, setTotalPage] = React.useState(0)
  const [hasError, setHasError] = React.useState(null)

  // 사이드 이펙트
  React.useEffect(() => {
    // 데이터 패치 함수
    const fetchNews = async () => {
      try {
        const { articles, totalResults } = await (
          await fetch(
            '/api/news.json'
            // `https://newsapi.org/v2/top-headlines?
            //   country=${country}&
            //   category=${category}&
            //   pageSize=${displayCount}&
            //   page=${currentPage}&
            //   apiKey=${process.env.REACT_APP_NEWS_API_KEY}
            // `.replace(/\s/g, '')
          )
        ).json()

        setTotalPage(Math.ceil(totalResults / 5))
        setNewsData(articles)
      } catch (error) {
        setHasError(error)
      }
    }

    fetchNews()
  }, [category, country, currentPage, displayCount])

  if (hasError) {
    return <div role="alert">{hasError.message}</div>
  }

  return (
    <NewsContainer>
      {newsData.length > 0 ? (
        newsData.map((item) => <News.Item key={item.title} item={item} />)
      ) : (
        <p>현재 뉴스가 없습니다.</p>
      )}
    </NewsContainer>
  )
}

/* -------------------------------------------------------------------------- */

News.Item = (props) => {
  const { title, description, url, urlToImage } = props.item

  return (
    <li {...props}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2>{title}</h2>
        <img src={urlToImage} alt="" height="100" />
        <div>{description}</div>
      </a>
    </li>
  )
}
News.Item.displayName = 'NesItem'
