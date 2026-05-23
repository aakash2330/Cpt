"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { type FieldPath, useForm } from "react-hook-form";
import { z } from "zod";

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

const SubcontractorFormSchema = z.object({
  company_name: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  contact: z.string().min(2, {
    message: "Contact name must be at least 2 characters.",
  }),
  phone_number: z.string().min(7, {
    message: "Please enter a valid phone number.",
  }),
  fax: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  union_status: z.string().min(2, {
    message: "Union status is required.",
  }),
  bidding_area: z.string().min(2, {
    message: "Bidding area is required.",
  }),
  bondable: z.string().min(2, {
    message: "Bondable status is required.",
  }),
  expertise: z.string().min(2, {
    message: "Division and area of expertise is required.",
  }),
  street_address: z.string().min(2, {
    message: "Street address is required.",
  }),
  address_line_2: z.string().optional(),
  city: z.string().min(2, {
    message: "City is required.",
  }),
  state_province_region: z.string().min(2, {
    message: "State/Province/Region is required.",
  }),
  country: z.string().min(2, {
    message: "Country is required.",
  }),
  postal_zip_code: z.string().min(2, {
    message: "Postal/Zip code is required.",
  }),
});

type SubcontractorFormValues = z.infer<typeof SubcontractorFormSchema>;

type FieldConfig = {
  name: FieldPath<SubcontractorFormValues>;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
};

const companyFields: FieldConfig[] = [
  {
    name: "company_name",
    label: "Company Name",
    placeholder: "Company name",
    required: true,
  },
  {
    name: "contact",
    label: "Contact",
    placeholder: "Contact name",
    required: true,
  },
  {
    name: "phone_number",
    label: "Phone Number",
    placeholder: "Phone number",
    type: "tel",
    required: true,
  },
  {
    name: "fax",
    label: "Fax",
    placeholder: "Fax number",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email address",
    type: "email",
    required: true,
  },
  {
    name: "union_status",
    label: "Union Status",
    placeholder: "Union status",
    required: true,
  },
  {
    name: "bidding_area",
    label: "Which Area Are You Looking to Bid?",
    placeholder: "Bidding area",
    required: true,
  },
  {
    name: "bondable",
    label: "Are You Bondable?",
    placeholder: "Yes / no / amount",
    required: true,
  },
  {
    name: "expertise",
    label: "Division and Area of Expertise",
    placeholder: "Division and area of expertise",
    required: true,
    wide: true,
  },
];

const addressFields: FieldConfig[] = [
  {
    name: "street_address",
    label: "Street Address",
    placeholder: "Street address",
    required: true,
    wide: true,
  },
  {
    name: "address_line_2",
    label: "Address Line 2",
    placeholder: "Address line 2",
    wide: true,
  },
  {
    name: "city",
    label: "City",
    placeholder: "City",
    required: true,
  },
  {
    name: "state_province_region",
    label: "State / Province / Region",
    placeholder: "State / province / region",
    required: true,
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Country",
    required: true,
  },
  {
    name: "postal_zip_code",
    label: "Postal / Zip Code",
    placeholder: "Postal / zip code",
    required: true,
  },
];

const intakeFacts = [
  { label: "Resource Type", value: "Subcontractor Intake" },
  { label: "Review Area", value: "Division 9" },
  { label: "Region", value: "Ontario" },
];

const formChecklist = [
  "Company and contact information",
  "Trade expertise and bidding area",
  "Bonding and union status",
  "Mailing address for records",
];

