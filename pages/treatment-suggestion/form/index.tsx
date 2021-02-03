import React from 'react'

import Typography from '@material-ui/core/Typography'

import AppShell from '@components/AppShell'
import Section from '@components/Section'
import { NewTreatmentSuggestion } from '@components/treatment-suggestion/new-treatment-suggestion'
import TreatmentImages from '@components/treatment-suggestion/treatment-images'
import TreatmentImageAddButton from '@components/treatment-suggestion/treatment-images/TreatmentImageAddButton'



const TreatmentSuggestionForm = () => {
  return (
    <AppShell pageTitle="Nova sugestão de tratamento" backLink="/treatment-suggestion">
      <TreatmentImages />

      <Section gutter="32px" spacing="16px" >
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Coberturas Recomendadas
        </Typography>
        <TreatmentImageAddButton />
      </Section>
      <Section gutter="32px" spacing="16px" >
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Estágio
        </Typography>
      </Section>
      <Section gutter="32px" spacing="16px" >
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Localização
        </Typography>
      </Section>
      <Section gutter="32px" spacing="16px" >
        <Typography variant="h4" style={{ marginBottom: '16px' }}>
          Nível de Exudato
        </Typography>
      </Section>
      <Section spacing="0 32px" transparent gutter="0 0 32px 0" elevation={0} >
        <NewTreatmentSuggestion>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>
            Dimessões
          </Typography>
        </NewTreatmentSuggestion>
      </Section>
    </AppShell>
  )
}

export default TreatmentSuggestionForm
