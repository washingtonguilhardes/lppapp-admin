import React, { useMemo } from 'react'

import AppShell from '@components/app-shell'


import SuggestionCard from './components/suggestion-card'
import SuggestionContainer from './components/suggestion-container'

function TreatmentSuggestion() {

  const suggestions = useMemo(() => {
    return (new Array(10)).fill('Card').map((c, i) => `${c}-${i}`)
  }, [])
  return (
    <AppShell pageTitle="Sugestão de Tratamento" addNewLink="/treatment-suggestion/form">
      <SuggestionContainer>
        {suggestions.map((key) => (
          <SuggestionCard key={key} item={key} />
        ))}
      </SuggestionContainer>
    </AppShell>
  )
}

export default TreatmentSuggestion
