import React from 'react'
import MainLayout from '../../components/MainLayout'
import CTA from './Container/CTA'
import LandingPage from './Container/LandingPage' 
import Community from './Container/Community'
import FeedBack from './Container/FeedBack'

const HomePage = () => {
  return (
    <MainLayout>
      <LandingPage/>
      <Community/>
      <FeedBack/>
      <CTA/>
    </MainLayout>
  )
}

export default HomePage