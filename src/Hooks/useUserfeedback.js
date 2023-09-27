import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useUserFeedback = () => {
  const userfeedback = async () => {
    const res = await axios.get(
      "https://andutiipage.pythonanywhere.com/userfeedback/"
    );
    return res.data;
  };
  return useQuery({ queryKey: ["findfeedback"], queryFn: userfeedback });
};
export default useUserFeedback;
