import { useQuery } from "@tanstack/react-query";
const useFinblog = () => {
  const Fechblog = async () => {
    const res = await fetch("https://andutiipage.pythonanywhere.com/blog/");
    return res.json();
  };
  return useQuery({ queryKey: ["finblog"], queryFn: Fechblog });
};
export default useFinblog;
