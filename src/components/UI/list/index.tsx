import React from "react";

type ListProps = {
  children?: React.ReactNode;
  className?: string;
};

const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <ul
      role="list"
      className={`divide-y divide-gray-200 dark:divide-gray-500 ${className}`}
    >
      {children}
    </ul>
  );
};

export default List;
