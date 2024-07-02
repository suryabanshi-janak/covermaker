'use client';

import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { getPaymentStatus } from './actions';

export default function ThankYou() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || '';

  const { data } = useQuery({
    queryKey: ['get-payment-status'],
    queryFn: async () => await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,
  });

  return <div>ThankYou</div>;
}
