import './i18n';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";
ReactGA.initialize(import.meta.env.VITE_GA_ID)
ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
createRoot(document.getElementById('root')).render(
 // <StrictMode>
   <>

    <App />
    <Analytics/>
    </>

 // </StrictMode>,
)
