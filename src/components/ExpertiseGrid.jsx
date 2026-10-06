import { Landmark, Scale, Users, ShieldCheck, FileCheck2 } from 'lucide-react'

const AREAS = [
  { icon: Landmark, title: 'Banking, Securities and Corporate Finance', blurb: 'Structuring and advising on complex financing and capital markets transactions.' },
  { icon: ShieldCheck, title: 'Competition and Consumer Protection', blurb: 'Regulatory counsel on market conduct and consumer protection compliance.' },
  { icon: Users, title: 'Employment and Employee Benefits', blurb: 'Advising employers on compliance, contracts, and workplace disputes.' },
  { icon: Scale, title: 'Litigation and Dispute Resolution', blurb: 'Representing institutional clients before Zambian courts and tribunals.' },
  { icon: FileCheck2, title: 'Pensions Regulatory Advice & Enforcement', blurb: 'Regulatory and enforcement guidance for pension schemes and administrators.' },
]

export default function ExpertiseGrid() {
  return (
    <section id="areas-of-expertise" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="font-display text-3xl text-neutral-900">Areas of Expertise</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map(({ icon: Icon, title, blurb }) => (
            <div key={title} className="rounded-sm border border-neutral-200 p-6">
              <Icon className="text-primary" size={28} strokeWidth={1.5} />
              <h3 className="font-display mt-4 text-lg text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm text-neutral-900/65">{blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
