import React from 'react'
import MainLayout from '../../components/MainLayout'
import Editor from '../../components/Editor/Editor'
const Writer = () => {
  return (
     <MainLayout>
       <section className='container max-w-7xl'>
          <Editor/>
       </section>
     </MainLayout>
  )
}

export default Writer