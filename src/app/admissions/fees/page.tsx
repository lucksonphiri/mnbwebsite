import Link from "next/link";
import { Download } from "lucide-react";
const newStudents = [
  ["Uniforms", "385"],
  ["Development Levy", "500"],
  ["Mattress", "35"],
  ["Admission Fee", "200"],
  ["Desk Fee", "45"],
  ["Computer Levy", "50"],
  ["Tuition Fees", "350"],
  ["Boarding Fees", "670"],
  ["Medical Aid", "20"],
];

const dayScholars = [
  ["Tuition Fees", "350"],
  ["Computer Levy", "50"],
  ["Medical Aid", "20"],
];

export default function Page() {
  return (
    <main>
      <section
        className="relative text-white py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('/IMG_20230630_151418.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[var(--mnb-navy)]/75" />

        <div className="relative mx-auto max-w-7xl px-4">
          <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
            MNB College
          </p>

          <h1 className="text-4xl md:text-6xl font-black mt-3">
            2027 Fees Structure
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-gray-100 leading-relaxed">
            Official 2027 fees catalogue for new students, boarders and day
            scholars.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[var(--mnb-light)]">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
              Fees Catalogue
            </p>

            <h2 className="section-title text-3xl mt-2">
              2027 Fees Structure
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-8">
              The following fees apply for the 2027 academic year. Parents and
              guardians are encouraged to contact the Admissions and Finance
              Office for payment arrangements, banking details and any updates.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-[var(--mnb-gold)]">
                <h3 className="font-black text-[var(--mnb-navy)]">
                  New Students Total
                </h3>
                <p className="text-4xl font-black text-[var(--mnb-navy)] mt-3">
                  US$2,255
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-green-500">
                <h3 className="font-black text-[var(--mnb-navy)]">
                  Termly Fees
                </h3>
                <p className="text-4xl font-black text-green-700 mt-3">
                  US$1,170
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border-t-4 border-yellow-500">
                <h3 className="font-black text-[var(--mnb-navy)]">
                  Day Scholars Food
                </h3>
                <p className="text-4xl font-black text-yellow-600 mt-3">
                  US$210
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-3xl shadow-sm overflow-hidden">
              <div className="bg-[var(--mnb-navy)] text-white px-6 py-5">
                <h3 className="text-2xl font-black">New Students</h3>
              </div>

              <table className="w-full text-left">
                <thead className="bg-[var(--mnb-gold)] text-[var(--mnb-navy)]">
                  <tr>
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4 text-right">Amount (US$)</th>
                  </tr>
                </thead>

                <tbody>
                  {newStudents.map(([item, amount]) => (
                    <tr key={item} className="border-b">
                      <td className="px-6 py-4">{item}</td>
                      <td className="px-6 py-4 text-right font-semibold">
                        {amount}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-[var(--mnb-navy)] text-white font-black">
                    <td className="px-6 py-4">Total</td>
                    <td className="px-6 py-4 text-right">2,255</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-10 bg-white rounded-3xl shadow-sm overflow-hidden">
              <div className="bg-green-700 text-white px-6 py-5">
                <h3 className="text-2xl font-black">Day Scholars</h3>
              </div>

              <table className="w-full text-left">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4 text-right">Amount (US$)</th>
                  </tr>
                </thead>

                <tbody>
                  {dayScholars.map(([item, amount]) => (
                    <tr key={item} className="border-b">
                      <td className="px-6 py-4">{item}</td>
                      <td className="px-6 py-4 text-right font-semibold">
                        {amount}
                      </td>
                    </tr>
                  ))}

                  <tr className="bg-[var(--mnb-navy)] text-white font-black">
                    <td className="px-6 py-4">Total</td>
                    <td className="px-6 py-4 text-right">420</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white border-l-4 border-[var(--mnb-gold)]">
              <h3 className="font-black text-[var(--mnb-navy)]">
                Important Note
              </h3>
              <p className="text-gray-600 mt-2">
                Fees may be subject to administrative updates. Please confirm
                with the Admissions and Finance Office before making payments.
              </p>
            </div>


            {/* <div className="mt-8 flex flex-wrap gap-4">

  <a
    href="/documents/fees_structure.pdf"
    download
    className="inline-flex items-center gap-3 bg-[var(--mnb-gold)] text-[var(--mnb-navy)] font-bold px-8 py-4 rounded-xl hover:scale-105 transition shadow-lg"
  >
    <Download size={22} />
    Download 2027 Fees Structure (PDF)
  </a>

</div> */}

<div className="mt-10 rounded-3xl bg-[var(--mnb-navy)] text-white p-8 shadow-xl">

    <h3 className="text-2xl font-black">
        Download the Official 2027 Fees Catalogue
    </h3>

    <p className="mt-3 text-blue-100">
        Click the button below to download the official MNB College
        2027 Fees Structure in PDF format.
    </p>

    <a
        href="/documents/fees-structure-2027.pdf"
        download
        className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[var(--mnb-gold)] px-8 py-4 font-bold text-[var(--mnb-navy)] hover:scale-105 transition"
    >
        <Download size={22}/>
        Download PDF
    </a>

</div>



          </div>


                  



          <aside className="bg-white rounded-3xl p-7 h-fit shadow-sm">
            <h3 className="font-black text-xl text-[var(--mnb-navy)]">
              Quick Links
            </h3>

            <div className="grid gap-3 mt-5">
              <Link
                href="/admissions/apply-online"
                className="bg-[var(--mnb-light)] p-4 rounded-xl"
              >
                Apply Online
              </Link>

              <Link
                href="/downloads/prospectus"
                className="bg-[var(--mnb-light)] p-4 rounded-xl"
              >
                Prospectus
              </Link>

              <Link
                href="/contact"
                className="bg-[var(--mnb-light)] p-4 rounded-xl"
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-8 bg-[var(--mnb-navy)] text-white rounded-2xl p-6">
              <h4 className="font-black text-lg">Need Help?</h4>
              <p className="mt-2 text-blue-100 text-sm">
                Contact Admissions and Finance Office for current payment
                details.
              </p>
              <p className="mt-4 font-bold">+263 78 728 2897</p>
              <p className="text-sm">enquiries@mnb.ac.zw</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}