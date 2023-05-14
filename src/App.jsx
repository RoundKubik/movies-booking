import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./Movies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </Router>
  );
};

export default App;
