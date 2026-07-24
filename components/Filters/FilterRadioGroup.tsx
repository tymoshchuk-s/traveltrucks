type Option<T extends string> = {
  label: string;
  value: T;
};

type Props<T extends string> = {
  title: string;
  name: string;
  options: Option<T>[];
  value?: T;
  onChange: (value: T) => void;
};

export default function FilterRadioGroup<T extends string>({
  title,
  name,
  options,
  value,
  onChange,
}: Props<T>) {
  return (
    <fieldset>
      <legend>{title}</legend>

      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />

          {option.label}
        </label>
      ))}
    </fieldset>
  );
}
