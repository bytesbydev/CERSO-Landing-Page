export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-16 ${center ? "text-center" : "text-left"}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
          {badge}
        </span>
      )}

      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-lg text-slate-600 ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}