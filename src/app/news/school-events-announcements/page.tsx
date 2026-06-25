import Link from "next/link";

export default function SchoolEventsAnnouncementsPage() {
  return (
    <main>
      <section className="bg-[var(--mnb-navy)] text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
            News
          </p>
          <h1 className="text-4xl md:text-5xl font-black mt-3">
            School Events and Announcements
          </h1>
          <p className="mt-4 text-white/80">20 June 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg leading-8 text-gray-700">
            Important school events, notices, and announcements will now be
            published regularly on the official website.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Parents, students, staff, and stakeholders are encouraged to visit
            the website regularly for updates on school activities, meetings,
            academic schedules, admissions, events, and other important college
            announcements.
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