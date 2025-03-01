import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

const LandingPage = () => {

  const store = useStore();
  const navigate = useNavigate();

  return (
    <div>Landing Page</div>
  )

}

export default LandingPage;