import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import LearningGuide from './pages/LearningGuide'
import FileManager from './pages/FileManager'
import Goals from './pages/Goals'
import Statistics from './pages/Statistics'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learning" element={<LearningGuide />} />
          <Route path="/files" element={<FileManager />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

