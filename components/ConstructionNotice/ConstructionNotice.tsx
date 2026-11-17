export default function ConstructionNotice() {
  return (
    <section
      aria-labelledby="construction-title"
      className="grid items-center gap-7 pt-10 pb-4 sm:gap-9 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12"
    >
      <h2
        id="construction-title"
        className="font-display text-[clamp(2.65rem,6vw,5rem)] leading-[1.03] tracking-[-0.04em]"
      >
        Portafolio{" "}
        <span className="block italic text-accent">en construcción</span>
      </h2>

      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 420 344"
        className="h-auto w-full max-w-[30rem] justify-self-center text-accent lg:justify-self-end"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="1" opacity="0.36">
          <path d="M22 216 183 126 398 224 237 314Z" />
          <path d="m76 186 215 98m-161-128 215 98M76 241l161-90m-108 114 161-90m-107 115 161-90" />
        </g>

        <g stroke="currentColor" strokeWidth="1" strokeDasharray="4 5" opacity="0.6">
          <path d="M89 105v106m113-169v106m137-44v106M226 167v106" />
          <path d="M56 232V123m304 70V94" />
        </g>

        <g stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
          <path d="M89 211 226 273 339 210 202 148Z" />
          <path d="M89 158 226 220 339 157 202 95Z" className="fill-paper" />
          <path d="M89 105 226 167 339 104 202 42Z" className="fill-paper" />
          <path d="M89 105v106m137-44v106m113-169v106" />
          <path d="M89 111 226 173 339 110m-113 57v6" opacity="0.55" />
        </g>
      </svg>
    </section>
  );
}
