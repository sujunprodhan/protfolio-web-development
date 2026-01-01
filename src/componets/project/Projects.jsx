import React from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="w-full py-20 ">
      <div>
        <div>
          <h1 className="text-xl flex justify-center items-center">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h1>
          <h2 className="text-5xl font-bold flex justify-center items-center">My Project</h2>
        </div>
        {/* Project Section */}
        <section className="grid grid-cols-3 gap-5">
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
            image={<Image src="/projectThree.jpeg" alt="projectone" width={700} height={200} cl />}
            title="Mongodb Project"
            discretion="MongoDB based project with efficient schema design, CRUD operations, data validation, aggregation pipelines, and scalable database management for applications.
"
          />
          <ProjectCard
            image={<Image src="/projectTwo.jpg" alt="projectone" width={700} height={200} />}
            title="Node Js Project"
            discretion="Node.js backend project with RESTful APIs, authentication, middleware, database integration, and scalable server side logic for modern applications.
"
          />
          <ProjectCard
            image={
              <Image
                src="/projectOne.jpg"
                alt="projectone"
                width={700}
                height={200}
              />
            }
            title="Firebase Auth"
            discretion="Firebase authentication system with email and social login, secure user management, role based access, real time updates, and scalable integration.
"
          />
        </section>
      </div>
    </section>
  );
};

export default Projects;


{/* <ProjectCard
  image={<Image src={'/images/projects/projectOne.jpg'} alt="logo" width={100} height={100} />}
  title="My Project"
  social={<FaLinkedinIn size={24} className="hover:text-[#FF014F] " />}
  discretion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
/>; */}

{/* <div className="border">
            <ProjectCard
              image={
                <Image
                  src={'/images/projects/projectOne.jpg'}
                  alt="logo"
                  width={100}
                  height={100}
                />
              }
              title="My Project"
              social={<FaLinkedinIn size={24} className="hover:text-[#FF014F] " />}
              discretion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            />
          </div>
          <div className="border">
            <ProjectCard
              image={
                <Image
                  src={'/images/projects/projectOne.jpg'}
                  alt="logo"
                  width={100}
                  height={100}
                />
              }
              title="My Project"
              social={<FaLinkedinIn size={24} className="hover:text-[#FF014F] " />}
              discretion="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            />
          </div> */}