import Link from "next/link";

export default function ProfessionalEmailsCreatedPage() {
  return (
    <main>
      <section className="bg-[var(--mnb-navy)] text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
            News
          </p>
          <h1 className="text-4xl md:text-5xl font-black mt-3">
            Professional Emails Created
          </h1>
          <p className="mt-4 text-white/80">21 June 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg leading-8 text-gray-700">
            Official MNB College email accounts have been created for
            departments to improve communication and administration.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            The new professional email system will help staff members,
            departments, parents, students, and stakeholders communicate through
            official college channels. This improves professionalism, record
            keeping, and the smooth flow of information within the institution.
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