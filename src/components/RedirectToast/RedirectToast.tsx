import { useEffect } from "react";

import { usePathname } from "next/navigation";

import { deleteCooke, getCookie } from "@/actions/cookies";

import { useToastContext } from "../Shared/Toast/context";

function RedirectToast() {
  const pathName = usePathname();
  const toast = useToastContext();

  useEffect(() => {
    const showToastMessage = async () => {
      const toastMessage = await getCookie("toast");
      if (toastMessage) {
        toast.success(toastMessage);
        deleteCooke("toast");
      }
      const erroMessage = await getCookie("toastError");
      if (erroMessage) {
        toast.error(erroMessage);
        deleteCooke("toastError");
      }
    };
    showToastMessage();
  }, [pathName, toast]);

  return null;
}

export default RedirectToast;
