import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../component/Navbar'
import Fee from '../component/Fee'
import { QueryClient,QueryClientProvider } from 'react-query'
const Home: NextPage = () => {
  const query = new QueryClient();
  return (
    <div>
      <Navbar/>
      <QueryClientProvider client={query}>
      <Fee/>
      </QueryClientProvider>
    </div>
    
    
  )
}

export default Home
