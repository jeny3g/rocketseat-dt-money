import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import { TransactionsProvider } from './contexts/TransactionContext'
import { Transactions } from './pages/Transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  useEffect(() => {
    console.log('Running twice')
  }, [])

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
