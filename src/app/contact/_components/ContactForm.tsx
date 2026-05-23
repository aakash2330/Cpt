"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
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
  wide?: boolean;
};

const newProjectSchema = z.object({
  form_type: z.literal("New Project Discussion"),
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  project_type: z.string().min(1, "Project type is required."),
  location: z.string().min(1, "Location is required."),
  scope_size: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

const documentSchema = z.object({
  form_type: z.literal("Prequalification & Documentation"),
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().optional(),
  organisation_type: z.string().min(1, "Organisation type is required."),
  documents_required: z.string().min(1, "Documents required is required."),
  message: z.string().min(5, "Message must be at least 5 characters."),
});

const newProjectFields: FieldConfig[] = [
  { name: "name", label: "Name", placeholder: "Your name" },
  { name: "company", label: "Company", placeholder: "Company name" },
  {
    name: "project_type",
    label: "Project type",
    placeholder: "Hotel, healthcare, residential...",
    wide: true,
  },
  { name: "location", label: "Location", placeholder: "Project city or site" },
  {
    name: "scope_size",
    label: "Approximate scope size",
    placeholder: "Rooms, floors, sq ft, or schedule window",
    wide: true,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Share the scope, schedule, procurement status, or constraints.",
    type: "textarea",
    wide: true,
  },
];

const documentFields: FieldConfig[] = [
  { name: "name", label: "Name", placeholder: "Your name" },
  { name: "company", label: "Company", placeholder: "Company name" },
  {
    name: "organisation_type",
    label: "Organisation type",
    placeholder: "GC, developer, procurement team...",
    wide: true,
  },
  {
    name: "documents_required",
    label: "Documents required",
    placeholder: "Bonding, WSIB, insurance...",
    wide: true,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Tell us what documentation is required and by when.",
    type: "textarea",
    wide: true,
  },
];

export function ContactForm() {
  return (
    <div className="grid gap-6">
      <InquiryForm
        index="01"
        title="New Project Discussion"
        description="For developers, general contractors, and asset owners with an active or upcoming scope to discuss."
        submitLabel="Submit Inquiry"
        schema={newProjectSchema}
        defaultValues={{
          form_type: "New Project Discussion",
          name: "",
          company: "",
          project_type: "",
          location: "",
          scope_size: "",
          message: "",
        }}
        fields={newProjectFields}
      />
      <InquiryForm
        index="02"
        title="Prequalification & Documentation"
        description="For procurement teams requiring bonding certificates, WSIB clearance, insurance documentation, or a formal prequalification package."
        submitLabel="Request Documents"
        schema={documentSchema}
        defaultValues={{
          form_type: "Prequalification & Documentation",
          name: "",
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
  index,
  title,
  description,
  submitLabel,
  schema,
  defaultValues,
  fields,
}: {
  index: string;
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
    <section className="group relative overflow-hidden border border-white/10 bg-black transition duration-300 hover:border-white/20">
      <div className="grid gap-px bg-white/10 xl:grid-cols-[320px_minmax(0,1fr)]">
        <div className="bg-black p-6 md:p-8">
          <div className="flex items-center justify-between border-t border-[var(--gold)] pt-5">
            <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
              Path {index}
            </span>
            <span className="h-px w-10 bg-white/18 transition duration-300 group-hover:w-16 group-hover:bg-[var(--gold)]" />
          </div>
          <h2 className="mt-8 max-w-xl break-words text-2xl leading-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-6 text-white/58">{description}</p>
          <div className="mt-8 border border-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/38">
              Routed To
            </p>
            <p className="mt-2 text-base text-white">
              CPT estimating / project leadership
            </p>
          </div>
        </div>

        <div className="bg-black p-6 md:p-8">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-5 md:grid-cols-2"
            >
              {fields.map((fieldConfig) => (
                <FormField
                  key={fieldConfig.name}
                  control={form.control}
                  name={fieldConfig.name}
                  render={({ field }) => (
                    <FormItem
                      className={
                        fieldConfig.type === "textarea" || fieldConfig.wide
                          ? "md:col-span-2"
                          : undefined
                      }
                    >
                      <FormLabel className="text-xs uppercase tracking-[0.16em] text-white/58">
                        {fieldConfig.label}
                      </FormLabel>
                      <FormControl>
                        {fieldConfig.type === "textarea" ? (
                          <Textarea
                            placeholder={fieldConfig.placeholder}
                            className="min-h-36 resize-none rounded-none border-white/15 bg-white/[0.025] text-white placeholder:text-white/30 transition focus:border-[var(--gold)] focus-visible:ring-[var(--gold)]"
                            {...field}
                          />
                        ) : (
                          <Input
                            placeholder={fieldConfig.placeholder}
                            className="h-12 rounded-none border-white/15 bg-white/[0.025] text-white placeholder:text-white/30 transition focus:border-[var(--gold)] focus-visible:ring-[var(--gold)]"
                            {...field}
                          />
                        )}
                      </FormControl>
                      <FormMessage className="text-xs text-red-300" />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="h-12 w-full rounded-none bg-[var(--gold)] text-sm font-semibold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white disabled:hover:translate-y-0 md:col-span-2"
              >
                {form.formState.isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    {submitLabel}
                    <Send aria-hidden="true" size={16} />
                  </>
                )}
              </Button>
              {submissionMessage && (
                <p
                  aria-live="polite"
                  className={
                    submissionStatus === "success"
                      ? "text-sm text-emerald-300 md:col-span-2"
                      : "text-sm text-red-300 md:col-span-2"
                  }
                >
                  {submissionMessage}
                </p>
              )}
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
