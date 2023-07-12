import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import swal from 'sweetalert';

export default function useNotification(
  status,
  successMessage = 'Petición exitosa',
  loadingMessage = 'Cargando...',
  onConfirm = () => {},
) {
  useEffect(() => {
    if (status.isSuccess) {
      swal('Listo!', successMessage, 'success').then((confirm) => {
        if (confirm) {
          onConfirm();
        }
      });
    }
    if (status.isError) {
      swal('Error', status.error.data?.message ? status.error.data?.message : '', 'error').then((confirm) => {
        if (confirm) {
          onConfirm();
        }
      });
    }
    if (status.isLoading) toast.loading(loadingMessage);
    else toast.dismiss();
  }, [status.isSuccess, status.isLoading, status.isError, status.error]);
}
