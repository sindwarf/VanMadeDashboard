import React, { useState } from 'react';
import {
  Link,
  useLoaderData,
} from 'react-router-dom';
import axios from 'axios';

// loader functions take the place of a useEffect hook,
// loader functions have the advantage of loading information before the page loads

function HomePage() {
  const testData = useLoaderData();
  const [test, setTest] = useState('test');
  // navlink lets you style active links
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello I Am HomePage and this is the test Data:
        {' '}
        {testData}
      </h1>
      <div>
        <Link to="/weather" test={{ test }}>weather</Link>
      </div>
      <div>
        <Link to="/battery">battery</Link>
      </div>
      <div>
        <Link to="/networke">network</Link>
      </div>
    </div>
  );
}
// test

export default HomePage;

export const homeLoader = () => (
  axios.get('http://localhost:3000/api/homeData')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      return err.message;
      console.log('ERROR: ', err);
    })
);
