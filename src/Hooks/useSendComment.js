import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const useSendComment = () => {
  const queryClient = useQueryClient();

  const sendpost = async (data) => {
    const res = await axios.post(
      "https://andutiipage.pythonanywhere.com/userfeedback/",
      data
    );

    return res.data;
  };

  const mutation = useMutation(sendpost, {
    onSuccess: (newData) => {
      queryClient.setQueryData("findfeedback", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, newData],
        };
      });
    },
  });

  return mutation;
};

export default useSendComment;
