import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Statictis from './components/Statitics/Statictis';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz.jsx';


function App() {
  const router=createBrowserRouter([
{path:'/',element:<Main></Main>,
children:[
  {path:'/',element:<Home></Home>},
  {path:'/home',
  loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')
  ,element:<Home></Home>},
  {path:'Statictis',element:<Statictis></Statictis>},
  {path:'/blog',element:<Blog></Blog>},
  {path:'/quize/:quizID',
  loader:({params})=>{
  return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
  },
  element:<Quiz></Quiz>
}
]

}
  ])
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
