import react from "react";

export default function Logo({className}) {
  return (
    <div className={className}>
      <h2 className="text-4xl lg:text-5xl font-serif text-(--text-heading) font-normal tracking-wider mb-1">
        Dr Maya
      </h2>
      <p className="text-base tracking-[0.3em] uppercase text-(--text-highlighted) font-medium">
        Reynolds, PsyD
      </p>
    </div>
  );
}
