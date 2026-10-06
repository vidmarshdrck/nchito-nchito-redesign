export default function InlineContactForm() {
  return (
    <section id="contact-us" className="bg-neutral-900 py-20 text-white">
      <div className="mx-auto max-w-2xl px-5">
        <h2 className="font-display text-3xl">Speak to Our Team</h2>
        <p className="mt-3 text-white/70">
          Tell us about your matter and a partner will respond directly — no need to navigate away
          from this page.
        </p>
        <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Name"
            className="rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:border-primary focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:border-primary focus:outline-none"
          />
          <input
            type="text"
            placeholder="Firm / Matter"
            className="rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:border-primary focus:outline-none sm:col-span-2"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder-white/40 focus:border-primary focus:outline-none sm:col-span-2"
          />
          <button
            type="submit"
            className="rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold text-white hover:bg-primary-dark sm:col-span-2"
          >
            Request a Consultation
          </button>
        </form>
        <p className="mt-4 text-sm text-white/55">
          Prefer another way? <a href="tel:+260211000000" className="underline hover:text-white">Call us</a> or{' '}
          <a href="mailto:info@nchito.co.zm" className="underline hover:text-white">email us</a> directly.
        </p>
      </div>
    </section>
  )
}
