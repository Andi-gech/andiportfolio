import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useFinblog = () => {
  const Fechblog = async () => {
    const res = await axios.get("https://andutiipage.pythonanywhere.com/blog/");
    return res.data;
  };
  return useQuery({ queryKey: ["finblog"], queryFn: Fechblog });
};
export default useFinblog;
