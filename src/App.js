import react from 'react';
import Navbar from './Navbar/navbar';
import './App.css';
import PreviewWorkout from './Workout/PreviewWorkout';
import Blog from './Blogs/Blog';
import Training from './Training/Training'
import About from './What-Is-Titanic-Fitness/About'
import Membership from './Membership/Membership'
import Loginbox from './Login/loginbox';
import ContactUsForm from './Contact-Us/ContactUsForm';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CreateAccount from './Signup/CreateAccount';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<>Home</>}/>
          <Route path="What-Is-Titanic-Fitness" element={<About/>}/>
          <Route path="Contact-Us" element={<ContactUsForm/>}/>
          <Route path='/Sign-Up' element={<CreateAccount/>}/>
          <Route path='/Log-In' element={<Loginbox/>}/>
          <Route path='/Blogs' element={<Blog />}/>
          <Route path='/Workouts' element={<PreviewWorkout/>}/>
          <Route path='/Training' element={[<Training/>]}/>
          <Route path='/Memberships' element={[<Membership/>]}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
