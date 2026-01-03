import AnnouncementMarquee from "./components/home/AnnouncementMarquee";
import HeroSection from './components/home/HeroSection';
import StandardCurriculum from "./components/home/StandardCurriculum";

export default function Home() {
  return (
    <div >
      <main >
         <AnnouncementMarquee />
          <HeroSection />
          < StandardCurriculum />
      </main>
    </div>
  );
}
