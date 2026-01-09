import Contact from '@/componets/contactus/Contact';
import FeatureSection from '@/componets/feature/FeatureSection';
import Banner from '@/componets/home/Banner';
import Projects from '@/componets/project/Projects';
import Resume from '@/componets/resume/Resume';
import Testimonial from '@/componets/testimonial/Testimonial';

export default function Home() {
  return (
    <div>
      <section id="home" className="min-h-screen">
        <Banner></Banner>
      </section>
      <section id="about" className="min-h-screen">
        <FeatureSection></FeatureSection>
      </section>
      <section id="projects" className="min-h-screen">
        <Projects></Projects>
      </section>
      <section id="skills" className="min-h-screen">
        <Resume></Resume>
      </section>
      <Testimonial></Testimonial>
      <section id="contact" className="min-h-screen">
        <Contact></Contact>
      </section>
    </div>
  );
}
