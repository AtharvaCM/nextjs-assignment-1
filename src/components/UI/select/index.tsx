import React from "react";

type Props = {
  children?: React.ReactNode;
  placeholderText: string;
  forId: string;
  className?: string;
  onSelect: (value: number) => void;
};

const Select: React.FC<Props> = ({
  placeholderText,
  forId,
  onSelect,
  children,
  className,
}) => {
  const handleSelectChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    onSelect(+e.target.value);
  };

  return (
    <div className={className}>
      <label
        htmlFor={forId}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Select an option
      </label>
      <select
        id={forId}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={handleSelectChange}
        defaultValue={440}
      >
        <option disabled={true}>{placeholderText}</option>
        {children}
      </select>
    </div>
  );
};

export default Select;
