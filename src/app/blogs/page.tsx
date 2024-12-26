import BlogPageDisplayCard from "@/src/components/UI/BlogPageDisplayCard";
import Container from "@/src/components/UI/Container";
import { getAllBlogs } from "@/src/services/BlogService";

const Blogs = async () => {
  const { data: allBlogs } = await getAllBlogs([
    { name: "limit", value: 10 },
    { name: "sort", value: "-createdAt" },
  ]);

  return (
    <Container>
      <BlogPageDisplayCard blogs={allBlogs} />
    </Container>
  );
};

export default Blogs;
