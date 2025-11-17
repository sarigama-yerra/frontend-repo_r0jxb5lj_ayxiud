import { useState } from 'react'

function EntryForm() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    university: '',
    course: '',
    year_of_study: '',
    marketing_opt_in: false,
    consent_terms: false,
    referral_code: ''
  })
  const [status, setStatus] = useState({ loading: false, success: null, message: '' })

  const onChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, message: '' })

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/competition/entry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Submission failed')

      setStatus({ loading: false, success: true, message: data.message || 'Entry submitted!' })
      setForm({ full_name: '', email: '', university: '', course: '', year_of_study: '', marketing_opt_in: false, consent_terms: false, referral_code: '' })
    } catch (err) {
      setStatus({ loading: false, success: false, message: err.message })
    }
  }

  return (
    <section id="entry-form" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Enter the competition</h2>
          <p className="mt-2 text-gray-600">It’s free to enter. We’ll only use your details for the purposes of this competition unless you opt in.</p>

          <form onSubmit={submit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input name="full_name" value={form.full_name} onChange={onChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">University</label>
              <input name="university" value={form.university} onChange={onChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Course (optional)</label>
              <input name="course" value={form.course} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Year of study (optional)</label>
              <input name="year_of_study" value={form.year_of_study} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Referral code (optional)</label>
              <input name="referral_code" value={form.referral_code} onChange={onChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-600" />
            </div>

            <div className="sm:col-span-2 flex items-start gap-3 mt-2">
              <input type="checkbox" name="marketing_opt_in" checked={form.marketing_opt_in} onChange={onChange} className="mt-1" />
              <label className="text-sm text-gray-700">I’d like to receive updates and student housing offers (optional)</label>
            </div>

            <div className="sm:col-span-2 flex items-start gap-3">
              <input type="checkbox" name="consent_terms" checked={form.consent_terms} onChange={onChange} required className="mt-1" />
              <label className="text-sm text-gray-700">I agree to the competition terms and privacy policy</label>
            </div>

            <div className="sm:col-span-2 mt-4">
              <button disabled={status.loading} className="w-full sm:w-auto px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
                {status.loading ? 'Submitting…' : 'Submit entry'}
              </button>
            </div>

            {status.message && (
              <div className={`sm:col-span-2 mt-2 text-sm ${status.success ? 'text-green-700' : 'text-red-700'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default EntryForm
