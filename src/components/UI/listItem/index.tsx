import React from "react";

type ListItemProps = {
  children?: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-center justify-between space-x-4">
        {children}
      </div>
    </li>
  );
};

export default ListItem;
