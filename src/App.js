import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Banner from "./pages/Banner";
import Home from "./pages/Home";
import "./pages/mentor.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function App() {
  return (
    <>
      <Header />
      {/* <img src="banner.png" width="100%" /> */}
      <Banner />
      <Home />
      <Footer />
    </>
  );
}

export default App;
