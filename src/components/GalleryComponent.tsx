import { FC } from 'react';
import { MouseTrailComponent } from './MouseTrailComponent';
import BorderMagicButton from './ui/BorderMagicButton';

const GalleryComponent: FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center mb-6">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">
              <span className="inline bg-gradient-to-r from-[#f47575]  to-[#ff1515] text-transparent bg-clip-text">
                GALLERY
              </span>
            </h2>
            <a href="/gallery" className="ml-0 lg:ml-4 mt-4 lg:mt-0">
              <BorderMagicButton text="Go to Gallery" />
            </a>
          </div>
        </div>
        <MouseTrailComponent/>
    </div>
  );
}

export default GalleryComponent;