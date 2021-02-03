import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Icon from '@material-ui/core/Icon';

import styled from 'styled-components';

const Conttainer = styled.div`
height: 268px;
border: 2px dashed rgba(0,0,0,.3);
color:  rgba(0,0,0,.3);
border-radius: 11px;
display: flex;
align-items: center;
justify-content: center;
font-size: 50px;
`

const TreatmentImageAddButton: React.FC = () => {

  return (
    <Card style={{ width: 320, minWidth: 320, height: 300, marginRight: '16px', padding: 16 }}>
      <CardActionArea>
        <Conttainer >
          <Icon fontSize="inherit" >add_circle</Icon>
        </Conttainer>
      </CardActionArea>
    </Card>
  )
}

export default TreatmentImageAddButton;
