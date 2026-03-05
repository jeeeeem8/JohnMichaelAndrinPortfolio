import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const timeline = [
  {
    year: '2024 – 2025',
    title: 'CS BYTE Staff |Media Committee',
    subtitle: 'Community of Students: Bridging Youth and Technology for Evolution',
    description: 'Focused on Web Development, Software Engineering, and UI/UX Design.',
  },
  {
    year: '2025 – 2026',
    title: 'CS BYTE Executive | 4th Year Representative',
    subtitle: 'Community of Students: Bridging Youth and Technology for Evolution',
    description: 'Led student initiatives and represented academic concerns.',
  },
];

export default function Education() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-16 lg:px-28">

      {/* TITLE */}
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 text-black dark:text-white tracking-wide">
          Education & Leadership
        </h1>
      </AnimatedSection>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT COLUMN */}
        <div className="space-y-16">

          {/* EDUCATION CARD */}
          <AnimatedSection>
            <div className="space-y-6">

              <h2 className="text-3xl font-bold text-black dark:text-white border-l-4 border-primary pl-4">
                Education
              </h2>

              <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl space-y-6">

                <div className="w-36 h-36 mx-auto md:mx-0 rounded-2xl overflow-hidden border-4 border-primary">
                  <img
                    src={`${import.meta.env.BASE_URL}meneses.png`}
                    alt="Bulacan State University"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Bulacan State University | Meneses Campus
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    TJS Subdivision, Brgy. Matungao, Bulakan, Bulacan
                  </p>

                  <a
                    href="https://www.facebook.com/BulSUMC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
                  >
                    Visit Page
                  </a>
                </div>

              </div>
            </div>
          </AnimatedSection>

          {/* AWARDS */}
          <AnimatedSection>
            <div className="space-y-6">

              <h2 className="text-3xl font-bold text-black dark:text-white border-l-4 border-primary pl-4">
                Academic Achievements
              </h2>

              <div className="bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20 p-10 rounded-3xl shadow-xl space-y-6">

                {[
                  "Golden Gear Dean's Lister A.Y 2023-2024",
                  "Golden Gear President's Lister A.Y 2024-2025",
                  "Golden Gear Dean's Lister A.Y 2025-2026",
                ].map((award, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:scale-105 transition text-center"
                  >
                    <p className="text-gray-700 text-xl dark:text-gray-300 font-medium">
                      {award}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </AnimatedSection>

        </div>


        {/* RIGHT COLUMN */}
        <div className="space-y-16">

           {/* ORGANIZATION CARD */}
          <AnimatedSection>
            <div className="space-y-6">

              <h2 className="text-3xl font-bold text-black dark:text-white border-l-4 border-primary pl-4">
                Organization
              </h2>

              <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl space-y-6">

                <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary mx-auto md:mx-0">
                  <img
                    src={`${import.meta.env.BASE_URL}csbyte.jpg`}
                    alt="CS BYTE"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-3 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    CS BYTE
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    Community of Students: Bridging Youth and Technology for Evolution
                  </p>

                  <a
                    href="https://www.facebook.com/CSBYTEofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-primary text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
                  >
                    Visit Page
                  </a>

                </div>

              </div>
            </div>
          </AnimatedSection>


          {/* TIMELINE */}
          <AnimatedSection>
            <div className="space-y-6">

              <h2 className="text-3xl font-bold text-black dark:text-white border-l-4 border-primary pl-4">
                Professional Timeline
              </h2><br />

              <div className="relative border-l-4 border-primary pl-8 space-y-10">

                {timeline.map((item, index) => (
                  <div key={index} className="relative">

                    <div className="absolute -left-[14px] top-2 w-6 h-6 bg-primary rounded-full border-4 border-white dark:border-gray-900" />

                    <p className="text-sm text-primary font-semibold">
                      {item.year}
                    </p>

                    <h4 className="text-xl font-bold text-black dark:text-white mt-1">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 dark:text-gray-400 italic text-sm">
                      {item.subtitle}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {item.description}
                    </p>

                  </div>
                ))}

              </div>
            </div>
          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}