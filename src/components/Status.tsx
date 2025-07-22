export default function Status({ status }: { status: string }) {
  return (
    <span
      className={`inline-block text-xs font-medium px-4 py-1 rounded-full mb-4
      ${
        status === "done"
          ? "bg-green-100 text-green-700 border-2 border-green-200"
          : "bg-yellow-100 text-yellow-800 border-2 border-yellow-200"
      }
    `}
    >
      {status === "done" ? "Completed" : "In progress"}
    </span>
  );
}
