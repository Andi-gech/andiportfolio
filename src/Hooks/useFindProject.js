import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useFindProject = () => {
  const FechProject = async () => {
    const res = await axios.get(
      "https://andutiipage.pythonanywhere.com/projects/"
    );
    return res.data;
  };
  return useQuery({ queryKey: ["findProject"], queryFn: FechProject });
};
export default useFindProject;
