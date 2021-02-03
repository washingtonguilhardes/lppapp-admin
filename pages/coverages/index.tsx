import React from 'react'

import AppShell, { AppMenuContext } from '@components/app-shell'

const Coverage = () => {
  return (
    <AppShell
      pageTitle="Corbeturas"
    >
      <AppMenuContext.Consumer>
        {({ toggleMenu }) => (
          <div>
            <button onClick={() => toggleMenu(false)}>
              OPEN ? CLOSE
            </button>
            cobertura
          </div>

        )}
      </AppMenuContext.Consumer>
    </AppShell>
  )
}

export default Coverage
