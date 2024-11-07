'use client';

import { Html5Qrcode } from 'html5-qrcode';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';

import { Button } from '@/components/Button';
import { isUUID4 } from '@/verify';

export default function Scan() {
  const qrcodeRegionId = 'reader';
  const router = useRouter();
  const [showScanner, setShowScanner] = useState(false);

  var timeoutScanner = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!showScanner) return;

    const html5QrCode = new Html5Qrcode(qrcodeRegionId);
    const camera = { facingMode: 'environment' };
    const config = { fps: 10, qrbox: 350 };

    const qrCodeSuccessCallback = (decodedText: string) => {
      router.push(`/volunteer/services?code=${isUUID4(decodedText)}`);
      setShowScanner(false);
      if (html5QrCode.getState() === 2) html5QrCode.clear();
    };
    const qrcodeErrorCallback = () => {};

    // Starts the QR Scanner with preference for the back-facing camera
    html5QrCode.start(
      camera,
      config,
      qrCodeSuccessCallback,
      qrcodeErrorCallback,
    );

    timeoutScanner.current = setTimeout(() => {
      setShowScanner(false);
      if (html5QrCode.getState() === 2) html5QrCode.clear();
    }, 100000);

    return () => {
      html5QrCode.stop().catch((error) => {
        console.error('Failed to clear html5QrcodeScanner. ', error);
      });
    };
  }, [showScanner, router]);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen ${
        showScanner ? 'w-full lg:w-1/2 mx-auto' : 'w-full'
      }`}>
      {!showScanner && (
        <Button
          className="flex flex-col items-center"
          onClick={() => setShowScanner(!showScanner)}>
          <FaCamera size="25" />
          Show Scanner
        </Button>
      )}
      {showScanner && (
        <>
          <FaTimes
            color="white"
            className="ml-auto cursor-pointer"
            onClick={() => {
              setShowScanner(!showScanner);
              if (timeoutScanner) clearTimeout(timeoutScanner.current);
            }}
            size="50"
          />
        </>
      )}
      <div
        id={qrcodeRegionId}
        className="w-full"
        style={{ fontSize: '2rem' }}
      />
    </main>
  );
}
