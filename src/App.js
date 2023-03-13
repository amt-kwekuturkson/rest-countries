import { Routes, Route} from 'react-router-dom';
import './App.css';
import  Home  from './pages/Home/Home.tsx';
import { Details } from './pages/Details/Details.tsx';
import { Header } from './Components/Header.tsx';


function App() {

  return (
      <div>
        <Header />
        <Routes>
          <Route path="/Details" exact element={<Details />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
    </div>
  );
}



export default App;
