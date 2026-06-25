import Link from "next/link";

export default function WebsiteLaunchedPage() {
  return (
    <main>
      <section className="bg-[var(--mnb-navy)] text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
            News
          </p>
          <h1 className="text-4xl md:text-5xl font-black mt-3">
            MNB College Website Launched
          </h1>
          <p className="mt-4 text-white/80">22 June 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg leading-8 text-gray-700">
            MNB College has launched its official website to improve
            communication with students, parents, staff, and stakeholders.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The website will provide important school updates, admissions
            information, academic notices, events, and general announcements.
            This development is part of the college&apos;s commitment to using
            digital platforms to improve service delivery and strengthen
            communication with the school community.
          </p>

          <div className="mt-8">
            <Link
              href="/news"
              className="inline-block rounded-xl bg-[var(--mnb-gold)] px-6 py-3 font-bold text-[var(--mnb-navy)]"
            >
              Back to News
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}