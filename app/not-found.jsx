export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090909] px-6 text-white">
      <div className="text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#ccff00]">
          FitLog
        </p>

        <h1 className="text-7xl font-black md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold uppercase">
          Page Not Found
        </h2>

        <p className="mt-3 text-zinc-400">
          The workout you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold uppercase text-black transition hover:bg-[#b8e600]"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}