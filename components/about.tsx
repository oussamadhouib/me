"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import bioData from "@/data/bio.json";

export default function About() {
  const { language, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const bio = bioData[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-gray-400">{t.about.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
                <Image
                  src="/me.jpeg?height=320&width=320"
                  alt={bio.name}
                  width={320}
                  height={320}
                  className="relative z-10 rounded-full object-cover border-4 border-gray-700"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">{bio.name}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">{bio.bio}</p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-blue-400 font-semibold mb-2">
                    Experience
                  </h4>
                  <p className="text-white">{bio.experience}</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-purple-400 font-semibold mb-2">
                    Location
                  </h4>
                  <p className="text-white">{bio.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
