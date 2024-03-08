import React, { useEffect, useState } from "react";
import ThreeDCardComponent from "./ThreeDCardComponent";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { Cross1Icon } from "@radix-ui/react-icons";

interface TeamInfo {
  id: number;
  poster: string;
  title: string;
  description: string;
  button: boolean;
}

interface MainTeamComponentProps {
  team_info: TeamInfo[];
}

const MainTeamComponent: React.FC<MainTeamComponentProps> = (props) => {
  const team_info: TeamInfo[] = props.team_info;

  const [showcard, setShowcard] = useState<boolean>(false);
  const [TeamInfoCard, setTeamInfoCard] = useState<TeamInfo | undefined>(
    team_info[0]
  );

  const cards = team_info.map((event: TeamInfo) => (
    <div
      key={event.id}
      onClick={() => {
        if (event.id === TeamInfoCard?.id && showcard) {
          setShowcard(false);
        } else {
          setTeamInfoCard(event);
          setShowcard(true);
          window.scrollTo(0, 0);
        }
      }}
    >
      <ThreeDCardComponent
        poster={event.poster}
        title={event.title}
        description={event.description}
        button={event.button}
      />
    </div>
  ));

  return (
    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 m-10">
      <div className="flex flex-col justify-center items-center gap-5">
        {cards}
      </div>
      <div className={`flex justify-center ${showcard ? "visible" : "hidden"} h-fit`}>
        <BackgroundGradientCard team_info={TeamInfoCard}/>
      </div>
    </div>
  );
};

export default MainTeamComponent;

const BackgroundGradientCard = ({ team_info }: { team_info: TeamInfo | undefined }) => {
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
        <div className="max-w-screen-sm mx-auto relative">
          <button
            className="absolute top-4 right-4 text-white text-3xl focus:outline-none z-50"
            onClick={toggleFullScreen}
          >
            <Cross1Icon />
          </button>
          <img
            src={team_info?.poster}
            alt="team-image"
            className="object-contain w-full h-auto cursor-pointer"
          />
        </div>
      </div>
      <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <img
          src={team_info?.poster}
          alt="team-image"
          className="object-contain w-full h-auto"
          onClick={toggleFullScreen}
        />
        <p className="text-xl font-bold text-neutral-600 dark:text-white lg:my-4">
          {team_info?.title}
        </p>
        <p className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300">
          {team_info?.description.split("\n").map((line) => {
            return <div key={line}>{line}</div>;
          })}
        </p>
      </BackgroundGradient>
    </div>
  );
};

