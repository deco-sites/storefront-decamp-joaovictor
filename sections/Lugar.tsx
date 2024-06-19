import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  temperature: Temperature | null;
  text: string;
}

export default function Lugar(props: Props) {
  if (!props.temperature) return null;

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <span className="text-4xl font-bold text-blue-500 mb-2">
        {props.temperature.celsius}°C
      </span>
      <p className="text-lg text-gray-700">{props.text}</p>
    </div>
  );
}
