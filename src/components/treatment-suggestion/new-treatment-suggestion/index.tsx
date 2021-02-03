import React from 'react'

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

export const NewTreatmentSuggestion: React.FC = (props) => {
  const { children } = props;
  return (
    <Paper style={{ padding: 16, }}>
      {children}
      <TextField
        label="Largura (cm)"
        fullWidth
        style={{ marginBottom: 16 }}
      />
      <TextField
        label="Comprimento (cm)"
        fullWidth
        style={{ marginBottom: 16 }}
      />
      <TextField
        label="Profundidade (cm)"
        fullWidth
        style={{ marginBottom: 16 }}
      />
    </Paper>
  )
}
