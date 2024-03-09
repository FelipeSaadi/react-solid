import React from 'react'
import { createRoot } from 'react-dom/client'
import Login from '@/presentation/pages/login/login'

const container = document.getElementById('main')

if (container) {
  const root = createRoot(container)

  root.render(
    <Login />
  )
}
