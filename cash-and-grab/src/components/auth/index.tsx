'use client';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useLocalStorage } from '@/hooks';

export const authorization = (Component: any) => {
  return function IsAuth(props: any) {
    let token = null;
    if (typeof window !== 'undefined') {
      const { getLocalStorageKey } = useLocalStorage();
      token = getLocalStorageKey('token');
    }

    useEffect(() => {
      if (!token) {
        return redirect('/');
      }
    }, []);

    if (!token) {
      return null;
    }

    return <Component {...props} />;
  };
};
