import { useEffect } from "react";
import { toast } from "react-hot-toast";
import swal from "sweetalert";

export default function useNotification(
  status,
  successMessage = "Petición exitosa",
  loadingMessage = "Cargando...",
  onConfirm = () => {}
) {
  useEffect(() => {
    if (status.isLoading || status.isFetching) {
      toast.loading(loadingMessage);
    }
    if (status.isSuccess) {
      swal("Listo!", successMessage, "success").then((confirm) => {
        if (confirm) {
          onConfirm();
        }
      });
    }
    if (status.isError) {
      swal(
        "Error",
        status.error.data?.message ? status.error.data?.message : "",
        "error"
      ).then((confirm) => {
        if (confirm) {
          onConfirm();
        }
      });
    } else toast.dismiss();
  }, [status]);
}
