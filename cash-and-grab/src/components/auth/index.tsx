'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocalStorage } from '@/hooks';

interface CommonProps {
  params: {};
  searchParams: {};
}

// TODO: loading here maybe?
export const authorization = (Component: React.ComponentType<any>) => {
  return function IsAuth(props: CommonProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    let token: string | null = null;

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const { getLocalStorageKey } = useLocalStorage();
        token = getLocalStorageKey('token');
      }

      if (!token) {
        router.push('/');
      } else {
        setIsLoading(false);
      }
    }, [Component]);

    if (isLoading) {
      return <div></div>;
    }

    return <Component {...props} />;
  };
};
