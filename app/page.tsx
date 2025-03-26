
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import styles from '@/app/ui/home.module.css';
import AcmeLogo from '@/app/ui/acme-logo';

export default function Page() {
  return (
    <>
      <div className='flex flex-col w-full bg-blue-500 p-6 rounded-lg'>
        <AcmeLogo />
      </div>
      <div className='flex min-h-screen'>
        <div className="flex flex-col items-start justify-center p-6 md:w-2/5 md:px-28 md:py-12">
          <h1 className="text-2xl font-bold mb-4">Welcome to Acme</h1>
          <p className="text-gray-700 mb-6">
            This is the example for the{' '}
            <Link href="/learn" className="text-blue-600 hover:underline">
              Next.js Learn Course
            </Link>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Log in
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </>
  );
}