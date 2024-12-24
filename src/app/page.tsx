import Project from "../components/UI/Project";
import Container from "../components/UI/Container";
import Designation from "../components/UI/Designation";
import EducationExperience from "../components/UI/EducationExperience";
import Skills from "../components/UI/Skills";
import Blog from "../components/UI/Blog";
import Contact from "../components/UI/Contact";
import Footer from "../components/UI/Footer";

export default function Home() {
  return (
    <Container>
      <Designation />
      <EducationExperience />
      <Skills />
      <Project />
      <Blog />
      <Contact />
      {/* <Footer /> */}
    </Container>
  );
}
