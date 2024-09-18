import React from 'react'
import Filters from '../components/Filters'
import Jobcard from '../components/Jobcard'
import Banner from '../components/Banner'
const Home=()=> {
  return (
    <>
    <div className='mt-32'>
      <Banner></Banner>
    </div>
    <div className='mt-32'>
      <Filters></Filters>
    </div>
    <div className='mt-32'>
      <Jobcard></Jobcard>
    </div>
    </>
   
  )
}

export default Home