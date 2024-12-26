import Container from "@/src/components/UI/Container";
import ProjectDetailCard from "@/src/components/UI/ProjectDetailCard";
import { getSingleProject } from "@/src/services/ProjectService";

type Params = Promise<{ projectId: string }>;

const ProjectDetail = async (params: { params: Params }) => {
  const projectId = (await params.params).projectId;
  const { data: project } = await getSingleProject(projectId);
  return (
    <Container>
      <div className="my-16">
        <ProjectDetailCard project={project} />
      </div>
    </Container>
  );
};

export default ProjectDetail;
