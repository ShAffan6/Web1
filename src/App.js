import react from 'react';
import Navbar from './Navbar/navbar';
import './App.css';
import Signup from './Sign_Up/Signup';
import PreviewWorkout from './Workout/PreviewWorkout';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<>Home</>}/>
          <Route path='/Sign-Up' element={<Signup/>}/>
          <Route path='/Workouts' element={<PreviewWorkout/>}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
