import { Download } from 'lucide-react';
import Link from 'next/link';
import Social from '@/components/social';
import Photo from '@/components/photo';

const Hero = () => {
  return (
    <section className='w-full pt-40'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col items-center justify-between gap-10 xl:flex-row xl:pt-8'>
          {/* Text */}
          <div className='text-center xl:text-left'>
            <span>Hello I&apos;m</span>
            <h1 className='text-[40px] font-bold capitalize leading-[3rem]'>
              Pov <br />
              <span className='under-line'>Sokny</span>
            </h1>
            <div className='py-8'>
              <p>
                I have the perfect solution for your web development needs. By
                adopting a modern stack, like MERN, and incorporating TypeScript
                for enhanced type safety, we can create an exceptional web
                application.
              </p>
            </div>
            <div className='mt-4 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:space-x-8'>
              <div className='flex gap-x-2'>
                <Link
                  href='/CV/cv.pdf' // Update this path to your actual CV file location
                  target='_blank'
                  download="POV_Sokny-CV.pdf"
                  className='flex items-center space-x-2 rounded-full border-2 border-blue px-6 py-3 font-medium uppercase text-blue transition-all hover:bg-blue/80 hover:text-lighted'
                >
                  <span className='text-sm'>Download CV</span>
                  <Download size={20} />
                </Link>
              </div>
              <div className='flex py-4 xl:py-0'>
                <Social />
              </div>
            </div>
          </div>
          {/* Image */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
