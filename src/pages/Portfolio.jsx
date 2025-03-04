import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiChevronDown } from 'react-icons/fi';

// Import project images
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

// Project Data Array
const projectList = [
    {
        title: "Ecommerce Digital Products",
        desc: "A full-fledged eCommerce platform to sell digital goods with secure payments.",
        devstack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "https://github.com/i-amManish",
        src: project1,
        type: "Fullstack",
    },
    {
        title: "Interactive E-Learning Platform",
        desc: "An engaging online learning platform with video courses and quizzes.",
        devstack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "https://github.com/i-amManish",
        src: project2,
        type: "Fullstack",
    },
    {
        title: "Portfolio Website",
        desc: "A personal portfolio website to showcase projects and skills.",
        devstack: "MongoDB, Express, React, Node.js",
        link: "#",
        git: "https://github.com/i-amManish",
        src: project3,
        type: "Frontend",
    }
];

const Portfolio = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="text-white py-24 md:py-64" id="portfolio">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-6xl font-bold text-center mb-16">
                    Selected <span className="text-emerald-300">Projects</span>
                </h2>

                {/* Projects List */}
                <div className="space-y-8">
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Project Title Bar */}
                            <div
                                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                                onClick={() => toggleExpand(index)}
                            >
                                <h3 className="text-4xl font-semibold">{project.title}</h3>
                                <div className="flex items-center space-x-4">
                                    <span className="text-3xl font-light text-emerald-300">0{index + 1}</span>
                                    <FiChevronDown
                                        className={`w-6 h-6 transform transition-transform ${
                                            expandedIndex === index ? "rotate-180" : ""
                                        }`}
                                    />
                                </div>
                            </div>

                            {/* Project Details Section */}
                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6 bg-black/20 border border-white/10"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Project Image */}
                                            <img
                                                src={project.src}
                                                alt={project.title}
                                                className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                                            />

                                            {/* Project Info (Description First) */}
                                            <div className="flex-1">
                                                <p className="text-gray-300 mb-4">{project.desc}</p>
                                                <p className="text-emerald-300 font-medium mb-2">
                                                    Stack: {project.devstack}
                                                </p>
                                                <p className="text-emerald-400 font-medium mb-4 capitalize">
                                                    Type: {project.type}
                                                </p>

                                                {/* Links */}
                                                <div className="flex justify-start items-center space-x-4">
                                                    <a
                                                        href={project.link}
                                                        className="text-emerald-400 hover:text-blue-300 transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <HiOutlineExternalLink size={24} />
                                                    </a>
                                                    <a
                                                        href={project.git}
                                                        className="text-emerald-400 hover:text-blue-300 transition-colors"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaGithub size={24} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
