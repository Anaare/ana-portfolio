import Stack from "./Stack";

export default function StackContainer({ stack }) {
  return (
    <div className="flex gap-2">
      {stack.map((s) => (
        <Stack stack={s} key={s} />
      ))}
    </div>
  );
}
