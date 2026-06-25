import Link from "next/link";

export default function AdmissionsNowOpenPage() {
  return (
    <main>
      <section className="bg-[var(--mnb-navy)] text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
            Admissions
          </p>
          <h1 className="text-4xl md:text-5xl font-black mt-3">
            Admissions Now Open
          </h1>
          <p className="mt-4 text-white/80">22 June 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg leading-8 text-gray-700">
            MNB College is now accepting applications for the new academic
            intake. Parents and prospective students are encouraged to apply
            early to secure a place for the coming academic year.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Application forms and admission details are available through the
            college administration office. Interested learners and parents may
            contact the school for guidance on available programmes, entry
            requirements, fees, and enrolment procedures.
          </p>

          <div className="mt-8">
            <Link
              href="/admission"
              className="inline-block rounded-xl bg-[var(--mnb-gold)] px-6 py-3 font-bold text-[var(--mnb-navy)]"
            >
              Go to Admissions Page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}