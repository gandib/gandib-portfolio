import BlogDetailCard from "@/src/components/UI/BlogDetailCard";
import Container from "@/src/components/UI/Container";
import { getSingleBlog } from "@/src/services/BlogService";

type Params = Promise<{ blogId: string }>;

const BlogDetail = async (params: { params: Params }) => {
  const blogId = (await params.params).blogId;
  const { data: blog } = await getSingleBlog(blogId);
  return (
    <Container>
      <div className="my-16">
        <BlogDetailCard blog={blog} />
      </div>
    </Container>
  );
};

export default BlogDetail;
