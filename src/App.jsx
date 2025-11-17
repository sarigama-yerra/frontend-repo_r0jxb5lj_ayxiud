import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import EntryForm from './components/EntryForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
      <div className="relative">
        <Hero />
        <HowItWorks />
        <EntryForm />
        <Footer />
      </div>
    </div>
  )
}

export default App
