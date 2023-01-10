import Footer from "./Footer";
import HeadComponent from "./meta/HeadComponent";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <HeadComponent />
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
