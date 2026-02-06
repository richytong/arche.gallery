import NavLink from './NavLink.js'
import Slider from './Slider.js'
import HamburgerMenu from './HamburgerMenu.js'
import HamburgerMenuIcon from './HamburgerMenuIcon.js'
import setCookie from './setCookie.js'
import useMediaQuery from './useMediaQuery.js'
import useArcheVersion from './useArcheVersion.js'
import useIsHamburgerMenuActive from './useIsHamburgerMenuActive.js'

let lastScrollY =  0

/**
 * @name Layout
 *
 * @synopsis
 * ```coffeescript [specscript]
 * Layout(props {
 *   path: string,
 *   goto: function,
 *   children: ReactElement|Array<ReactElement>|string,
 * }) -> ReactElement
 * ```
 */
const Layout = ReactElement(props => {
  const { path, goto, children } = props

  const [mediaQuery] = useMediaQuery('(max-width: 768px)')
  const [ArcheVersion, setArcheVersion] = useArcheVersion()
  const [
    isHamburgerMenuActive, setIsHamburgerMenuActive,
  ] = useIsHamburgerMenuActive()

  useEffect(function resetHamburgerMenu() {
    if (!mediaQuery.matches && isHamburgerMenuActive) {
      setIsHamburgerMenuActive(false)
    }
  }, [mediaQuery.matches])

  return Div({ id: 'layout' }, [
    Nav([
      Div({ class: 'home' }, [
        NavLink({
          id: 'home-link',
          href: '/',
        }, [
          Img({
            src: '/assets/ArcheLogo.svg',
            alt: '',
          }),
          Span({ class: 'text1' }, 'Arche'),
        ]),

        Select({
          onChange(event) {
            setCookie('ArcheVersion', event.target.value)
            setArcheVersion(event.target.value)
          },
        }, [
          Option({ value: 'v1', selected: ArcheVersion == 'v1' }, 'v1'),
        ]),

        Div({ class: 'links' }, [
          NavLink({ href: '/docs' }, '/docs'),
          // A({ href: '/blog' }, 'Blog'),
        ]),
      ]),

      // Span({ class: 'nav-spacer' }),


      Div({ class: 'right-links' }, [
        mediaQuery.matches ? [
          Button({
            id: 'hamburger-menu-icon',
            class: isHamburgerMenuActive ? 'active' : '',
            onClick() {
              setIsHamburgerMenuActive(!isHamburgerMenuActive)
              window.scrollTo(0, 0)
            },
          }, [
            HamburgerMenuIcon(),
          ]),
        ] : []
      ]),
    ]),

    Div({ class: 'nav-text' }, [
      P('Arche (/ˈɑːrki/; Ancient Greek: ἀρχή) is a Greek word with primary senses "beginning", "origin" or "source of action" (ἐξ\' ἀρχῆς: from the beginning, οr ἐξ\' ἀρχῆς λόγος: the original argument), and later "first principle" or "element".'),
    ]),

    Slider({
      index: isHamburgerMenuActive ? 1 : 0,
      translateOffset: '10%',
    }, [
      Main([children]),
      HamburgerMenu(props),
    ]),

    Footer([
      P({
        style: { fontSize: '12px', color: '#888888' },
      }, `© ${new Date().getFullYear()} Richard Yufei Tong`),
    ]),
  ])
})

export default Layout
