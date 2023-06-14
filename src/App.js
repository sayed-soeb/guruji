import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Review from "./components/Review";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Main />
      <Review />
      <Footer />
    </div>
  );
}

export default App;