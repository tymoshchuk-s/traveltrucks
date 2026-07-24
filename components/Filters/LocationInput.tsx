type LocationInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function LocationInput({ value, onChange }: LocationInputProps) {
  return (
    <div>
      <label htmlFor="location">Location</label>

      <input
        id="location"
        type="text"
        placeholder="Kyiv"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
