import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//  components
import Header from "./views/components/header/header";
import Footer from "./views/components/footer/footer";

// pages
import Home from "./views/pages/home/home";
import HousingForm from "./views/pages/housingForm/housingForm";
import About from "./views/pages/about/about";
import NotFound from "./views/pages/notFound/notFound";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/housing/:id" element={<HousingForm />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
