import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { toggleLoading } from '@/store';
import api from '@/config/axiosConfig';
import { axiosErrorHandler } from '@/util';
import { CouponValidation } from '@/models';

const useCoupon = () => {
  const dispatch = useDispatch();

  const verifyCouponVality = async (
    hash: string,
  ): Promise<CouponValidation> => {
    dispatch(toggleLoading(true));
    try {
      const response = await api.get('/v1/coupon', {
        params: {
          hash,
        },
      });

      dispatch(toggleLoading(false));
      toast.success('Cupom válido');
      return response.data;
    } catch (error) {
      axiosErrorHandler(error);
      toast.error('Cupom inválido');
    }
    dispatch(toggleLoading(false));
    return {} as CouponValidation;
  };

  return { verifyCouponVality };
};

export { useCoupon };
