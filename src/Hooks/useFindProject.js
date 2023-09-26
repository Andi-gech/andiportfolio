import { useQuery } from "@tanstack/react-query";
const useFindProject = () => {
  const FechProject = async () => {
    const res = await fetch("http://andutiipage.pythonanywhere.com/projects/");
    return res.json();
  };
  return useQuery({ queryKey: ["findProject"], queryFn: FechProject });
};
export default useFindProject;
