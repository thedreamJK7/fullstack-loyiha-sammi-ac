import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Navbar, Register } from './components'
import AuthService from './service/Auth'
import { useDispatch } from 'react-redux'
import { signSuccess } from './counter/CounterSlice'
import { getItem } from './helpers/persistnce-storage'

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
    console.log('Token', token);
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
      </Routes>
    </div>
  );
}

export default App