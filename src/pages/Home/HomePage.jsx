import React from 'react'
import MainLayout from '../../components/MainLayout'
import Landing from './Container/Landing'
import Article from './Container/Article'
import CTA from './Container/CTA'


const HomePage = () => {
  return (
    <MainLayout>
      <Landing />
      <Article/>
      <CTA/>
    </MainLayout>
  )
}

export default HomePage