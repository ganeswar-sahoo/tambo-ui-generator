/**
 * @file tambo.ts
 * @description Central configuration file for Tambo components and tools
 *
 * This file serves as the central place to register your Tambo components and tools.
 * It exports arrays that will be used by the TamboProvider.
 *
 * Read more about Tambo at https://tambo.co/docs
 */

import { Graph, graphSchema } from "@/components/tambo/graph";
import { DataCard, dataCardSchema } from "@/components/ui/card-data";
import {
  getCountryPopulations,
  getGlobalPopulationTrend,
} from "@/services/population-stats";
import type { TamboComponent } from "@tambo-ai/react";
import { TamboTool } from "@tambo-ai/react";
import { z } from "zod";
import Form from "@/components/ui-generator/Form";
import Dashboard, {
  dashboardSchema,
} from "@/components/ui-generator/Dashboard";
import PageLayout from "@/components/ui-generator/PageLayout";
import Section from "@/components/ui-generator/Section";
import StatCard from "@/components/tambo/stat-card";

/**
 * tools
 *
 * This array contains all the Tambo tools that are registered for use within the application.
 * Each tool is defined with its name, description, and expected props. The tools
 * can be controlled by AI to dynamically fetch data based on user interactions.
 */

export const tools: TamboTool[] = [
  {
    name: "countryPopulation",
    description:
      "A tool to get population statistics by country with advanced filtering options",
    tool: getCountryPopulations,
    inputSchema: z.object({
      continent: z.string().optional(),
      sortBy: z.enum(["population", "growthRate"]).optional(),
      limit: z.number().optional(),
      order: z.enum(["asc", "desc"]).optional(),
    }),
    outputSchema: z.array(
      z.object({
        countryCode: z.string(),
        countryName: z.string(),
        continent: z.enum([
          "Asia",
          "Africa",
          "Europe",
          "North America",
          "South America",
          "Oceania",
        ]),
        population: z.number(),
        year: z.number(),
        growthRate: z.number(),
      }),
    ),
  },
  {
    name: "globalPopulation",
    description:
      "A tool to get global population trends with optional year range filtering",
    tool: getGlobalPopulationTrend,
    inputSchema: z.object({
      startYear: z.number().optional(),
      endYear: z.number().optional(),
    }),
    outputSchema: z.array(
      z.object({
        year: z.number(),
        population: z.number(),
        growthRate: z.number(),
      }),
    ),
  },
  // Add more tools here
];


const formSchema = z.object({
  title: z.string().optional().describe("Title of the form"),
  description: z
    .string()
    .optional()
    .describe("Short description shown under the title"),
  submitLabel: z
    .string()
    .optional()
    .describe("Text on the submit button"),
  fields: z
    .array(
      z.object({
        label: z.string().describe("Label shown above the input"),
        name: z.string().describe("Field name"),
        type: z
          .enum(["text", "email", "password"])
          .optional()
          .describe("Input type"),
        placeholder: z.string().optional(),
        required: z.boolean().optional(),
      })
    )
    .optional(),
});

const pageLayoutSchema = z.object({
  title: z.string().optional().describe("Main title of the page"),
  description: z
    .string()
    .optional()
    .describe("Short description shown below the page title"),
});

const sectionSchema = z.object({
  title: z.string().optional().describe("Section heading"),
  description: z
    .string()
    .optional()
    .describe("Optional section description"),
});

const statCardSchema = z.object({
  title: z.string().describe("Title of the statistic"),
  value: z.string().describe("Main value to display"),
  description: z
    .string()
    .optional()
    .describe("Optional helper text under the value"),
});


/**
 * components
 *
 * This array contains all the Tambo components that are registered for use within the application.
 * Each component is defined with its name, description, and expected props. The components
 * can be controlled by AI to dynamically render UI elements based on user interactions.
 */
export const components: TamboComponent[] = [
  {
    name: "Graph",
    description:
      "A component that renders various types of charts (bar, line, pie) using Recharts. Supports customizable data visualization with labels, datasets, and styling options.",
    component: Graph,
    propsSchema: graphSchema,
  },
  {
    name: "DataCard",
    description:
      "A component that displays options as clickable cards with links and summaries with the ability to select multiple items.",
    component: DataCard,
    propsSchema: dataCardSchema,
  },
  // Add more components here
  {
  name: "Form",
  description:
    "A configurable form component that renders input fields and a submit button",
  component: Form,
  propsSchema: formSchema,
},
{
  name: "Dashboard",
  description:
    "A dashboard layout with statistic cards and an optional chart",
  component: Dashboard,
  propsSchema: dashboardSchema,
},
{
  name: "PageLayout",
  description: "Main page container with optional title and description",
  component: PageLayout,
  propsSchema: pageLayoutSchema,
},
{
  name: "Section",
  description: "A content section with optional title and description",
  component: Section,
  propsSchema: sectionSchema,
},
{
  name: "StatCard",
  description: "Displays a single metric like users, revenue, or conversion rate",
  component: StatCard,
  propsSchema: statCardSchema,
},


];

