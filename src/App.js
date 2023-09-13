import './App.css';
import { BannerPage, MovieDetailsPage, MovieHomePage } from './screens';

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieHomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>

      </BrowserRouter>

      {/* <MovieHomePage /> */}
    </div>
  );
}

export default App;
