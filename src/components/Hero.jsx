import { useEffect, useState } from 'react'

function Hero() {
  const [count, setCount] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/competition/entries/count`)
        if (res.ok) {
          const data = await res.json()
          setCount(data.count)
        }
      } catch (e) {
        // ignore
      } finally {
        setLoading(false)
      }
    }
    fetchCount()
  }, [])

  const scrollToForm = () => {
    const el = document.getElementById('entry-form')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden">
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop"
        alt="Students walking on campus"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-900/80" />
      <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-indigo-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[40rem] h-[40rem] bg-sky-400/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-medium bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full backdrop-blur">
            {loading ? 'Checking entries…' : `${count ?? 0} entries so far`}
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Win Free Student Accommodation in the UK
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Enter for a chance to have your rent covered for a full term. It’s free to enter and takes less than a minute.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button onClick={scrollToForm} className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow hover:shadow-md transition">
              Enter Now — Free
            </button>
            <a href="#how-it-works" className="px-6 py-3 rounded-lg border border-white/40 text-white hover:bg-white/10 transition">
              How it works
            </a>
          </div>
          <p className="mt-4 text-xs text-white/80">No purchase necessary. 18+ UK students only. T&Cs apply.</p>

          {/* Photo strip for extra visual context */}
          <div className="mt-10 hidden sm:flex justify-center gap-3 opacity-95">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" alt="Student accommodation room" className="h-20 w-32 object-cover rounded-lg shadow" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600&auto=format&fit=crop" alt="Students studying together" className="h-20 w-32 object-cover rounded-lg shadow" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=600&auto=format&fit=crop" alt="Campus building" className="h-20 w-32 object-cover rounded-lg shadow" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
