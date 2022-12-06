import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
