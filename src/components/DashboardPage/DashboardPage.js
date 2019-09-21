import React from 'react'

import Quote from '../Quote/Quote'
import Title from '../Title/Title'
import Gallery from "../Gallery/Gallery";  


const galleryData = [
  {    
    picture:"welcome-keep-calm.jpg",
    description: "This picture is one among..."
  },
  {
    picture: "welcome-team.jpg",
    description: "Yet another example of..."
  },
  {
    picture: "welcome-heart.jpg",
    description: "It is time to enjoy coding..."
  },
  {
    picture: "welcome-sky.jpg",
    description: "Flying away..."
  },
  {
    picture: "",
    description: "No picture found..."
  }
];

function DashboardPage() {

  return (
    <div>
    <Title>Citations</Title>
    <Quote message="Never trust a computer you can't throw out a window." author="Steve Wozniak"></Quote>
    <Title>Gallery</Title>
    <Gallery data={galleryData} />
    </div>
  )
}

export default DashboardPage;
