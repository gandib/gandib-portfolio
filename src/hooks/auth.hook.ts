import { useMutation } from "@tanstack/react-query";
import { contactMe } from "../services/AuthService";
import { toast } from "sonner";

export const useContactMe = () => {
  return useMutation<any, Error, any>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await contactMe(userData),
    onSuccess(data, variables, context) {
      toast.success(data.message);
    },
    onError(error, variables, context) {
      toast.error(error.message);
    },
  });
};
