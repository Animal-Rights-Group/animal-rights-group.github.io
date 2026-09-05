import Homepage from "./pages/Homepage";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-mist-900 flex flex-col min-h-screen">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </>
  );
}

export default App;
