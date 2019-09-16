import React from 'react'

import Quote from '../Quote/Quote'
import Title from '../Title/Title'



function DashboardPage() {
  return (
    <div>
    <Title>Citations</Title>
    <Quote message="Never trust a computer you can't throw out a window." author="Steve Wozniak"></Quote>
    </div>
  )
}

export default DashboardPage;
