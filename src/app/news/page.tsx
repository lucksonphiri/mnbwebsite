/* import Link from "next/link";
export default function Page(){
    return <main>
        <section className="bg-[var(--mnb-navy)] text-white py-20">
            <div className="mx-auto max-w-7xl px-4">
                <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">MNB College</p>
                <h1 className="text-4xl md:text-5xl font-black mt-3">News</h1>
            </div>
        </section>
        
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2"><h2 className="section-title text-3xl">News</h2><p className="mt-4 text-gray-600 text-lg leading-8">Latest updates, announcements and school events.</p><div className="mt-8 grid md:grid-cols-2 gap-5"><div className="p-6 rounded-2xl bg-[var(--mnb-light)]"><h3 className="font-black text-[var(--mnb-navy)]">Key Information</h3><p className="text-gray-600 mt-2">This page is ready for official MNB College content, images and downloadable documents.</p></div><div className="p-6 rounded-2xl bg-[var(--mnb-light)]"><h3 className="font-black text-[var(--mnb-navy)]">Need Help?</h3><p className="text-gray-600 mt-2">Contact admissions or administration for further guidance.</p></div></div></div><aside className="bg-[var(--mnb-light)] rounded-3xl p-7 h-fit"><h3 className="font-black text-xl text-[var(--mnb-navy)]">Quick Links</h3><div className="grid gap-3 mt-5">
                <Link href="/admissions/apply-online" className="bg-white p-4 rounded-xl">Apply Online</Link>
                <Link href="/downloads/prospectus" className="bg-white p-4 rounded-xl">Prospectus</Link>
                <Link href="/contact" className="bg-white p-4 rounded-xl">Contact Us</Link></div></aside></div>
        </section>
        </main>
} */

import Link from "next/link";

const newsItems = [
  {
    title: "Admissions Now Open",
    date: "22 June 2026",
    summary:
      "MNB College is now accepting applications for the new academic intake. Parents and prospective students are encouraged to apply early.",
    link: "/news/admissions-now-open",
  },
  {
    title: "MNB College Website Launched",
    date: "22 June 2026",
    summary:
      "MNB College has launched its official website to improve communication with students, parents, staff and stakeholders.",
    link: "/news/website-launched",
  },
  {
    title: "Professional Emails Created",
    date: "21 June 2026",
    summary:
      "Official MNB College email accounts have been created for departments to improve communication and administration.",
    link: "/news/professional-emails-created",
  },
  {
    title: "School Events and Announcements",
    date: "20 June 2026",
    summary:
      "Important school events, notices and announcements will now be published regularly on the official website.",
    link: "/news/school-events-announcements",
  },
];

export default function Page() {
  return (
    <main>
       <section
  className="relative text-white py-32 bg-cover bg-center"
  style={{
    backgroundImage: "url('IMG_20230630_151418.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[var(--mnb-navy)]/70"></div>

  {/* Existing Content */}
  <div className="relative mx-auto max-w-7xl px-4">
    <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
      MNB COLLEGE
    </p>

    <h1 className="text-4xl md:text-6xl font-black mt-3">
      News
    </h1>

    <p className="mt-6 max-w-3xl text-xl text-gray-100 leading-relaxed">
      View Our Latest News
    </p>
  </div>
</section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="section-title text-3xl">Latest News</h2>

            <p className="mt-4 text-gray-600 text-lg leading-8">
              Latest updates, announcements and school events from MNB College.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {newsItems.map((news) => (
                <div
                  key={news.title}
                  className="p-6 rounded-2xl bg-[var(--mnb-light)] border border-gray-100 hover:shadow-lg transition"
                >
                  <p className="text-sm font-bold text-[var(--mnb-gold)]">
                    {news.date}
                  </p>

                  <h3 className="font-black text-xl text-[var(--mnb-navy)] mt-3">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    {news.summary}
                  </p>

                  <Link
                    href={news.link}
                    className="inline-block mt-5 font-bold text-[var(--mnb-navy)] hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-[var(--mnb-light)] rounded-3xl p-7 h-fit">
            <h3 className="font-black text-xl text-[var(--mnb-navy)]">
              Quick Links
            </h3>

            <div className="grid gap-3 mt-5">
              <Link
                href="/admissions/apply-online"
                className="bg-white p-4 rounded-xl"
              >
                Apply Online
              </Link>

              <Link
                href="/downloads/prospectus"
                className="bg-white p-4 rounded-xl"
              >
                Prospectus
              </Link>

              <Link href="/contact" className="bg-white p-4 rounded-xl">
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}