// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, displayAppItems, isActive} = props
  const {tabId, displayText} = tabDetails

  const displayAppCategoryItems = () => {
    displayAppItems(tabId)
  }

  const tabBorder = isActive ? 'selected-tab' : ''

  return (
    <li>
      <button type="button" onClick={displayAppCategoryItems}>
        <p className={`tab-text ${tabBorder}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
