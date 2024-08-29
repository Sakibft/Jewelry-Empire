import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import './index.css'
import Layout from './Components/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
<Layout></Layout>
 
  </StrictMode>,
)
