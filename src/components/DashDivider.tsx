import React from 'react';

const DashDivider: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <div className="w-4/5 border-b border-dashed border-white my-1"></div>
      <div className="w-4/5 border-b border-dashed border-white my-1"></div>
    </div>
  );
};

export default DashDivider;