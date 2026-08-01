import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(11,17,32,0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#F8FAFC',
            borderRadius: '12px',
            padding: '12px 16px',
            fontSize: '14px',
          },
          success: { iconTheme: { primary: '#4F8CFF', secondary: '#fff' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#fff' } },
        }}
      />
    </HelmetProvider>
  </React.StrictMode>
)
