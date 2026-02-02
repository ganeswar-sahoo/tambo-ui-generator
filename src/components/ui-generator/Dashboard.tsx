"use client";

import { z } from "zod";

/* =========================
   Schema
========================= */

export const dashboardSchema = z.object({
  title: z.string().optional(),
  stats: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
        description: z.string().optional(),
      })
    )
    .optional(),
  chart: z
    .object({
      type: z.enum(["bar", "line", "pie"]).optional(),
      title: z.string().optional(),
      labels: z.array(z.string()).optional(),
      values: z.array(z.number()).optional(),
    })
    .optional(),
});

/* =========================
   Types
========================= */

type DashboardProps = z.infer<typeof dashboardSchema>;

/* =========================
   Component
========================= */

export default function Dashboard({
  title,
  stats = [],
  chart,
}: DashboardProps) {
  return (
    <div className="w-full space-y-6">
      {title && (
        <h2 className="text-2xl font-semibold">{title}</h2>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.isArray(stats) && stats.length > 0 ? (
          stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white p-4 shadow-sm"
            >
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
              {stat.description && (
                <p className="text-xs text-gray-400 mt-1">
                  {stat.description}
                </p>
              )}
            </div>
          ))
        ) : (
          <div className="text-sm text-gray-400">
            No stats available
          </div>
        )}
      </div>

      {/* Chart */}
      {chart?.labels && chart?.values && (
        <div className="rounded-xl border bg-white p-6">
          <h3 className="font-medium mb-4">
            {chart.title ?? "Chart"}
          </h3>

          <div className="text-sm text-gray-500 mb-2">
            Chart type: <b>{chart.type ?? "unknown"}</b>
          </div>

          <div className="mt-4 space-y-1">
            {chart.labels.map((label, index) => (
              <div key={index} className="flex justify-between">
                <span>{label}</span>
                <span className="font-medium">
                  {chart.values?.[index] ?? "-"}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
