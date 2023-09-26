import { useQuery } from "@tanstack/react-query";
const useAbout = () => {
  const FetchAbout = async () => {
    const res = await fetch("https://andutiipage.pythonanywhere.com/about/");
    return res.json();
  };
  return useQuery({ queryKey: ["About"], queryFn: FetchAbout });
};
export default useAbout;
