function HowItWorks() {
  const items = [
    {
      title: 'Enter for free',
      desc: 'Fill out a short form with your details. No payment, no catch.'
    },
    {
      title: 'Share with friends (optional)',
      desc: 'Get a bonus entry when a friend uses your referral code.'
    },
    {
      title: 'Winner selected fairly',
      desc: 'We draw a random winner and verify student status before announcing.'
    },
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">How it works</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">It’s fast, fair and free. We’ll only use your details for this competition unless you opt in for updates.</p>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">{i+1}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
