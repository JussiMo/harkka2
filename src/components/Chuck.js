import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = "https://api.chucknorris.io/jokes/random";

export default function Chuck({ value }) {
  const [norris, setNorris] = useState("");

  useEffect(() => {
    const address = API_URL;

    axios.get(address)
      .then((response) => {
        setNorris(response.data.value);
      })
      .catch(error => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <h3>Chuck Norris fact:</h3>
      <p>{norris}</p>
    </div>
  );
}
