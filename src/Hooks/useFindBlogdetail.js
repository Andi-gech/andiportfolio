import { useQuery } from "@tanstack/react-query";

export default function useFindBlogdetail(id) {
  const FechblogDetail = async () => {
    const res = await fetch(
      `http://andutiipage.pythonanywhere.com/blog/${id}/`
    );
    return res.json();
  };
  return useQuery({
    queryKey: ["finblogdetail", id],
    queryFn: FechblogDetail,
    enabled: !!id,
  });
}