export default function Page() {
  const form = useForm<SubcontractorFormValues>({
    resolver: zodResolver(SubcontractorFormSchema),
    defaultValues: {
      company_name: "",
      contact: "",
      phone_number: "",
      fax: "",
      email: "",
      union_status: "",
      bidding_area: "",
      bondable: "",
      expertise: "",
      street_address: "",
      address_line_2: "",
      city: "",
      state_province_region: "",
      country: "",
      postal_zip_code: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );

  async function onSubmit(values: SubcontractorFormValues) {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setSubmissionMessage(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmissionStatus("success");
        setSubmissionMessage(result.message || "Form submitted successfully.");
        form.reset();
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(result.message || "An error occurred.");
      }
    } catch (error) {
      setSubmissionStatus("error");
      const message =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      setSubmissionMessage(`Failed to submit form: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  }

  function renderField(fieldConfig: FieldConfig) {
    return (
      <FormField
        key={fieldConfig.name}
        control={form.control}
        name={fieldConfig.name}
        render={({ field }) => (
          <FormItem className={fieldConfig.wide ? "md:col-span-2" : undefined}>
            <FormLabel className="text-xs font-semibold uppercase tracking-[0.18em] text-white/58">
              {fieldConfig.label}
              {fieldConfig.required && (
                <span className="ml-1 text-[var(--gold)]">*</span>
              )}
            </FormLabel>
            <FormControl>
              <Input
                type={fieldConfig.type}
                placeholder={fieldConfig.placeholder}
                className="h-12 rounded-none border-white/15 bg-white/[0.025] px-4 text-white placeholder:text-white/28 transition focus:border-[var(--gold)] focus-visible:ring-[var(--gold)]"
                {...field}
              />
            </FormControl>
            <FormMessage className="text-sm text-red-300" />
          </FormItem>
        )}
      />
    );
  }

  return (
    <div className="site-page bg-black">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(199,164,107,0.11),transparent_40%)] bg-[length:120px_120px,100%_100%] opacity-35" />
        <div className="site-container relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
            <div className="max-w-5xl">
              <p className="section-label">Subcontractor Resources</p>
              <h1 className="break-words text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl lg:text-8xl">
                Pre-Qualification Intake.
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-white/66">
                Complete the intake below to be reviewed for future bidding
                opportunities with City Professional Trades.
              </p>
            </div>
            <aside className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                Intake Record
              </p>
              <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10">
                {intakeFacts.map((fact) => (
                  <div key={fact.label} className="bg-black p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/38">
                      {fact.label}
                    </p>
                    <p className="mt-3 text-lg leading-7 text-white">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="site-section relative overflow-hidden border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:120px_120px] opacity-30" />
        <div className="site-container relative grid gap-12 xl:grid-cols-[360px_minmax(0,1fr)] xl:items-start">
          <aside className="self-start border-y border-white/10 py-8 xl:sticky xl:top-28">
            <p className="section-label">Before You Submit</p>
            <h2 className="text-4xl leading-[1.04] text-white">
              Keep the review information complete.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Required fields are marked in gold. Submitted details are routed
              to CPT for bidder-list review.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {formChecklist.map((item, index) => (
                <div key={item} className="bg-black p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/66">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </aside>

          <div className="border border-white/10 bg-black">
            <div className="border-t border-[var(--gold)]/70 p-6 md:p-9">
              <p className="section-label">Bidder List Form</p>
              <h2 className="max-w-3xl text-4xl leading-[1.05] text-white md:text-6xl">
                Subcontractor resources & pre-qualification.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/62">
                Fill out the form below to be added to the list of bidders.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="border-t border-white/10">
                {submissionStatus && submissionMessage && (
                  <div
                    className={`m-6 border p-4 text-sm leading-6 md:m-9 ${
                      submissionStatus === "success"
                        ? "border-[var(--gold)]/55 bg-[var(--gold)]/10 text-white"
                        : "border-red-400/50 bg-red-500/10 text-red-100"
                    }`}
                  >
                    {submissionMessage}
                  </div>
                )}

                <FormSection
                  index="01"
                  title="Company Information"
                  description="Primary contact, trade coverage, and bidding readiness."
                >
                  {companyFields.map(renderField)}
                </FormSection>

                <FormSection
                  index="02"
                  title="Company Mailing Address"
                  description="Address information used for bidder-list records."
                >
                  {addressFields.map(renderField)}
                </FormSection>

                <div className="border-t border-white/10 p-6 md:p-9">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-auto w-full items-center justify-center gap-2 rounded-none bg-[var(--gold)] px-5 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white disabled:translate-y-0 md:w-auto"
                  >
                    {isSubmitting ? "Submitting" : "Submit Pre-Qualification"}
                    <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormSection({
  index,
  title,
  description,
  children,
}: {
  index: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-white/10 p-6 md:p-9">
      <div className="mb-8 flex flex-col gap-5 border-t border-white/10 pt-5 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
            Step {index}
          </p>
          <h3 className="mt-4 text-3xl leading-tight text-white md:text-4xl">
            {title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
            {description}
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.18em] text-white/30">
          {index}
        </span>
      </div>
      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </section>
  );
}
