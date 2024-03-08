import { FC } from 'react';
import BorderMagicButton from './ui/BorderMagicButton';

const EventsComponent: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="mb-20"> {/* Adjust the margin top to add space */}
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Want to know more about 'EVENTS'?
          </p>
          <a href="/events">
            <BorderMagicButton text="Know More"/>
          </a>
        </div>
        <div className="mt-20"> {/* Adjust the margin top to add space */}
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Have a look at our SPONSORS...
          </p>
          <a href="/sponsors">
            <BorderMagicButton text="Sponsors"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventsComponent;
