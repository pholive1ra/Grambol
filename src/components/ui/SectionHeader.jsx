export default function SectionHeader({ badge, title, description }) {
  return (
    <div className="py-10 mt-12 flex flex-col justify-center text-center items-center gap-3">
      <span className="text-xs font-semibold tracking-widest text-[#7c6fd4] bg-[#e2ddfa] px-4 py-1.5 rounded-full uppercase">
        {badge}
      </span>

      <h2 className="text-3xl font-bold text-[#1a1a2e] leading-tight">
        {title}
      </h2>

      <p className="text-sm text-[#9090a0] max-w-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}
