'use client';
import { format } from 'date-fns/format';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import {
  FaArrowRightLong,
  FaBowlFood,
  FaCircleUser,
  FaPhone,
  FaQrcode,
} from 'react-icons/fa6';
import { IoSchool } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, LinkButton } from '@/components/Button';
import { env } from '@/env/client.mjs';

interface Participant {
  firstName: string;
  lastName: string;
  email: string;
  phoneNum?: string;
  school: string;
  dietaryRestrictions: string;
  code: string;
  availableServices: string[];
}

interface ErrorResponse {
  type: string;
  message: string;
}

const fetchOptions = {
  headers: {
    'Content-Type': 'application/json',
    'ds3-secret': env.NEXT_PUBLIC_VALIDATION_SECRET,
  },
};

export default function ParticipantServices() {
  const searchParams = useSearchParams();

  const code = searchParams.get('code');
  const date = format(new Date(), 'yyyy-MM-dd');

  const [participant, setParticipant] = useState<Participant | null>();
  const [selectedServiceLabel, setSelectedServiceLabel] =
    useState<string>('DEFAULT');

  const updateService = async () => {
    if (!participant) return;

    try {
      const response = await fetch(
        `/api/participant/services/?code=${code}&date=${date}&serviceLabel=${selectedServiceLabel}`,
        {
          method: 'PATCH',
          ...fetchOptions,
        },
      );
      if (response.ok) {
        const data: string[] = await response.json();
        setParticipant({ ...participant, ...data });
        setSelectedServiceLabel('DEFAULT');
        toast.success(
          `Updated ${selectedServiceLabel} for ${participant.firstName} ${participant.lastName}`,
          {
            position: toast.POSITION.TOP_RIGHT,
          },
        );
      } else {
        const data: ErrorResponse = await response.json();
        console.error(data);
        toast.error(
          `Unable to update ${selectedServiceLabel} for ${participant.firstName} ${participant.lastName}`,
          {
            position: toast.POSITION.TOP_RIGHT,
          },
        );
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getParticipant = async () => {
      try {
        const response = await fetch(
          `/api/participant?code=${code}&date=${date}`,
          fetchOptions,
        );
        if (response.ok) {
          const data: Participant = await response.json();
          setParticipant(data);
          setSelectedServiceLabel(
            data.availableServices.includes('Check-In')
              ? 'Check-In'
              : 'DEFAULT',
          );
        } else {
          const data: ErrorResponse = await response.json();
          console.error(data);
          setParticipant(null);
        }
      } catch (error: any) {
        console.error(error);
        setParticipant(null);
      }
    };

    getParticipant();
  }, [code, date]);

  if (participant === null) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-3 text-white text-center gap-4">
        <svg
          className="w-32 h-32 text-red-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line
            x1="18"
            y1="6"
            x2="6"
            y2="18"
          />
          <line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
          />
        </svg>
        <h1 className="text-3xl font-bold">Participant Not Found</h1>
        <p className="mt-4">
          The participant you are looking for could not be found. Please check
          the QR Code and try again. If the problem persists contact the web dev
          team.
        </p>
        <LinkButton
          href="/admin/scan"
          buttonProps={{ children: 'Scan Again' }}
        />
      </div>
    );
  }

  if (!participant) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
        <p className="text-2xl">Searching for Participant</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center min-h-screen">
      <h1 className="text-white text-5xl font-medium tracking-wide py-10 text-center">
        Participant
      </h1>
      <div className="w-screen flex flex-col items-center justify-center gap-4 ">
        <div className="w-screen bg-white px-2 py-4 flex items-center">
          <FaCircleUser size={24} />
          <p className="px-2 text-black">
            {participant.firstName} {participant.lastName}
          </p>
        </div>
        <div className="w-screen bg-white px-2 py-4 flex items-center">
          <MdOutlineMail size={24} />
          <p className="px-2 text-black">{participant.email}</p>
          <Link
            className="ml-auto"
            href={`mailto:${participant.email}`}>
            <FaArrowRightLong
              size={24}
              color="black"
            />
          </Link>
        </div>
        {participant?.phoneNum && (
          <div className="w-screen bg-white px-2 py-4 flex items-center">
            <FaPhone size={24} />
            <p className="px-2 text-black">{participant.phoneNum}</p>
            <Link
              className="ml-auto"
              href={`tel:${participant.phoneNum}`}>
              <FaArrowRightLong
                size={24}
                color="black"
              />
            </Link>
          </div>
        )}
        <div className="w-screen bg-white px-2 py-4 flex items-center">
          <IoSchool size={24} />
          <p className="px-2 text-black">{participant.school}</p>
        </div>
        <div className="w-screen bg-white px-2 py-4 flex items-center">
          <FaBowlFood size={24} />
          <p className="px-2 text-black">{participant.dietaryRestrictions}</p>
        </div>
        <div className="w-screen bg-white px-2 py-4 flex items-center">
          <FaQrcode size={24} />
          <p className="px-2 text-black">{participant.code}</p>
        </div>
      </div>
      <h2 className="text-white text-5xl font-medium tracking-wide pt-10 text-center">
        Services
      </h2>
      {participant.availableServices.length === 0 ? (
        <>
          <p className="pb-4">No Services Available</p>
        </>
      ) : (
        <>
          <p className="pb-4">Select a service below to update the usage</p>
          {participant.availableServices.includes('Check-In') ? (
            <>
              <Button
                className="mb-8"
                onClick={() => updateService()}>
                Check In
              </Button>
            </>
          ) : (
            <>
              <div className="w-screen flex flex-col items-center justify-center gap-4 pb-10 ">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-white"></label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10/12 p-2.5"
                  onChange={(event) =>
                    setSelectedServiceLabel(event.target.value)
                  }
                  value={selectedServiceLabel}>
                  <option
                    value="DEFAULT"
                    disabled>
                    Choose a service ...
                  </option>

                  {participant.availableServices.map((service, key) => (
                    <option
                      key={key}
                      value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <Button onClick={updateService}>Update</Button>
              </div>
            </>
          )}
        </>
      )}
      <LinkButton
        href="/admin/scan"
        buttonProps={{ children: 'Scan Again' }}
      />
      <ToastContainer
        hideProgressBar
        newestOnTop
        theme="dark"
      />
    </main>
  );
}
