"use client";
export default function Error({ error, reset }) {
  return (
    <div className="card">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <p className="mt-2 text-white/80">{String(error?.message || "Unknown error")}</p>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20">
        Try again
      </button>
    </div>
  );
}
