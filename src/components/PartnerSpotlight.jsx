const PARTNERS = [
  {
    name: 'Nchima Nchito SC',
    title: 'Managing Partner, State Counsel',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sashi Nchito',
    title: 'Partner',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Mutembo Nchito',
    title: 'Partner',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
  },
]

export default function PartnerSpotlight() {
  return (
    <section id="our-people" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl text-neutral-900">Our People</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PARTNERS.map((p) => (
            <div key={p.name} className="flex flex-col items-center rounded-sm border border-neutral-200 bg-white p-6 text-center">
              <img src={p.photo} alt={p.name} className="h-24 w-24 rounded-full object-cover" />
              <p className="font-display mt-4 text-lg text-neutral-900">{p.name}</p>
              <p className="text-sm text-neutral-900/65">{p.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
