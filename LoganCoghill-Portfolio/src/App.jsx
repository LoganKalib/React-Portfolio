import Header from "./Components/Header";

import { useState } from "react";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />
      {page === "home" && <HomePage />}
      <Footer />
    </>
  );
}

export default App;
