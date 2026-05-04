import React, { useState } from 'react';
import {  Code2,FileCode2,Terminal, Globe,Database, Cpu,Shield,FileJson, Menu, X, Github, Linkedin, Mail,Download, ExternalLink,   GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';


function App() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    { name: 'C++', icon: <Cpu className="w-8 h-8" /> },
    { name: 'JavaScript', icon: <FileCode2 className="w-8 h-8" /> },
    { name: 'C', icon: <Terminal className="w-8 h-8" /> },
    { name: 'Java', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Python', icon: <FileJson className="w-8 h-8" /> },
    { name: 'Django', icon: <Code2 className="w-8 h-8" /> },
       { name: 'PHP', icon: <Globe className="w-8 h-8" /> },
    { name: 'HTML & CSS', icon: <Globe className="w-8 h-8" /> },
    { name: 'Bootstrap', icon: <Shield className="w-8 h-8" /> },
    { name: 'Node.js', icon: <Terminal className="w-8 h-8" /> },
    { name: 'React.js', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Next.js', icon: <Code2 className="w-8 h-8" /> },
    { name: 'Expressjs', icon: <Code2 className="w-8 h-8" /> },
    { name: 'GitHub', icon: <Github className="w-8 h-8" /> },
    { name: 'MySQL', icon: <Database className="w-8 h-8" /> },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" /> },
    
  ];
  
  

  const projects = [
    {
      title: "BlogSpace",
      description: "Developed using MERN stack, a website where you can post blog and also review others blog",
      duration: 'June 2025 - July 2025',
      link: "https://blog-space-hs2r.vercel.app/",
      image: "https://i.postimg.cc/bryf9yJb/Screenshot-14.png", 
    },
    {
      title: 'LinkShrinker',
      description: 'Developed a fully functional url shortner website where you can short any url and save it. You can also see the stats of yours ',
      duration: 'Sept 2024 - Nov 2024',
      link: 'https://url-shortner-tbbc.vercel.app/',
      image: "https://i.postimg.cc/VvcfV0sP/Screenshot-16.png",

     
    },
    {
      title: 'Neighbour Match',
      description: 'Developed using MERN stack, where you can find your neighbour of our choise and find a home of your price range',
      duration: 'Feb 2024 - May 2024',
      link: 'https://neighbourmatch.vercel.app/',
      image: "https://i.postimg.cc/nL7XzJP2/Screenshot-15.png", 
    },
     
  ];
  
  const education = [
   
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      duration: "2022 - 2026",
      description: "Major in Full Stack Web Development"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Dr. Radhakrishnan",
      duration: "2019 - 2021",
      description: "Physics, Chemistry, Maths, Computer Science"
    },
    {
      degree: "Secondary Education",
      institution: "Vivekananda Kendra Vidyalaya",
      duration: "2011 - 2019",
      description: ""
    },
  ];
  

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed w-full bg-black shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">Portfolio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={() => window.open('https://drive.google.com/file/d/1ao-fbPp-kx5Vmsv8KFM1tZSIvd3E7067/view?usp=sharing')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center"
                onClick={() => window.open('https://drive.google.com/file/d/16LdIsJ2ysTV37kanZ0UToEYoeIJxZYQi/view?usp=sharing')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
  id="home"
  className="relative min-h-screen pt-20 md:pt-32 pb-20 flex items-center overflow-hidden"
>
  <div className="absolute inset-0 bg-[url('/462c6f5f67c13830cd9fcdbfc7b55ded.gif')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black opacity-75"></div>
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="block">Hi, I'm Krishna Pradhan</span>
        <span className="block text-blue-400">Full Stack Developer</span>
      </motion.h1>

      <motion.p
        className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Building beautiful and functional web applications with modern technologies.
      </motion.p>

      <motion.div
        className="mt-5 max-w-md mx-auto flex justify-center space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Contact Me
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://github.com/Krishney21?tab=repositories')}
          className="inline-flex items-center px-6 py-3 border border-blue-400 text-base font-medium rounded-md text-blue-400 bg-transparent hover:bg-blue-900 hover:bg-opacity-50"
        >
          View Projects
        </motion.button>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-white text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="max-w-3xl mx-auto text-lg text-gray-300 flex flex-col items-center gap-6">
          <motion.div
            className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <img
              src="/WhatsApp Image 2025-04-15 at 18.41.57.jpeg"
              alt="Krishna Pradhan"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.p
            className="mb-4 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi, I'm Krishna Pradhan, a B.Tech Computer Science student with a
            passion for Full Stack Web Development. I enjoy building scalable
            web applications with clean, efficient code and intuitive user
            experiences.
          </motion.p>

          <motion.p
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            When I'm not coding, you can find me contributing to open-source
            projects, or learning new technologies – Feel free to reach out!
          </motion.p>
        </div>
      </div>
    </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-6 rounded-lg shadow-glow"
              >
                <div className="flex items-start">
                  <GraduationCap className="w-8 h-8 text-blue-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400 mt-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.duration}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gray-900 p-6 rounded-lg shadow-glow text-center group cursor-pointer"
              >
                <div className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.icon}
                </div>
                <span className="text-xl text-gray-100 group-hover:text-white text-style: bold transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-900 p-6 rounded-lg shadow-glow cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300"
              >
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <p className="mt-2 text-gray-300">{project.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-8">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-lg font-semibold text-white">Complete Interview Preparation - Self-Paced DSA</h3>
              <p className="mt-2 text-gray-300">GeeksForGeeks</p>
              <p className="text-sm text-blue-400">March 2024 – July 2024</p>
              
             
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-900 p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-lg font-semibold text-white">Cloud Computing</h3>
              <p className="mt-2 text-gray-300">NPTEL</p>
              <p className="text-sm text-blue-400">July 2024 – August 2024</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-900 p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-lg font-semibold text-white">Full Stack with Java</h3>
              <p className="mt-2 text-gray-300">IBM</p>
              <p className="text-sm text-blue-400">June 2024 – July 2024</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-900 p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-lg font-semibold text-white">Web Development</h3>
              <p className="mt-2 text-gray-300">DevTown</p>
              <p className="text-sm text-blue-400">Sept 2022 – Dec 2022</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-900 p-6 rounded-lg shadow-glow"
            >
              <h3 className="text-lg font-semibold text-white">Backend Web Development</h3>
              <p className="mt-2 text-gray-300">Coursera</p>
              <p className="text-sm text-blue-400">Sept 2022 – Dec 2022</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
<section id="achievements" className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-white text-center mb-8">Achievements</h2>
    <div className="space-y-6">
      
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-6 rounded-lg shadow-glow"
      >
        <h3 className="text-lg font-semibold text-white">Assistant Sports Secretary - ASUJ</h3>
        <p className="text-sm text-blue-400 mb-2">April 2024 – April 2025</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-6 rounded-lg shadow-glow"
      >
        <h3 className="text-lg font-semibold text-white"> Became the overall champions of Northeast Sports Organisation Jalandhar (NESOJ)</h3>
        <p className="text-sm text-blue-400 mb-2">April 2023 – April 2025</p>
        <div className="mt-2 text-gray-300 space-y-4">
           
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 p-6 rounded-lg shadow-glow"
      >
        <h3 className="text-lg font-semibold text-white"> Took part in Smart India Hackathon (SIH) 2024.   </h3>
      
        <div className="mt-2 text-gray-300 space-y-4">
           
        </div>
      </motion.div>

    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white text-center mb-8">Contact Me</h2>
          <div className="max-w-lg mx-auto">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/Krishna-77777" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/krishna-pradhan-750203254/" className="text-gray-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:pradhankrishna119@gmail.com" className="text-gray-400 hover:text-white">
               
                <Mail className="w-6 h-6" />  
              
              </a>
             
 
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-900 border-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
