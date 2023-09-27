import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useSocialLink = () => {
  const FetchSocial = async () => {
    const res = await axios.get(
      "https://andutiipage.pythonanywhere.com/sociallinks/"
    );
    return res.data;
  };
  return useQuery({ queryKey: ["SocialLink"], queryFn: FetchSocial });
};
export default useSocialLink;
