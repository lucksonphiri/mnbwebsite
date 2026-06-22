/* import Link from "next/link";
export default function Page(){return <main><section className="bg-[var(--mnb-navy)] text-white py-20"><div className="mx-auto max-w-7xl px-4"><p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">MNB College</p><h1 className="text-4xl md:text-5xl font-black mt-3">Gallery</h1></div></section><section className="py-16"><div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10"><div className="lg:col-span-2"><h2 className="section-title text-3xl">Gallery</h2><p className="mt-4 text-gray-600 text-lg leading-8">Photo and video highlights from MNB College.</p><div className="mt-8 grid md:grid-cols-2 gap-5"><div className="p-6 rounded-2xl bg-[var(--mnb-light)]"><h3 className="font-black text-[var(--mnb-navy)]">Key Information</h3><p className="text-gray-600 mt-2">This page is ready for official MNB College content, images and downloadable documents.</p></div><div className="p-6 rounded-2xl bg-[var(--mnb-light)]"><h3 className="font-black text-[var(--mnb-navy)]">Need Help?</h3><p className="text-gray-600 mt-2">Contact admissions or administration for further guidance.</p></div></div></div><aside className="bg-[var(--mnb-light)] rounded-3xl p-7 h-fit"><h3 className="font-black text-xl text-[var(--mnb-navy)]">Quick Links</h3><div className="grid gap-3 mt-5"><Link href="/admissions/apply-online" className="bg-white p-4 rounded-xl">Apply Online</Link><Link href="/downloads/prospectus" className="bg-white p-4 rounded-xl">Prospectus</Link><Link href="/contact" className="bg-white p-4 rounded-xl">Contact Us</Link></div></aside></div></section></main>} */

import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  {
    src: "/image1.png",
    title: "School Assembly",
  },
  {
    src: "/image2.png",
    title: "Student Event",
  },
  {
    src: "/image3.png",
    title: "Student Life",
  },
  {
    src: "/IMG_20230630_151418.jpg",
    title: "Science Laboratory",
  },
  {
    src: "/IMG_20230630_171411.jpg",
    title: "Practical Learning",
  },
];

export default function Page() {
  return (
    <main>
      <section className="bg-[var(--mnb-navy)] text-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
            MNB College
          </p>

          <h1 className="text-4xl md:text-5xl font-black mt-3">
            Gallery
          </h1>

          <p className="mt-4 max-w-2xl text-blue-100 text-lg">
            View moments of learning, worship, discipline, student life and
            practical education at MNB College.
          </p>
        </div>
      </section>

      {/* SCROLLING PICTURE SECTION */}
      <section className="py-10 bg-[var(--mnb-light)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
                Photo Highlights
              </p>
              <h2 className="section-title text-3xl mt-2">
                Scroll Through MNB Moments
              </h2>
            </div>

            <Link
              href="/gallery/photos"
              className="hidden md:inline-block bg-[var(--mnb-navy)] text-white px-5 py-3 rounded-xl font-bold"
            >
              View All Photos
            </Link>
          </div>

          <div className="overflow-x-auto pb-5">
            <div className="flex gap-5 min-w-max">
              {galleryImages.map((item) => (
                <div
                  key={item.src}
                  className="relative h-80 w-[340px] md:w-[420px] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg group"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-200">
                      MNB College life and learning.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-2 text-sm text-gray-500 md:hidden">
            Swipe left or right to view more pictures.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="section-title text-3xl">Gallery</h2>

            <p className="mt-4 text-gray-600 text-lg leading-8">
              Photo and video highlights from MNB College, including student
              assemblies, Christian life, science laboratories, academic
              activities, events and school facilities.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-[var(--mnb-light)]">
                <h3 className="font-black text-[var(--mnb-navy)]">
                  School Life
                </h3>
                <p className="text-gray-600 mt-2">
                  View learners participating in assemblies, academic events,
                  worship moments, clubs and school activities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--mnb-light)]">
                <h3 className="font-black text-[var(--mnb-navy)]">
                  Facilities
                </h3>
                <p className="text-gray-600 mt-2">
                  Explore MNB College facilities including science laboratories,
                  learning spaces and student support environments.
                </p>
              </div>
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