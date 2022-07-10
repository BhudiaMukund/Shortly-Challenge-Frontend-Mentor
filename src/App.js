import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Statistics from "./components/Statistics";
import UrlShortener from "./components/UrlShortener";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <UrlShortener />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
