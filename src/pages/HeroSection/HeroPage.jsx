import React from 'react'
import Section1 from './Section1'
import Service from './Service.jsx'

const HeroPage = () => {
  return (
    <div className=' relative  pt-3 bg-gradient-to-br from-red-500 via-red-700 to-red-600'>
      <Section1 />
      <Service />
    </div>
  )
}

export default HeroPage
