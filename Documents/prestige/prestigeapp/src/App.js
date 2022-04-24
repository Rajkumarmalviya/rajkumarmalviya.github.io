
import './App.css';
import { BrowserRouter as Router , Routes , Route  } from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Courses from './components/courses/courses';
import Notices from './components/notices/notices';
import Contact from './components/contact/contact';
import UserProfile from './components/users/userProfile'; 
function App() {
  return (
    <div className="App">
    
      <Router><Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/notices' element={<Notices/>}/>
      <Route path='/contact' element={<Contact/>}/> 
      <Route path='/profile/:userName' element={<UserProfile/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;
