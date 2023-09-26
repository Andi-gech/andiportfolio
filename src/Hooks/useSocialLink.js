import { useQuery } from "@tanstack/react-query";
const useSocialLink = () => {
  const FetchSocial = async () => {
    const res = await fetch(
      "https://andutiipage.pythonanywhere.com/sociallinks/"
    );
    return res.json();
  };
  return useQuery({ queryKey: ["SocialLink"], queryFn: FetchSocial });
};
export default useSocialLink;
