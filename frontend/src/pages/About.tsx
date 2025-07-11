import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({
    vision: false,
    mission: false,
    problem: false,
    team: false,
    cta: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      name: "Ramadhani Shafii Wanjenja",
      role: "Founder & product manager",
      bio: "Experienced in renewable energy solutions with a passion for sustainable development in Africa.",
      image: "/adminpic.jpg",
    },
    {
      name: "Eliaman Jackson",
      role: "Co-Founder & CEO",
      bio: "Expert in engineering systems with over 10 years of experience in implementing renewable energy projects.",
      image: "/bingo.jpg",
    },
    {
      name: "Team Member 3",
      role: "Communication Manager",
      bio: "Passionate about connecting talent with opportunities and building strong professional communities.",
      image: "/brenda.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col pt-20 overflow-hidden bg-white">
      <Navbar />

      {/* Hero Section with Particles Background */}
      <section className="relative py-32 bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-white overflow-hidden">
        {/* Animated Solar Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-twinkle"></div>
          <div className="absolute inset-0 animate-twinkle-alternate"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-float-slow">
              <h5 className="text-yellow-300 uppercase tracking-wide font-semibold mb-2 drop-shadow-lg">
                CONNECTING PROFESSIONALS
              </h5>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Empowering engineers in Africa
              </h1>
            </div>
            <p className="text-lg text-gray-100 leading-relaxed animate-fade-in">
              JobConnect aims to transform the employment landscape in Africa by creating a digital platform that connects skilled workers with
              meaningful job opportunities across sectors such as construction,
              logistics, manufacturing, and technical services. This platform
              serves as a vital bridge between job seekers, employers, and
              training institutions driving inclusive economic growth, reducing
              unemployment, and empowering local talent through access to
              dignified work and continuous professional development.
            </p>
          </div>
        </div>

        {/* Animated solar rays */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-transparent to-transparent opacity-20 animate-pulse-slow"></div>
      </section>

      {/* Vision & Mission with sun/moon theme */}
      <section className="py-24 relative bg-white text-gray-800">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-green-500 to-transparent"></div>

        {/* Animated Sun & Moon */}
        <div className="absolute right-10 top-24 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-500 blur-sm animate-pulse-slow hidden md:block"></div>
        <div className="absolute left-10 bottom-24 w-32 h-32 rounded-full bg-gradient-to-br from-blue-200 to-blue-500 blur-sm animate-float-slow hidden md:block"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">
            <div
              id="vision"
              className="animate-section transform transition duration-1000"
              style={{
                opacity: isVisible.vision ? 1 : 0,
                transform: isVisible.vision
                  ? "translateY(0)"
                  : "translateY(50px)",
              }}
            >
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg shadow-green-500/20 text-white">
                <div className="flex items-center mb-6">
                  <div className="mr-4 text-4xl text-yellow-400">✨</div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  To create a sustainable future where access to clean energy is
                  available to all communities in Africa, driven by a network of
                  skilled and passionate professionals.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We envision a continent where renewable energy solutions are
                  the norm, not the exception, and where skilled engineers have
                  ample opportunities to contribute to this transformation.
                </p>
              </div>
            </div>

            <div
              id="mission"
              className="animate-section transform transition duration-1000 delay-300"
              style={{
                opacity: isVisible.mission ? 1 : 0,
                transform: isVisible.mission
                  ? "translateY(0)"
                  : "translateY(50px)",
              }}
            >
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg shadow-green-500/20 text-white">
                <div className="flex items-center mb-6">
                  <div className="mr-4 text-4xl text-green-400">🌱</div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  To bring and promote the use of clean and sustainable energy
                  in Tanzania and Africa at large by harnessing green energy
                  from the sun and discouraging non-friendly sources of energy
                  that pollute our environment by creating awareness in the
                  community.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We accomplish this by connecting skilled professionals with
                  projects that make a difference, while providing resources and
                  support to ensure successful outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement - Magical Forest & Energy Theme */}
      <section className="py-24 relative bg-white text-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/tree-bark.png')] opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 drop-shadow-lg">
            The Challenge We're Addressing
          </h2>

          <div
            id="problem"
            className="max-w-4xl mx-auto animate-section transform transition duration-1000"
            style={{
              opacity: isVisible.problem ? 1 : 0,
              transform: isVisible.problem
                ? "translateY(0)"
                : "translateY(50px)",
            }}
          >
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              In Tanzania and across Africa, thousands of engineers graduate
              yearly, yet <b>over 61%</b> end up in non-engineering jobs due to
              limited access to industry opportunities, lack of structured
              networking platforms, and weak job markets. At the same time,
              businesses and households struggle to find verified, skilled
              engineers for services like solar installations, electrical
              wiring, and smart energy solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg shadow-green-500/20 text-white transform transition hover:scale-105 duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-3xl">👨‍👩‍👧‍👦</div>
                  <h3 className="text-xl font-bold">Who is affected?</h3>
                </div>
                <p className="text-gray-300">
                  Engineers & technicians struggling to find relevant work.
                  Businesses, organizations, and households lacking access to
                  skilled engineering services.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg shadow-green-500/20 text-white transform transition hover:scale-105 duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-3xl">❓</div>
                  <h3 className="text-xl font-bold">What is the problem?</h3>
                </div>
                <p className="text-gray-300">
                  Lack of a centralized system to connect skilled engineers with
                  job opportunities.
                  <br />
                  <b>Businesses and clients</b>face difficulty in finding
                  verified engineers for projects.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg shadow-green-500/20 text-white transform transition hover:scale-105 duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-3xl">⚠️</div>
                  <h3 className="text-xl font-bold">Why is this a problem?</h3>
                </div>
                <p className="text-gray-300">
                  Engineers remain unemployed <br />{" "}
                  <b>Businesses and households</b> struggle with unreliable
                  engineering services
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-lg shadow-green-500/20 text-white transform transition hover:scale-105 duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-3 text-3xl">🔍</div>
                  <h3 className="text-xl font-bold">How does this manifest?</h3>
                </div>
                <p className="text-gray-300">
                  <b>Engineers</b> working in unrelated fields despite their
                  technical skills.
                  <br />
                  <b>Clients</b> wasting time and money searching for reliable
                  engineers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team with Magical Feel */}
      <section className="py-24 relative bg-white text-gray-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-lg text-gray-900">
            Meet Our Team
          </h2>

          <div
            id="team"
            className="grid md:grid-cols-3 gap-12 animate-section transform transition duration-1000"
            style={{
              opacity: isVisible.team ? 1 : 0,
              transform: isVisible.team ? "translateY(0)" : "translateY(50px)",
            }}
          >
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center transform transition hover:scale-105 duration-300"
              >
                <div className="relative mb-8 mx-auto">
                  <div className="w-48 h-48 rounded-full mx-auto bg-gradient-to-br from-green-400 to-green-600 p-1 shadow-lg shadow-green-500/20">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/150";
                        }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg animate-pulse-slow">
                    {index === 0 ? "👑" : index === 1 ? "🔧" : "🌐"}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-600 mb-4 font-medium">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA with Magical Elements */}
      <section className="py-20 relative bg-white text-gray-800 overflow-hidden">
        <div className="absolute inset-0 animate-fireflies"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            id="cta"
            className="animate-section transform transition duration-1000"
            style={{
              opacity: isVisible.cta ? 1 : 0,
              transform: isVisible.cta ? "translateY(0)" : "translateY(50px)",
            }}
          >
            <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-gray-900">
              Join Our Mission
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-lg text-gray-600">
              Whether you're an engineer looking for meaningful work or a client
              seeking sustainable solutions, we invite you to be part of our
              journey.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-br from-green-600 to-green-700 text-white font-medium rounded-full hover:bg-yellow-100 hover:text-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/40 animate-bounce-slow"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
