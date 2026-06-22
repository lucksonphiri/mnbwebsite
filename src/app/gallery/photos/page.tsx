/* import Link from "next/link";
export default function Page(){return <main><section className="bg-[var(--mnb-navy)] text-white py-20"><div className="mx-auto max-w-7xl px-4"><p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">MNB College</p><h1 className="text-4xl md:text-5xl font-black mt-3">Photos</h1></div></section><section className="py-16"><div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10"><div className="lg:col-span-2"><h2 className="section-title text-3xl">Photos</h2><p className="mt-4 text-gray-600 text-lg leading-8">Photo gallery placeholder.</p><div className="mt-8 grid md:grid-cols-2 gap-5"><div className="p-6 rounded-2xl bg-[var(--mnb-light)]"><h3 className="font-black text-[var(--mnb-navy)]">Key Information</h3><p className="text-gray-600 mt-2">This page is ready for official MNB College content, images and downloadable documents.</p></div><div className="p-6 rounded-2xl bg-[var(--mnb-light)]"><h3 className="font-black text-[var(--mnb-navy)]">Need Help?</h3><p className="text-gray-600 mt-2">Contact admissions or administration for further guidance.</p></div></div></div><aside className="bg-[var(--mnb-light)] rounded-3xl p-7 h-fit"><h3 className="font-black text-xl text-[var(--mnb-navy)]">Quick Links</h3><div className="grid gap-3 mt-5"><Link href="/admissions/apply-online" className="bg-white p-4 rounded-xl">Apply Online</Link><Link href="/downloads/prospectus" className="bg-white p-4 rounded-xl">Prospectus</Link><Link href="/contact" className="bg-white p-4 rounded-xl">Contact Us</Link></div></aside></div></section></main>} */


import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  GraduationCap,
  Headphones,
  Info,
  Microscope,
  Phone,
  Trophy,
  Users,
  FileText,
} from "lucide-react";

const galleryImages = [
  {
    src: "/image1.png",
    title: "School Assembly",
    text: "Discipline, worship and school unity.",
    icon: Users,
  },
  {
    src: "/image2.png",
    title: "School Events",
    text: "Celebrating milestones together.",
    icon: Users,
  },
  {
    src: "/image3.png",
    title: "Student Life",
    text: "Learning, fellowship and growth.",
    icon: GraduationCap,
  },
  {
    src: "/IMG_20230630_151418.jpg",
    title: "Science & Innovation",
    text: "Practical learning in modern labs.",
    icon: Microscope,
  },
  {
    src: "/IMG_20230630_171411.jpg",
    title: "Facilities",
    text: "Equipped for the future.",
    icon: Trophy,
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
      Photos
    </h1>

    <p className="mt-6 max-w-3xl text-xl text-gray-100 leading-relaxed">
      Our Moments In Pictures
    </p>
  </div>
</section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8">
            <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
              Gallery Highlights
            </p>
            <h2 className="section-title text-3xl md:text-4xl mt-2">
              Scroll Through MNB Moments
            </h2>
          </div>

          <div className="overflow-x-auto pb-6">
            <div className="flex gap-5 min-w-max">
              {galleryImages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.src}
                    className="relative h-[370px] w-[280px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg group"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-center text-white">
                      <div className="mx-auto mb-4 h-16 w-16 rounded-full border-2 border-[var(--mnb-gold)] bg-[var(--mnb-navy)] grid place-items-center">
                        <Icon size={30} />
                      </div>

                      <h3 className="text-xl font-black">{item.title}</h3>
                      <p className="mt-2 text-sm text-gray-200">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Swipe or scroll sideways to view more photos.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--mnb-light)]">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="section-title text-3xl">Photos</h2>

            <div className="w-12 h-1 bg-[var(--mnb-gold)] mt-4 mb-6" />

            <p className="text-gray-600 text-lg leading-8">
              This gallery showcases life at MNB College—inside and outside the
              classroom. From academic activities and Christian gatherings to
              sports, culture and innovation, our students are growing in
              knowledge, character and purpose.
            </p>

            <div className="mt-10 grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border bg-white text-center shadow-sm">
                <div className="mx-auto h-14 w-14 rounded-full bg-[var(--mnb-cream)] text-[var(--mnb-navy)] grid place-items-center border border-[var(--mnb-gold)]">
                  <Info />
                </div>
                <h3 className="font-black text-xl text-[var(--mnb-navy)] mt-5">
                  Key Information
                </h3>
                <p className="text-gray-600 mt-3">
                  This page is ready for official MNB College content, images and
                  downloadable documents.
                </p>
              </div>

              <div className="p-8 rounded-2xl border bg-white text-center shadow-sm">
                <div className="mx-auto h-14 w-14 rounded-full bg-[var(--mnb-cream)] text-[var(--mnb-navy)] grid place-items-center border border-[var(--mnb-gold)]">
                  <Headphones />
                </div>
                <h3 className="font-black text-xl text-[var(--mnb-navy)] mt-5">
                  Need Help?
                </h3>
                <p className="text-gray-600 mt-3">
                  Contact admissions or administration for further guidance.
                </p>
              </div>
            </div>

            <div className="mt-10 bg-[var(--mnb-navy)] text-white rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="h-20 w-20 rounded-full border border-[var(--mnb-gold)] grid place-items-center text-[var(--mnb-gold)]">
                  <Camera size={36} />
                </div>

                <div>
                  <h3 className="text-2xl font-black">
                    Have Great Photos to Share?
                  </h3>
                  <p className="text-blue-100 mt-2">
                    Share your photos with us and be part of the MNB College
                    story.
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="bg-[var(--mnb-gold)] text-[var(--mnb-navy)] px-7 py-4 rounded-xl font-bold text-center"
              >
                Share Your Photos
              </Link>
            </div>
          </div>

          <aside className="bg-[var(--mnb-cream)] rounded-3xl p-7 h-fit">
            <h3 className="font-black text-2xl text-[var(--mnb-navy)]">
              Quick Links
            </h3>

            <div className="w-12 h-1 bg-[var(--mnb-gold)] mt-4 mb-6" />

            <div className="grid gap-4">
              <Link
                href="/admissions/apply-online"
                className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <GraduationCap className="text-[var(--mnb-purple)]" />
                  Apply Online
                </span>
                <span>→</span>
              </Link>

              <Link
                href="/downloads/prospectus"
                className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <FileText className="text-[var(--mnb-purple)]" />
                  Prospectus
                </span>
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <Phone className="text-[var(--mnb-purple)]" />
                  Contact Us
                </span>
                <span>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}