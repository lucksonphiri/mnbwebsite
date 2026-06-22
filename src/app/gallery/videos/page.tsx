"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FileText,
  GraduationCap,
  Phone,
  PlayCircle,
  Video,
} from "lucide-react";

const videos = [
  {
    title: "Welcome to MNB College",
    description: "A short introduction to MNB College life, learning and values.",
    src: "/VID-20260618-WA0036.mp4",
    poster: "/hero/assembly.png",
  },
  {
    title: "Science Laboratory Practical",
    description: "Learners engaging in practical science and laboratory work.",
    src: "/VID-20260618-WA0033.mp4",
    poster: "/facilities/science-lab-wide.jpg",
  },
  {
    title: "School Assembly",
    description: "A moment of discipline, worship and school unity.",
    src: "/VID-20260618-WA0034.mp4",
    poster: "/gallery/students-event.png",
  },
  {
    title: "Student Life",
    description: "Clubs, events, mentorship and learner development.",
    src: "/VID-20260618-WA0035.mp4",
    poster: "/gallery/students-tent.png",
  },
];

export default function Page() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const activeVideo = videos[currentVideo];

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
      Videos
    </h1>

    <p className="mt-6 max-w-3xl text-xl text-gray-100 leading-relaxed">
      Watch Video Highlights
    </p>
  </div>
</section>

      <section className="py-16 bg-[var(--mnb-light)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8">
            <p className="text-[var(--mnb-gold)] uppercase tracking-[.2em] font-bold">
              Video Highlights
            </p>
            <h2 className="section-title text-3xl mt-2">
              Watch MNB College Moments
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-black">
                <video
                  key={activeVideo.src}
                  controls
                  className="w-full aspect-video"
                  poster={activeVideo.poster}
                >
                  <source src={activeVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-[var(--mnb-navy)]">
                  {activeVideo.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {activeVideo.description}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 shadow-lg h-fit">
              <h3 className="font-black text-xl text-[var(--mnb-navy)] mb-4 flex items-center gap-2">
                <Video className="text-[var(--mnb-gold)]" />
                Video Playlist
              </h3>

              <div className="max-h-[500px] overflow-y-auto pr-2 grid gap-3">
                {videos.map((video, index) => (
                  <button
                    key={video.src}
                    onClick={() => setCurrentVideo(index)}
                    className={`text-left rounded-2xl p-4 border transition ${
                      index === currentVideo
                        ? "bg-[var(--mnb-navy)] text-white border-[var(--mnb-navy)]"
                        : "bg-[var(--mnb-light)] text-[var(--mnb-text)] hover:bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <PlayCircle
                        className={
                          index === currentVideo
                            ? "text-[var(--mnb-gold)]"
                            : "text-[var(--mnb-purple)]"
                        }
                      />

                      <div>
                        <h4 className="font-bold">{video.title}</h4>
                        <p
                          className={`text-sm mt-1 ${
                            index === currentVideo
                              ? "text-blue-100"
                              : "text-gray-600"
                          }`}
                        >
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Scroll through the playlist and click any video to play it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="section-title text-3xl">Videos</h2>

            <p className="mt-4 text-gray-600 text-lg leading-8">
              This page is prepared for MNB College video content, including
              school events, chapel services, academic activities, student life,
              sports, culture and facilities.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-5">
              <div className="p-6 rounded-2xl bg-[var(--mnb-light)]">
                <h3 className="font-black text-[var(--mnb-navy)]">
                  Key Information
                </h3>
                <p className="text-gray-600 mt-2">
                  Place your video files inside the public/videos folder and
                  update the video list at the top of this page.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--mnb-light)]">
                <h3 className="font-black text-[var(--mnb-navy)]">
                  Supported Format
                </h3>
                <p className="text-gray-600 mt-2">
                  Use MP4 video files for best browser compatibility.
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
                className="bg-white p-4 rounded-xl flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <GraduationCap className="text-[var(--mnb-purple)]" />
                  Apply Online
                </span>
                <span>→</span>
              </Link>

              <Link
                href="/downloads/prospectus"
                className="bg-white p-4 rounded-xl flex items-center justify-between"
              >
                <span className="flex items-center gap-3">
                  <FileText className="text-[var(--mnb-purple)]" />
                  Prospectus
                </span>
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="bg-white p-4 rounded-xl flex items-center justify-between"
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