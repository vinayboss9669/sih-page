/**
Animated Developer Team Cards with Leader Highlight

This single-file React component shows a colorful, animated team/developer page with:
- Profile image
- Name, role, short bio
- Special highlighted card for Team Leader
- Six total cards
- Colorful gradient card with hover/focus animations (Framer Motion)
- Accessible markup and simple responsive grid
*/

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Star, Sun, Moon } from "lucide-react";

const members = [
  {
    name: "Harsh Yadav",
    role: "Team Leader / Backend Engineer",
    backend: "Backend Engineer",
    bio: "Guiding the team with vision and ensuring smooth collaboration.",
    image: "https://avatars.githubusercontent.com/u/161936085?v=4",
    accent: "from-yellow-400 to-orange-500",
    leader: true
  },
  {
    name: "Vinay Kumar",
    role: "Frontend Developer",
    bio: "Building reliable APIs and delightful React experiences.",
    image: "https://avatars.githubusercontent.com/u/196925653?v=4",
    accent: "from-pink-500 to-yellow-400"
  },
  {
    name: "Mohd Asif",
    role: "Security and Debugging",
    bio: "Ensuring secure and bug-free applications.",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/491869349_1218193462952023_7646035471267809036_n.jpg?ccb=11-4&oh=01_Q5Aa2gG85RlvqxTr9u2OOSgatPL7pHxsT6k0ZaUBoyUXPoW6IQ&oe=68DEA348&_nc_sid=5e03e0&_nc_cat=110",
    accent: "from-indigo-500 to-purple-500"
  },
  {
    name: "Bhaskar",
    role: "Supporting Member",
    bio: "Supporting across different project areas to ensure smooth deployment and collaboration.",
    image: "https://avatars.githubusercontent.com/u/190239302?v=4",
    accent: "from-cyan-400 to-blue-600"
  },
  {
    name: "chandrbhan",
    role: "Supporting the Frontend Developer",
    bio: "Collaborating closely with the frontend team to enhance UI functionality and deliver seamless user experiences.",
    image: "https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/520047871_1839690233283226_5191445038805258052_n.jpg?ccb=11-4&oh=01_Q5Aa2gG_Z37GSa85T3uzy6flNsz68zXmDn8YpYUqpEs5MQhC1w&oe=68DEB95C&_nc_sid=5e03e0&_nc_cat=111",
    accent: "from-emerald-400 to-teal-600"
  },
  {
    name: "Bhoomika Gautam",
    role: "Model Designer",
    bio: "Crafting responsive layouts and smooth user interactions.",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEuuGskm8lljg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1728751021924?e=1761177600&v=beta&t=92SZ4SiipSfZUhTSmNqqjbHU4t_QcMaLSx2YXkC1lz0",
    accent: "from-orange-400 to-red-500"
  }
];

export default function TeamCards() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <section className={`min-h-screen py-12 px-6 transition-all duration-500 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <header className="mb-6 text-center">
            <h2 className={`text-2xl font-semibold sm:text-3xl transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Smart India Hackathon (SIH)</h2>
            <h3 className={`text-3xl font-extrabold sm:text-4xl mt-1 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-900'}`}>The Rumbling Code</h3>
            <p className={`mt-1 transition-colors duration-300 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>People who build, design, and run our product.</p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((m, idx) => (
              <motion.article
                key={m.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, type: "spring", stiffness: 120 }}
                whileHover={{ scale: 1.03 }}
                className={`relative overflow-hidden rounded-2xl border border-transparent shadow-lg focus-within:shadow-xl bg-gradient-to-br ${m.accent} p-4 ${m.leader ? 'lg:col-span-3 sm:col-span-2 ring-4 ring-yellow-300 shadow-2xl' : ''}`}
              >
                <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" aria-hidden></div>

                <div className={`relative z-10 flex flex-col items-center text-left gap-4 p-6 ${m.leader ? 'lg:flex-row lg:items-center' : ''}`}> 
                  <div className={`rounded-full overflow-hidden shadow-md bg-white ${m.leader ? 'w-36 h-36 ring-4 ring-yellow-400' : 'w-28 h-28 ring-4 ring-white/60'}`}> 
                    <img src={m.image} alt={`${m.name} — ${m.role}`} className="w-full h-full object-cover" />
                  </div>

                  <div className={`${m.leader ? 'lg:ml-6' : ''}`}> 
                    <h3 className={`font-semibold drop-shadow-sm ${m.leader ? 'text-3xl text-white' : 'text-lg text-white'}`}>{m.name}</h3>
                    {m.leader && <span className="text-sm text-white/80 block">{m.backend}</span>}
                    {m.leader && <Star className="text-yellow-200 mt-1" size={24} />} 
                    <p className={`font-medium ${m.leader ? 'text-lg text-white/90 mt-1' : 'text-sm text-white/90'}`}>{m.role}</p>
                    <p className={`mt-2 ${m.leader ? 'text-base' : 'text-sm'} text-white/95 max-w-xl`}>{m.bio}</p>

                    <div className="mt-3 flex items-center gap-3">
                      <a href="#" aria-label={`GitHub - ${m.name}`} className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/40">
                        <Github size={16} />
                      </a>
                      <a href="#" aria-label={`LinkedIn - ${m.name}`} className="rounded-full bg-white/20 p-2 backdrop-blur-sm hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/40">
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Theme Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full backdrop-blur-md border transition-all duration-300 shadow-xl ${
          darkMode 
            ? 'bg-white/10 border-white/20 hover:bg-white/20' 
            : 'bg-black/10 border-black/20 hover:bg-black/20'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <motion.div
          initial={false}
          animate={{ rotate: darkMode ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-400" />
          ) : (
            <Moon className="w-6 h-6 text-blue-600" />
          )}
        </motion.div>
      </motion.button>
    </>
  );
}
