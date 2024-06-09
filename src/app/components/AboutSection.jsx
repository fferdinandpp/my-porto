// src/app/components/AboutSection.jsx
"use client";
import React from 'react';
import Image from 'next/image';
import ReadMore from '../../components/ReadMore.jsx';

const AboutSection = () => {
  const aboutText = `I am a passionate full stack web developer with a flair for creating interactive and responsive web applications. My technical expertise includes Python, PHP, JavaScript, React, Laravel, Node.js, HTML, CSS, and Git, all of which I leverage to build seamless digital experiences. As a Computer Science student at Brawijaya University, I specialize in both website and mobile development. I have a strong foundation in UI/UX design and robust leadership and communication abilities, developed through active participation in various activities and organizations. Additionally, I am skilled in container management and orchestration using Docker and Kubernetes, with a focus on DevOps practices to enhance development processes and operational efficiency. My dedication to continuous learning drives my pursuit of excellence and innovation in every project I undertake.`;

  return (
    <section className="text-white py-16" id="about">
      <div className="lg:grid lg:grid-cols-2 gap-8 items-center md:px-5 xl:gap-16 xl:px-16">
        <Image alt="about-image" src="/images/about-image.png" width={500} height={500} className="mx-auto" />
        <div className="mt-4 md:mt-0 lg:text-left text-center flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-3">About Me</h2>
          <ReadMore maxWordCount={50}>{aboutText}</ReadMore>
          <p className="text-base lg:text-lg hidden md:block">
          I am a passionate full stack web developer with a flair for creating interactive and responsive web applications. My technical expertise includes HTML, CSS, Python, PHP, JavaScript, React, NextJS, TailwindCSS, Laravel, Node.js, and Git, all of which I leverage to build seamless digital experiences. As a Computer Science student at Brawijaya University, I specialize in both website and mobile development. I have a strong foundation in UI/UX design and robust leadership and communication abilities, developed through active participation in various activities and organizations. Additionally, I am skilled in container management and orchestration using Docker and Kubernetes, with a focus on DevOps practices to enhance development processes and operational efficiency. My dedication to continuous learning drives my pursuit of excellence and innovation in every project I undertake.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
