import { FC } from 'react';
import SuryaSpecailComponent from "../components/MainEventComponent";
import events_info from "../data/events_info";
import TracingBeam from '../components/ui/TracingBeam';

const Events: FC = () => {
  return (
    <TracingBeam className='max-w-[1280px]'>
      <SuryaSpecailComponent events_info={events_info}/>
    </TracingBeam>
  );
}

export default Events;