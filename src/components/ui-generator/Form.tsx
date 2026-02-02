"use client";

interface FormField {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
}

interface FormProps {
  title?: string;
  description?: string;
  fields?: FormField[];
  submitLabel?: string;
}

export default function Form({
  title = "Form",
  description,
  fields = [],
  submitLabel = "Submit",
}: FormProps) {
  return (
    <div className="max-w-md rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>

      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}

      <form className="space-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              {field.label}
              {field.required && <span className="text-red-500"> *</span>}
            </label>

            <input
              type={field.type ?? "text"}
              name={field.name}
              placeholder={field.placeholder ?? ""}
              required={field.required}
              className="rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
        ))}

        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          {submitLabel}
        </button>
      </form>
    </div>
  );
}
