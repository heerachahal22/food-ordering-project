import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodLoginPage from './components/Loginpage';
import FoodMenuPage from './components/FoodMenuPage'; // Make this page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FoodLoginPage />} />
        <Route path="/foodmenu" element={<FoodMenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
