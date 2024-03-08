import { FC } from 'react';

interface InfiniteLightsProps {}

const InfiniteLights: FC<InfiniteLightsProps> = () => {
  return (
    <div className="demo">
      <main>
        <div className="content">
          <div id="app"></div>
          <div className="content__title-wrap">
            <span className="content__pretitle">Meet</span>
            <h2 className="content__title">AWESOME STAR</h2>
            <h2 className="content__title">Charan Teja</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default InfiniteLights;