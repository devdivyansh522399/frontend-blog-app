import React from 'react'
import MainLayout from '../../components/MainLayout'
import CTA from './Container/CTA'
import LandingPage from './Container/LandingPage' 
import BlogSection from '../Blog Pages/Component/BlogSection'
import Community from './Container/Community'
import FeedBack from './Container/FeedBack'

const HomePage = () => {
  return (
    <MainLayout>
      <LandingPage/>
      <BlogSection title={"Top Stories"}/>
      <Community/>
      <FeedBack/>
      <CTA/>
    </MainLayout>
  )
}

export default HomePage