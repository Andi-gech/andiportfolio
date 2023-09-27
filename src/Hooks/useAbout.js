import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useAbout = () => {
  const FetchAbout = async () => {
    const res = await axios.get(
      "https://andutiipage.pythonanywhere.com/about/"
    );
    return res.data;
  };
  return useQuery({ queryKey: ["About"], queryFn: FetchAbout });
};
export default useAbout;
