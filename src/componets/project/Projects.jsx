'use client';

import ProjectCard from './ProjectCard';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="w-full py-30 px-5 sm:px-8 md:px-0">
      <div className="space-y-3 text-center">
        <h1 className="text-xl font-semibold text-[#FF014F]">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h1>
        <h2 className="text-5xl font-bold text-gray-100">My Project</h2>
      </div>

      <section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <ProjectCard
          image={<Image src="/cat-shop.webp" alt="project1" width={700} height={200} />}
          title="Full-stack Project"
          discretion="Modern full-stack web application with secure authentication, responsive UI, REST APIs, database integration, performance optimization, and real-world problem solving experience."
          githubLink="https://github.com/sujunprodhan"
          liveLink="https://cat-shop-beta.vercel.app/"
        />
        <ProjectCard
          image={
            <Image src="/realestate-property-nextjs.webp" alt="project2" width={700} height={200} />
          }
          title="React Project"
          discretion="Interactive React application with reusable components, responsive design, state management, API integration, and smooth user experience."
          githubLink="https://github.com/sujunprodhan"
          liveLink="https://real-estate-property-orpin.vercel.app/"
        />
        <ProjectCard
          image={<Image src="/project5.webp" alt="project5" width={700} height={200} />}
          title="Next.js Project"
          discretion="High performance Next.js application featuring server side rendering, dynamic routing, API integration, SEO optimization, responsive design, and scalable architecture practices."
          githubLink="https://github.com/sujunprodhan"
          liveLink="https://nextjs-project.vercel.app/"
        />
        <ProjectCard
          image={<Image src="/project4.webp" alt="project4" width={700} height={200} />}
          title="MongoDB Project 1"
          discretion="MongoDB based project with efficient schema design, CRUD operations, data validation, aggregation pipelines, and scalable database management."
          githubLink="https://github.com/sujunprodhan"
          liveLink="https://mongodb-project-1.vercel.app/"
        />
        <ProjectCard
          image={<Image src="/project6.webp" alt="project6" width={700} height={200} />}
          title="MongoDB Project 2"
          discretion="MongoDB based project with efficient schema design, CRUD operations, data validation, aggregation pipelines, and scalable database management."
          githubLink="https://github.com/sujunprodhan"
          liveLink="https://mongodb-project-2.vercel.app/"
        />
        <ProjectCard
          image={<Image src="/project3.webp" alt="projectThree" width={700} height={200} />}
          title="MongoDB Project 3"
          discretion="MongoDB based project with efficient schema design, CRUD operations, data validation, aggregation pipelines, and scalable database management."
          githubLink="https://github.com/sujunprodhan"
          liveLink="https://mongodb-project-3.vercel.app/"
        />
      </section>
    </section>
  );
};

export default Projects;
