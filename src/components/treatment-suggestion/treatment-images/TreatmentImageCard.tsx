import React from 'react'

import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


interface TreatmentImageCardProps {
  mode?: 'preview' | 'add'
}

const TreatmentImageCard: React.FC<TreatmentImageCardProps> = () => {
  return (
    <Card style={{ minWidth: 320, height: 300, marginRight: '16px' }}>
      <CardContent style={{ height: 300 - 56, backgroundImage: 'url("https://picsum.photos/200/300")' }} />
      <CardActions>
        <Button color="secondary" >
          EXCLUIR
        </Button>
      </CardActions>
    </Card>
  )
}

export default TreatmentImageCard;
