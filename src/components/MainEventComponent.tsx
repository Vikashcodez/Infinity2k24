import React, { useEffect, useState } from "react";
import ThreeDCardComponent from "./ThreeDCardComponent";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { Cross1Icon } from '@radix-ui/react-icons';

interface EventInfo {
  id: number;
  poster: string;
  title: string;
  form_link: string;
  description: string;
  button: boolean;
}

interface MainEventComponentProps {
  events_info: EventInfo[];
}

const MainEventComponent: React.FC<MainEventComponentProps> = (props) => {
  const event_info: EventInfo[] = props.events_info;

  const [showcard, setShowcard] = useState<boolean>(false);
  const [eventInfoCard, setEventInfoCard] = useState<EventInfo | undefined>(
    event_info[0]
  );

  const cards = event_info.map((event: EventInfo) => (
    <div
      key={event.id}
      onClick={() => {
        if (event.id === eventInfoCard?.id && showcard) {
          setShowcard(false);
        } else {
          setEventInfoCard(event);
          setShowcard(true);
          window.scrollTo(0, 0);
        }
      }}
    >
      <ThreeDCardComponent title={event.title} poster={event.poster} button={event.button}/>
    </div>
  ));

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 m-10">
      <div className="flex flex-col justify-center items-center gap-5">
        {cards}
      </div>
      <div className={`flex justify-center ${showcard ? "visible" : "hidden"} h-fit`}>
        <BackgroundGradientCard event_info={eventInfoCard}/>
      </div>
    </div>
  );
};

export default MainEventComponent;

const BackgroundGradientCard = ({ event_info }: { event_info: EventInfo | undefined }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Handle full-screen toggle
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  // Handle escape key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullScreen(false);
      }
    };

    if (isFullScreen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when in full-screen mode
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.body.style.overflow = ""; // Restore scrolling when exiting full-screen mode
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isFullScreen]);

  return (
    <div className="py-20 flex items-center justify-center">
      <div
        className={`fixed inset-0 z-50 overflow-auto bg-black bg-opacity-80 flex items-center justify-center ${
          isFullScreen ? "block" : "hidden"
        }`}
        onClick={toggleFullScreen}
      >
        <div className="max-w-3xl mx-auto relative">
          <button
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none z-50"
            onClick={toggleFullScreen}
          >
            <Cross1Icon />
          </button>
          <img
            src={event_info?.poster}
            alt="jordans"
            className="object-contain max-h-screen md:max-h-auto cursor-pointer"
          />
        </div>
      </div>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={event_info?.poster}
          alt="event-poster"
          height="400"
          width="400"
          className="object-contain"
          onClick={toggleFullScreen}
        />
        <p className="text-xl font-bold text-neutral-600 dark:text-white lg:my-4">
          {event_info?.title}
        </p>
        <p className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300">
          {event_info?.description.split("\n").map((line) => {
            return <div key={line}>{line}</div>;
          })}
        </p>
        <a href={event_info?.form_link}>
          <button className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold my-3">
            <span>Form Link </span>
            →
          </button>
        </a>
      </BackgroundGradient>
    </div>
  );
};
