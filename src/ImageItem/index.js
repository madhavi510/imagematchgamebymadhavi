import './index.css'

const ImageItem = props => {
  const {imagesListDetails, clickImageItem} = props
  const {thumbnailUrl, id} = imagesListDetails

  const onClickImageItem = () => {
    clickImageItem(id)
  }
  return (
    <li className="images-list-container">
      <button
        type="button"
        className="match-image-btn"
        onClick={onClickImageItem}
      >
        <img className="match-image" src={thumbnailUrl} alt="thumbnailImg" />
      </button>
    </li>
  )
}
export default ImageItem
