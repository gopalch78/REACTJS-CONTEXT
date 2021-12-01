// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div>
          <div>
            <h1>Layout</h1>
            <div>
              <div>
                <input
                  type="checkbox"
                  id="content"
                  onChange={onChangeContent}
                  checked={showContent}
                />
                <label htmlFor="content">Content</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="left navbar"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="left navbar">left Navbar</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="right navbar"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                />
                <label htmlFor="right navbar">Right Navbar</label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
