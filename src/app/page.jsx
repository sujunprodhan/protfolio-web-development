import FeatureSection from "@/componets/feature/FeatureSection";
import Banner from "@/componets/home/Banner";
import Projects from "@/componets/project/Projects";

export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <FeatureSection></FeatureSection>
     <Projects></Projects>
    </div>
  );
}
