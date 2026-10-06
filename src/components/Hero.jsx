import RankingBadge from './RankingBadge.jsx'

export default function Hero() {
  return (
    <section id="top" className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:py-28">
        <h1 className="font-display text-4xl leading-tight sm:text-5xl">
          Business Law Counsel for Zambia&rsquo;s Leading Institutions
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
          Specialist advice across banking, corporate finance, employment, competition, and dispute
          resolution — from a firm ranked among Zambia&rsquo;s top business law practices.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#contact-us"
            className="rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Request a Consultation
          </a>
          <a
            href="#areas-of-expertise"
            className="rounded-sm border border-white/25 px-7 py-3.5 text-sm font-semibold text-white hover:border-white"
          >
            View Areas of Expertise
          </a>
        </div>
      </div>
      <RankingBadge />
    </section>
  )
}
