import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFindBlogdetail(id) {
  const FechblogDetail = async () => {
    const res = await axios.get(
      `https://andutiipage.pythonanywhere.com/blog/${id}/`
    );
    return res.data;
  };
  return useQuery({
    queryKey: ["finblogdetail", id],
    queryFn: FechblogDetail,
    enabled: !!id,
  });
}
