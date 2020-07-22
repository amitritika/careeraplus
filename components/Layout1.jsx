import Header from "./Header"
import Footer from "./Footer"
const Layout1 = ({children}) => {
  return (
    <React.Fragment>
      <Header />
        {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout1;