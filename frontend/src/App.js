import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditEmployee from './components/EditEmployee';
// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          <Route path='/edit/:empid' element={<EditEmployee/>}></Route>
          </Routes>
          {/* <Routes>
            <Route 
              path="/edit" 
              element={<EditForm />} 
            />

          </Routes> */}

         
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

