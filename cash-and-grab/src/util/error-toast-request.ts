import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

const axiosErrorHandler = (error: unknown) => {
  if (isAxiosError(error)) {
    const msg = error.response?.data.error;
    toast.error(msg);
  }
};

export { axiosErrorHandler };
