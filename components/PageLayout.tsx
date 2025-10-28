import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import Spinner from './Spinner'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Spinner />
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
