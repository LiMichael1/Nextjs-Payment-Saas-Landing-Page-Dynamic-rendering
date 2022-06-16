import { useState, useEffect } from 'react';

import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import HowComp from './../components/pages/HowComp';

const How = () => {
  const [howData, setHow] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch('http://localhost:3000/api/firstTaskData');
      const data = await res.json();

      setHow(data.how);
    };

    fetchAPI();
  }, []);

  return (
    <div>
      <NavBar />
      <HowComp how={howData} />
      <Footer />
    </div>
  );
};

export default How;
