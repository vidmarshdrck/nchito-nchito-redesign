const LINKS = ['Home', 'About Us', 'Our People', 'Areas of Expertise', 'News and Insights', 'Contact Us']

export default function Footer() {
  return (
    <footer className="bg-neutral-800 py-10 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-white">Nchito &amp; Nchito Advocates</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {LINKS.map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="hover:text-white">
              {l}
            </a>
          ))}
        </nav>
        <p className="text-xs">&copy; {new Date().getFullYear()} Nchito &amp; Nchito Advocates. Lusaka, Zambia.</p>
      </div>
    </footer>
  )
}
