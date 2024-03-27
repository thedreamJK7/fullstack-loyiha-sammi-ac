import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Navbar, Register } from './components'
import AuthService from './service/Auth'
import { useDispatch } from 'react-redux'
import { signSuccess } from './counter/CounterSlice'
import { getArticleSuccess, getArticleStart } from './counter/ArticleSlice'
import { getItem } from './helpers/persistnce-storage'
import Articles from './service/Articles'
import Article from './components/Article'
import CreateArticle from './components/CreateArticle'

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
      </Routes>
    </div>
  );
}

export default App