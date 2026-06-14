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
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the form schema
const FormSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  company_name: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone_number: z.string().min(7, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().optional(),
  newsletter: z.boolean(),
});

export function ContactForm() {
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);

  // Define form with strict type
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      full_name: "",
      company_name: "",
      email: "",
      phone_number: "",
      message: "",
      newsletter: false,
    },
  });

  // Submit handler with proper typed parameter
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setSubmissionMessage(null);
    setSubmissionStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          form_type: "Contact Form",
        }),
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || "Unable to submit the form.");
      }

      setSubmissionStatus("success");
      setSubmissionMessage("Thanks. Your message has been sent.");
      form.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to submit the form.";

      setSubmissionStatus("error");
      setSubmissionMessage(message);
    }
  }

  return (
    <Card className="w-full bg-white text-black rounded-[8px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl md:text-3xl font-bold">
          GET IN TOUCH
        </CardTitle>
        <p className="text-base">You can reach us anytime.</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      FULL NAME <span className="text-orange-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full name"
                        className="p-2 border-gray-500 rounded-[8px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      COMPANY NAME
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company name"
                        className="p-2 border-gray-500 rounded-[8px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      EMAIL <span className="text-orange-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        className="p-2 border-gray-500 rounded-[8px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium rounded-[8px]">
                      PHONE NUMBER <span className="text-orange-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+1(555)000-0000"
                        className="p-2 border-gray-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">
                    MESSAGE OR QUESTIONS
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Share your goals, questions, or specific needs with us..."
                      className="p-3 min-h-20 border-gray-500 rounded-[8px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border border-gray-500 mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm md:text-base font-light cursor-pointer">
                      Keep me updated with insights and industry news.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full text-white font-medium py-4 md:py-6 rounded-[8px] transition-all duration-300 hover:brightness-110 backdrop-blur-md"
              style={{
                background: "#12202F",
                backdropFilter: "blur(20px)",
              }}
            >
              {form.formState.isSubmitting ? "Sending..." : "Get in Touch"}
            </Button>
            {submissionMessage && (
              <p
                aria-live="polite"
                className={
                  submissionStatus === "success"
                    ? "text-sm text-green-700"
                    : "text-sm text-red-700"
                }
              >
                {submissionMessage}
              </p>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
