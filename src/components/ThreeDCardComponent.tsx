import { CardBody, CardContainer, CardItem } from "./ui/3dCard";

interface CardProps {
  poster: string;
  title: string;
  description?: string;
  button: boolean;
}

const ThreeDCardComponent: React.FC<CardProps> = ({ poster, title, description, button }) => {
  return (
    <CardContainer className="inter-var flex justify-center items-center">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center items-center">
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={poster}
            height="1000"
            width="1000"
            className="lg:h-60 h-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="60"
          className="text-xl font-bold text-neutral-600 dark:text-white my-4 text-center"
        >
          {title}
        </CardItem>
        
        {description && (
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
          >
            {description}
          </CardItem>
        )}

        {button && <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Explore more →
          </CardItem>
        </div>}
      </CardBody>
    </CardContainer>
  );
}

export default ThreeDCardComponent;
