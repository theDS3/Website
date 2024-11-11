import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/Button';
import { isUUID4 } from '@/verify';

export default function Applications() {
  return (
    <main className='fixed mt-28 px-4'>
      <div className='text-white'>Hacker Applications will be displayed here!</div>
    </main>
  );
}
