import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
   <nav><h3>My Blogs</h3>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/clothes'>Clothes</a></li>
    </ul>
   </nav>
   <div className='body'>
        <Outlet />
   </div>
  
    </div>
  );
}

export default App;
