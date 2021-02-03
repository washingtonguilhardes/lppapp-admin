import AppShell from '@components/AppShell'
import React from 'react'
import { useRouter } from 'next/router'

function TreatmentSuggestionSingle() {
  const { query } = useRouter();

  console.log(query.id);

  return (
    <AppShell pageTitle={query.id as string} backLink="/treatment-suggestion">
      SUGESTÂO SINGLE
    </AppShell>
  )
}

export default TreatmentSuggestionSingle
