'use client';

import { format } from 'date-fns/format';
import { Html5Qrcode } from 'html5-qrcode';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaCamera, FaTimes } from 'react-icons/fa';

import { Button } from '@/components/Button';

export default function Scan() {
  const qrcodeRegionId = 'reader';
  const router = useRouter();
  const [showScanner, setShowScanner] = useState(false);

  var timeoutScanner = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!showScanner) return;

    const html5QrCode = new Html5Qrcode(qrcodeRegionId);
    const camera = { facingMode: 'environment' };
    const config = { fps: 10, qrbox: 250 };

    const qrCodeSuccessCallback = (decodedText: string) => {
      router.push(
        `/admin/services?code=${decodedText}&date=${format(
          new Date(),
          'yyyy-MM-dd',
        )}`,
      );
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
    }, 10000);

    return () => {
      html5QrCode.stop().catch((error) => {
        console.error('Failed to clear html5QrcodeScanner. ', error);
      });
    };
  }, [showScanner, router]);

  return (
    <main
      className={
        showScanner
          ? 'flex flex-col justify-center min-h-screen'
          : 'flex flex-col items-center justify-center min-h-screen'
      }>
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
        style={{
          fontSize: '2rem',
        }}
      />
    </main>
  );
}
