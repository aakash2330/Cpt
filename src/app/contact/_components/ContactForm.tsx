"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FieldConfig = {
  name: string;
  label: string;
  placeholder: string;
  type?: "input" | "textarea";
};

const newProjectSchema = z.object({
  form_type: z.literal("New Project Discussion"),
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().min(1, "Email is required."),
  phone: z.string().min(1, "Phone number is required."),
  company: z.string().min(1, "Company is required."),
  project_type: z.string().min(1, "Project type is required."),
  location: z.string().min(1, "Location is required."),
  scope_size: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

const documentSchema = z.object({
  form_type: z.literal("Prequalification & Documentation"),
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().min(1, "Email is required."),
  phone: z.string().min(1, "Phone number is required."),
  company: z.string().min(1, "Company is required."),
  organisation_type: z.string().min(1, "Organisation type is required."),
  documents_required: z.string().min(1, "Documents required is required."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

const newProjectFields: FieldConfig[] = [
  { name: "name", label: "Name", placeholder: "Your name" },
  { name: "email", label: "Email", placeholder: "Where we can reach you" },
  { name: "phone", label: "Phone number", placeholder: "Phone number" },
  { name: "company", label: "Company", placeholder: "Company name" },
  {
    name: "project_type",
    label: "Project type",
    placeholder: "Hospitality, healthcare, multi-residential...",
  },
  { name: "location", label: "Location", placeholder: "Project city or site" },
  {
    name: "scope_size",
    label: "Approximate scope size",
    placeholder: "Rooms, floors, sq ft, or schedule window",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Share the scope, schedule, procurement status, or constraints.",
    type: "textarea",
  },
];

const documentFields: FieldConfig[] = [
  { name: "name", label: "Name", placeholder: "Your name" },
  { name: "email", label: "Email", placeholder: "Where we can reach you" },
  { name: "phone", label: "Phone number", placeholder: "Phone number" },
  { name: "company", label: "Company", placeholder: "Company name" },
  {
    name: "organisation_type",
    label: "Organisation type",
    placeholder: "GC, developer, procurement team...",
  },
  {
    name: "documents_required",
    label: "Documents required",
    placeholder: "CCDC 11, bonding, WSIB, insurance, prequalification package...",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Tell us what documentation is required and by when.",
    type: "textarea",
  },
];

export function ContactForm() {
  return (
    <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-2">
      <InquiryForm
        title="New Project Discussion"
        description="For developers, general contractors, and asset owners with an active or upcoming scope to discuss."
        submitLabel="Submit Inquiry"
        schema={newProjectSchema}
        defaultValues={{
          form_type: "New Project Discussion",
          name: "",
          email: "",
          phone: "",
          company: "",
          project_type: "",
          location: "",
          scope_size: "",
          message: "",
        }}
        fields={newProjectFields}
      />
      <InquiryForm
        title="Prequalification & Documentation"
        description="For procurement teams requiring CCDC 11, bonding certificates, WSIB clearance, insurance documentation, or a formal prequalification package."
        submitLabel="Request Documents"
        schema={documentSchema}
        defaultValues={{
          form_type: "Prequalification & Documentation",
          name: "",
          email: "",
          phone: "",
          company: "",
          organisation_type: "",
          documents_required: "",
          message: "",
        }}
        fields={documentFields}
      />
    </div>
  );
}

function InquiryForm({
  title,
  description,
  submitLabel,
  schema,
  defaultValues,
  fields,
}: {
  title: string;
  description: string;
  submitLabel: string;
  schema: z.ZodTypeAny;
  defaultValues: Record<string, string>;
  fields: FieldConfig[];
}) {
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  const form = useForm<Record<string, string>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  async function onSubmit(values: Record<string, string>) {
    setSubmissionMessage(null);
    setSubmissionStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit the form.");
      }

      setSubmissionStatus("success");
      setSubmissionMessage("Thanks. Your message has been sent.");
      form.reset(defaultValues);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to submit the form.";

      setSubmissionStatus("error");
      setSubmissionMessage(message);
    }
  }

  return (
    <section className="flex h-full flex-col bg-black p-6 md:p-8">
      <div className="mb-8 border-t border-[var(--gold)] pt-5">
        <h2 className="text-3xl text-white">{title}</h2>
        <p className="mt-4 text-sm leading-6 text-white/58">{description}</p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-1 flex-col"
        >
          <div className="space-y-5">
            {fields.map((fieldConfig) => (
              <FormField
                key={fieldConfig.name}
                control={form.control}
                name={fieldConfig.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-[0.16em] text-white/58">
                      {fieldConfig.label}
                    </FormLabel>
                    <FormControl>
                      {fieldConfig.type === "textarea" ? (
                        <Textarea
                          placeholder={fieldConfig.placeholder}
                          className="min-h-32 resize-none rounded-none border-white/15 bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:ring-[var(--gold)]"
                          {...field}
                        />
                      ) : (
                        <Input
                          placeholder={fieldConfig.placeholder}
                          className="h-12 rounded-none border-white/15 bg-white/[0.03] text-white placeholder:text-white/30 focus-visible:ring-[var(--gold)]"
                          {...field}
                        />
                      )}
                    </FormControl>
                    <FormMessage className="text-xs text-red-300" />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <div className="mt-auto pt-7">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="h-12 w-full rounded-none bg-[var(--gold)] text-sm font-semibold uppercase tracking-[0.16em] text-black hover:bg-white"
            >
              {form.formState.isSubmitting ? "Sending..." : submitLabel}
            </Button>
            {submissionMessage && (
              <p
                aria-live="polite"
                className={
                  submissionStatus === "success"
                    ? "mt-4 text-sm text-emerald-300"
                    : "mt-4 text-sm text-red-300"
                }
              >
                {submissionMessage}
              </p>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
}
