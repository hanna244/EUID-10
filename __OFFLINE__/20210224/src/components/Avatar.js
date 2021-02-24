import { ReactComponent as Unknown } from '../assets/unknown-person.svg'

export default function Avatar({ url, size = 60, ...restProps }) {
  return url ? (
    <img src={url} alt="" height={size} {...restProps} />
  ) : (
    <Unknown title="사진 없음" height={size} />
  )
}
