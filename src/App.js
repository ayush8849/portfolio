import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Body from './Components/Body';
import './App.css';
import { Outlet, createBrowserRouter} from 'react-router-dom';


const App = ()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
};

const AppLayout = createBrowserRouter([
  {path : "/" , element : <App/>,
  
  children : [{path : "/about" , element : <About/>} ,
  
  {path : "/" , element : <Body/>} ,
  {path : "/project" , element : <Project/>} ,
  {path : "/header" , element : <Header/>} ,
  {path : "/contact" , element : <Contact/>}],}
  
]);

export default AppLayout;
