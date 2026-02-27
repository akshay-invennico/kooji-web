import Link from 'next/link';
import { Cog, ArrowLeft } from 'lucide-react';
import routes from './routes';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6 font-sans">
      <p className="text-xl font-medium text-[#1D1D1B] mb-1">Oops!</p>
      <p className="text-base tracking-widest text-[#1D1D1B] mb-4">ERROR</p>

      <h1 className="text-9xl font-extrabold text-primary tracking-tighter leading-none mb-4 md:text-[10rem]">
        404
      </h1>

      <p className="text-3xl font-semibold uppercase text-[#1D1D1B] mb-12 tracking-wider">
        PAGE NOT FOUND
      </p>

      <div className="relative w-full max-w-lg h-24 mb-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Cog className="w-12 h-12 text-[#0063A2] animate-spin-slow" />
          <Cog className="w-16 h-16 text-[#0063A2] animate-spin" />
          <Cog className="w-12 h-12 text-[#0063A2] animate-spin-slow" />
        </div>
        <Cog
          className="absolute top-0 right-[25%] w-6 h-6 text-[#0063A2] animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <Cog
          className="absolute top-[30%] left-[10%] w-4 h-4 text-[#0063A2] animate-float"
          style={{ animationDelay: '1.2s' }}
        />
        <Cog
          className="absolute bottom-0 right-0 w-8 h-8 text-[#0063A2] animate-float"
          style={{ animationDelay: '0.8s' }}
        />
      </div>

      <Link
        href={routes.home}
        className="flex items-center space-x-2 bg-[#00AAA5] text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}
