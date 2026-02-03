"use client";

interface SectionProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Section({
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section className="space-y-3">
      {title && (
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
      <div>{children}</div>
    </section>
  );
}
