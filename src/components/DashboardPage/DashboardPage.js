import React from 'react'

import Quote from '../Quote/Quote'
import Title from '../Title/Title'
import GalleryContainer from 'components/Gallery/Gallery.container';



function DashboardPage() {

  return (
    <div>
    <Title>Citations</Title>
    <Quote message="Never trust a computer you can't throw out a window." author="Steve Wozniak"></Quote>
    <Title>Gallery</Title>
    <GalleryContainer />
    </div>
  )
}

export default DashboardPage;
