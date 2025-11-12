import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import Spinner from './Spinner'

interface PageLayoutProps {
  children: React.ReactNode
  isHomepage?: boolean
  hideTopbar?: boolean
}

export default function PageLayout({ children, isHomepage = false, hideTopbar = false }: PageLayoutProps) {
  return (
    <>
      <Spinner />
      {!hideTopbar && <Topbar transparent={isHomepage} />}
      <Navbar transparent={isHomepage} centered={hideTopbar} />
      {children}
      <Footer />
    </>
  )
}
