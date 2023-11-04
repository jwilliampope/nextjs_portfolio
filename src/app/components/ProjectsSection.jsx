"use client"
import React, { useState, useRef } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion"

const projectsData = [
  {
    id: 1,
    title: "True Journey Books",
    description: "Adventure & Exploration",
    image: "/images/projects/tj.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jwilliampope/true-journey",
    previewUrl: "https://jwilliampope.github.io/true-journey/"
  },
  {
    id: 2,
    title: "Bonner Family Archive",
    description: "The Shea Family Comes To America",
    image: "/images/projects/bonner.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jwilliampope/BonnerFamilyArchive",
    previewUrl: "https://jwilliampope.github.io/BonnerFamilyArchive/"
  },
  {
    id: 3,
    title: "Byram Digital Media",
    description: "Web Design & Development",
    image: "/images/projects/bdm.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jwilliampope/ByramDigitalMedia",
    previewUrl: "https://byramdigitalmedia.com/"
  }
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = newTag => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter(project => project.tag.includes(tag))

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">{/*  */}</div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
