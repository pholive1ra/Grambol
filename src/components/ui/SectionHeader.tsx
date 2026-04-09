type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  titleSize?: "sm" | "md" | "lg";
  descriptionSize?: "sm" | "md" | "lg";
};

export default function SectionHeader({
  badge,
  title,
  description,
  titleSize = "md",
  descriptionSize = "md",
}: SectionHeaderProps) {
  const titleClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  };

  const descriptionClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 mt-12 text-center">
      <span className="px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full text-[#7c6fd4] bg-[#e2ddfa]">
        {badge}
      </span>

      <h2
        className={`${titleClasses[titleSize]} font-bold leading-tight text-[#1a1a2e]`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`${descriptionClasses[descriptionSize]} max-w-xl leading-relaxed text-[#9090a0]`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
