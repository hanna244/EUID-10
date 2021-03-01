import React, { useState, useEffect } from 'react'

// https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=40&apiKey=3efb6ab2986f4b0193ae4c34f498e720

export default function News() {
  // 데이터 상태
  const [newsData, setNewsData] = useState([])

  // 사이드 이펙트
  useEffect(() => {
    function fetchNewsData() {
      fetch(
        'https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&pageSize=100&apiKey=3efb6ab2986f4b0193ae4c34f498e720'
      )
        .then((res) => res.json())
        .then(({ articles }) => setNewsData(articles))
    }
    fetchNewsData()
  }, [])

  // 데이터 패치 함수

  return (
    <div>
      <pre>{newsData.J}</pre>
      <NewCard jsonData={newsData} />
    </div>
  )
}

function NewCard({ jsonData, ...props }) {
  return (
    <div>
      {jsonData.map((item, index) => {
        return (
          <>
            <p key={index} id={index}>
              {item.title}
            </p>
            <img src={item.urlToImage} height="80" alt="" />
          </>
        )
      })}
    </div>
  )
}
