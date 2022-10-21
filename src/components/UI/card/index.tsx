import React from "react";

type CardProps = {
  title: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-md rounded-lg border bg-white p-4 shadow-md dark:border-gray-600 dark:bg-gray-700 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-600"
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Card;
