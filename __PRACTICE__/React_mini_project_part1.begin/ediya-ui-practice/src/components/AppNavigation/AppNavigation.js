import './AppNavigation.scss'
import React from 'react'
import EdiyaContext from '~/context/ediyaContext'
import AppButton from '../AppButton/AppButton'

class AppNavigation extends React.Component {
  static contextType = EdiyaContext
  listRef = React.createRef()
  state = {
    isOpen: false,
    navClassName: 'appNavigation',
  }

  handleOpenNav = () => {
    this.setState(
      {
        isOpen: true,
      },
      () => {
        window.setTimeout(() => {
          this.setState({ navClassName: 'appNavigation is-active' })
        }, 400)
      }
    )
  }
  handleCloseNav = () => {
    this.setState(
      {
        navClassName: 'appNavigation',
      },
      () => {
        window.setTimeout(() => {
          this.setState({ isOpen: false })
        }, 400)
      }
    )
  }

  componentDidMount() {
    console.log(this.listRef.current)
  }

  render() {
    const { items } = this.context.navigation
    return (
      <>
        <AppButton
          handleNav={this.handleOpenNav}
          className="is-open-menu"
          title="메뉴 열기"
          aria-label="메뉴 열기"
        >
          <span className="ir"></span>
        </AppButton>
        <nav className={this.state.navClassName} hidden={!this.state.isOpen}>
          <h2 className="a11yHidden">메인 메뉴</h2>
          <ul className="resetList">
            {items.map(({ link, text }, index) => {
              return (
                <li key={index} id={index}>
                  <a
                    // ref={this.listRef.index === 0 ? 'firstLink' : null} → X
                    ref={index === 0 ? this.listRef : null}
                    href={link}
                  >
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
          <AppButton
            handleNav={this.handleCloseNav}
            className="is-close-menu"
            label="메뉴 닫기"
          >
            <span className="close" aria-hidden="true">
              ×
            </span>
          </AppButton>
        </nav>
      </>
    )
  }
}

export default AppNavigation

//
