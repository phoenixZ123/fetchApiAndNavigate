import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
   <nav><h3>My Blogs</h3>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
   </nav>
   <div className='body'>
        <Outlet />
   </div>
  
    </div>
  );
}

export default App;
