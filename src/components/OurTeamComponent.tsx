import { FC } from 'react';
import TeamMemberCard from './TeamMemberCard';
import { Bhargav, Spandana, Sujeeth, Varshith } from '../assets/our team/OurTeamImages';
import BorderMagicButton from './ui/BorderMagicButton';

const OurTeamComponent: FC = () => {
  return (
    <div className="py-10 mx-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">
              <span className="inline bg-gradient-to-r from-[#fb9b60]  to-[#fd5d0e] text-transparent bg-clip-text">
                OUR{' '}
              </span>
              INFINITY{' '}
              <span className="inline bg-gradient-to-r from-[#88f27a]  to-[#6aff00] text-transparent bg-clip-text">
                TEAM
              </span>
            </h2>
            <a href="/our-team" className="ml-0 lg:ml-4 mt-4 lg:mt-0">
              <BorderMagicButton text="View Team" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ml-6 md:ml-0">
          <TeamMemberCard
            name="V. Sujeeth Reddy"
            position="Convenor"
            image={Sujeeth}
          />
          <TeamMemberCard
            name="A. Bhargav"
            position="Treasurer"
            image={Bhargav}
          />
          <TeamMemberCard
            name="B. Sai Varshith"
            position="Secretary"
            image={Varshith}
          />
          <TeamMemberCard
            name="M. Spandana"
            position="Joint Secretary"
            image={Spandana}
          />
        </div>
      </div>
    </div>
  );
};

export default OurTeamComponent;
