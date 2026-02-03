"use client";

interface PageLayoutProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function PageLayout({
  title,
  description,
  children,
}: PageLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
      {title && (
        <div>
          <h1 className="text-3xl font-semibold">{title}</h1>
          {description && (
            <p className="text-gray-600 mt-1">{description}</p>
          )}
        </div>
      )}

      <div className="space-y-6">{children}</div>
    </div>
  );
}
