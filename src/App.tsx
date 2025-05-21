

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './components/Pages/Index';
import CustomCursor from './components/ui/CustomCursor';

const App = () => (
  <BrowserRouter>
    <CustomCursor />
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default App;
