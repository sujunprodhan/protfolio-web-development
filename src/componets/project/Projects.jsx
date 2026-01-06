import React from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="w-full py-20 ">
      <div>
        <div className="space-y-3">
          <h1 className="text-xl font-semibold text-[#FF014F] flex justify-center items-center">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h1>
          <h2 className="text-5xl font-bold text-gray-100 flex justify-center items-center">My Project</h2>
        </div>
        {/* Project Section */}
        <section className="grid grid-cols-3 gap-5 mt-10">
          <ProjectCard
            image={<Image src="/projectOne.jpg" alt="projectone" width={700} height={200} />}
            title="Full-stack Project"
            discretion="Modern full-stack web application with secure authentication, responsive UI, REST APIs, database integration, performance optimization, and real-world problem solving experience."
          />

          <ProjectCard
            image={<Image src="/projectTwo.jpg" alt="projectone" width={700} height={200} />}
            title="React Project"
            discretion="Interactive React application with reusable components, responsive design, state management, API integration, and smooth user experience for modern web interfaces.
"
          />
          <ProjectCard
            image={<Image src="/projectThree.jpeg" alt="projectone" width={700} height={200} />}
            title="Next.js Project"
            discretion="High performance Next.js application featuring server side rendering, dynamic routing, API integration, SEO optimization, responsive design, and scalable architecture practices.
"
          />
          <ProjectCard
            image={
              <Image
                src="/projectThree.jpeg"
                alt="MongoDB Project Screenshot"
                width={700}
                height={200}
                className="w-full h-auto" 
              />
            }
            title="Mongodb Project"
            description="MongoDB based project with efficient schema design, CRUD operations, data validation, aggregation pipelines, and scalable database management for applications."
          />
          <ProjectCard
            image={
              <Image
                src="/projectThree.jpeg"
                alt="MongoDB Project Screenshot"
                width={700}
                height={200}
                className="w-full h-auto" 
              />
            }
            title="Mongodb Project"
            description="MongoDB based project with efficient schema design, CRUD operations, data validation, aggregation pipelines, and scalable database management for applications."
          />
          <ProjectCard
            image={
              <Image
                src="/projectThree.jpeg"
                alt="MongoDB Project Screenshot"
                width={700}
                height={200}
                className="w-full h-auto"
              />
            }
            title="Mongodb Project"
            description="MongoDB based project with efficient schema design, CRUD operations, data validation, aggregation pipelines, and scalable database management for applications."
          />
        </section>
      </div>
    </section>
  );
};

export default Projects;
