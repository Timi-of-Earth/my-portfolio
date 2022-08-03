import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection";
import ExpericenceSection from "./components/ExpericenceSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "grey" }}>
      <HeroSection />
      <ExpericenceSection />
      <Footer />
    </div>
  );
}

export default App;
