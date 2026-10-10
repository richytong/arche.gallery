import Layout from './Layout.js'
import MdastBlogPost from './MdastBlogPost.js'
import useArcheVersion from './useArcheVersion.js'
import usePath from './usePath.js'
import useMediaQuery from './useMediaQuery.js'

/**
 * @name BlogHome
 *
 * @synopsis
 * ```coffeescript [specscript]
 * BlogHome() -> ReactElement
 * ```
 */
const BlogHome = ReactElement(props => {
  const [ArcheVersion] = useArcheVersion()
  const [path, setPath] = usePath()
  const [mediaQuery] = useMediaQuery('(max-width: 768px)')

  useEffect(function scrollToAnchor() {
    const anchor = new URL(location.href).hash
    if (anchor.length > 0) {
      setTimeout(() => {
        const offset = mediaQuery.matches ? 200 : 300
        const scrollToElement = document.getElementById(anchor.slice(1))
        if (scrollToElement) {
          const desiredScrollY = scrollToElement.offsetTop + offset
          window.scrollTo(0, desiredScrollY)
        }
      }, 10)
    }
  }, [mediaQuery])

  return Layout(props, [
    Div({ id: 'blog' }, [
      blogPostList.map(blogPost => MdastBlogPost({
        key: blogPost.href,
        ...blogPost,
      })),
    ]),
  ])
})

export default BlogHome
