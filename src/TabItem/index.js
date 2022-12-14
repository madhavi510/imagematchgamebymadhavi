import './index.css'

const TabItem = props => {
  const {tabDetails, clickTab, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    clickTab(tabId)
  }

  const tabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-list-item-details">
      <button
        type="button"
        className={`tab-btn ${tabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
