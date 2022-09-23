import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./app/pages/home";
import { Videos } from "./app/pages/videos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <Routes>
        <Route path="/videos" element={<Videos />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
