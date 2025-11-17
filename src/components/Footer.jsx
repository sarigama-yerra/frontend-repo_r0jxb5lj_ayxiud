function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Student Stay Giveaway. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#how-it-works" className="hover:text-gray-900">How it works</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
