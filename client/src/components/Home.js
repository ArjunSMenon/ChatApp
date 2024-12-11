import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    navigate('/chat');
  };
  return (
    <form className='home_container' onSubmit={handleSubmit}>

    </form>
  )
}