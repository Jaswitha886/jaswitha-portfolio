import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Notes from './components/Notes'
import Contact from './components/Contact'
import QSign from './pages/QSign'
import ResumeAnalyzer from './pages/ResumeAnalyzer'
import PersonalKnowledgeRag from './pages/PersonalKnowledgeRag'
import ExplainableAgentRouter from './pages/ExplainableAgentRouter'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Notes />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/qsign" element={<QSign />} />
        <Route path="/projects/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/projects/personal-knowledge-rag" element={<PersonalKnowledgeRag />} />
        <Route path="/projects/explainable-agent-router" element={<ExplainableAgentRouter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App