"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Sistem Informasi Apotek (DevOps)",
    description: "Laravel Stisla, Amazon Web Service",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abiyasa05/Sistem_Informasi_Apotek",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "KBMDSI UB Official Website",
    description: "ReactJS, TailwindCSS",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://kbmdsi.ub.ac.id/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "MTQMN UB XVII 2023 Official Website",
    description: "ReactJS, TailwindCSS, Laravel",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://mtqmn17.ub.ac.id/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "WISMA Tour App",
    description: "Java Android, Firebase",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/faridefendi44/WISMA",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-10">
      <h2 className="text-center text-4xl font-bold text-white">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-5">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
