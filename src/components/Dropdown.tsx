interface DropdownProps {
  dropdownName: string;
  options: Array<{ value: string; label: string }>;
  defaultOption?: string;
  onChange: (value: string) => void;
}

export default function Dropdown({
  dropdownName,
  options,
  defaultOption,
  onChange,
}: DropdownProps) {
  console.log(options);
  console.log('defaultOption', defaultOption);

  return (
    <div className="">
      <select className="rounded border border-gray-400 px-2 py-0.5 font-bold capitalize">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
