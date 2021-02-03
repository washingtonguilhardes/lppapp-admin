import React from 'react'

import Paper from '@material-ui/core/Paper';

import TreatmentImageAddButton from './TreatmentImageAddButton';
import TreatmentImageCard from './TreatmentImageCard'


const TreatmentImageList: React.FC = () => {
  return (
    <Paper
      elevation={0}
      style={{
        maxWidth: '100vw',
        overflow: 'auto',
        display: 'flex',
        padding: '32px',
        alignItems: 'center',
        background: 'transparent'
      }}>
      <TreatmentImageAddButton />
      <TreatmentImageCard />
      <TreatmentImageCard />
      <TreatmentImageCard />
    </Paper>
  )
}

export default TreatmentImageList
