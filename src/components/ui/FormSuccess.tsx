export default function FormSuccess({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div
      role="status"
      className="rounded-md border border-emerald-200 bg-emerald-50 p-8 text-emerald-900 animate-success-in"
    >
      <p className="font-display text-xl">{title}</p>
      <p className="mt-2 text-sm">{message}</p>
    </div>
  );
}
