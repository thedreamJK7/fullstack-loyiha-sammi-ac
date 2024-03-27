import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Navbar, Register } from './components'
import AuthService from './service/Auth'
import { useDispatch } from 'react-redux'
import { signSuccess } from './counter/CounterSlice'
import { getItem } from './helpers/persistnce-storage'
import Article from './components/Article'
import CreateArticle from './components/CreateArticle'
import EditArticle from './components/EditArticle'

const App = () => {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signSuccess(response));
    } catch (error) {
      
    }
  }
  
  useEffect(()=> {
    const token = getItem('token');
    if(token) {
      getUser()
    }
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />} />
        <Route path='/article/:slug' element={<Article />}/>
        <Route path='/createarticle' element={<CreateArticle />}/>
        <Route path='/edit-article/:slug' element={<EditArticle />}/>
      </Routes>
    </div>
  );
}

export default App