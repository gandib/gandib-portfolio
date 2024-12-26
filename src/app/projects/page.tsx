import Container from "@/src/components/UI/Container";
import ProjectPageDispalyCard from "@/src/components/UI/ProjectPageDisplayCard";
import { getAllProjects } from "@/src/services/ProjectService";

export default async function ProjectsPage() {
  const { data: allProjects } = await getAllProjects([
    { name: "limit", value: 10 },
    { name: "sort", value: "-createdAt" },
  ]);
  return (
    <Container>
      <ProjectPageDispalyCard projects={allProjects} />
    </Container>
  );
}
