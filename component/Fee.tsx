import React from 'react';
import { useQuery } from 'react-query'
import axios from 'axios';
function Fee() {
    async function getFee() {
        const {data} = await axios.get('https://mempool.space/api/v1/fees/recommended');
        return data;
        
    }
getFee();
const { data, error, isError, isLoading } = useQuery('fee', getFee);
if (isError) {
    return <div>Error</div>;
  }
  if (isLoading) {
    return <div>Loading</div>;
  }

  return <div>
      <h1>Hello</h1> 
  </div>;
}

export default Fee;
