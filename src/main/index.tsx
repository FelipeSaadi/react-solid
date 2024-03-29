import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/styles/global.scss'
import Router from './routes/router'
import { makeLogin } from './factories/pages/login/login-factory'

const container = document.getElementById('main')

if (container) {
  const root = createRoot(container)

  root.render(
    <Router
      MakeLogin={makeLogin}
    />
  )
}
