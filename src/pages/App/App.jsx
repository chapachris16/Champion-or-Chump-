import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../PostList/PostListPage';
import NavBar from '../../components/NavBar';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { Comments } from '../../components/Comments';
import PostListPage from '../PostList/PostListPage';
import { CreatePostForm } from '../../components/CreatePostForm';



export default function App() {
  const [user, setUser] = useState(getUser())
  console.log(user)
  return (
    <main className="App">
      {user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage/>} />
            <Route path='/posts' element={<PostListPage/>} />
            <Route path='/posts/create' element={<CreatePostForm/>} />
          </Routes>
          <Comments/>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


