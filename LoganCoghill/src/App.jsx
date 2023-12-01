import About from "./Components/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import { useState } from "react";
import Home from "./Components/Home";

const tabs = ["Home","About", "Resume", "Contact"];

function App() {
  const [page, setPage] = useState(tabs[0]);

  function handlePageChange(tab) {
    setPage(tab);
  }

  return (
    <>
      <Header page={page} tabs={tabs} onClick={handlePageChange} />
      {page === tabs[0] && <Home />}
      {page === tabs[1] && <About />}

      <Footer />
    </>
  );
}

export default App;
