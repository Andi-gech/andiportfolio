import { useQuery } from "@tanstack/react-query";
const useUserFeedback = () => {
  const userfeedback = async () => {
    const res = await fetch(
      "http://andutiipage.pythonanywhere.com/userfeedback/"
    );
    return res.json();
  };
  return useQuery({ queryKey: ["findfeedback"], queryFn: userfeedback });
};
export default useUserFeedback;
