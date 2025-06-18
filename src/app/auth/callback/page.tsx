"use client"

import React, { useEffect } from 'react';
import { Loader } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { checkAuthStatus } from '@/actions/auth.actions';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["authCheck"],
    queryFn: async () => await checkAuthStatus(),
  });

  useEffect(() => {
    if (data?.success) {
      router.push("/");
    }
  }, [data, router]);

  return (
    <div className='mt-20 w-full flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader className='w-10 h-10 animate-spin text-muted-foreground' />
        <h3 className='text-xl font-bold'>Redirecting...</h3>
        <p>Please Wait</p>
      </div>
    </div>
  );
};

export default Page;
