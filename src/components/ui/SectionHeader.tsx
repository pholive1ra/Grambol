type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 mt-12 text-center">
      <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full text-[#7c6fd4] bg-[#e2ddfa]">
        {badge}
      </span>

      <h2 className="text-3xl font-bold leading-tight text-[#1a1a2e]">
        {title}
      </h2>

      {description && (
        <p className="max-w-xs text-sm leading-relaxed text-[#9090a0]">
          {description}
        </p>
      )}
    </div>
  );
}
