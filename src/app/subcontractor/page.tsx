"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { animated, useSpring } from "@react-spring/web";

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
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

const AnimatedDiv = animated("div");
// Define the form schema
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

export default function Page() {
  // Define form with strict type
  const form = useForm<z.infer<typeof SubcontractorFormSchema>>({
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

  // Add state for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [submissionMessage, setSubmissionMessage] = useState<string | null>(
    null,
  );

  // Submit handler with proper typed parameter
  async function onSubmit(values: z.infer<typeof SubcontractorFormSchema>) {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    setSubmissionMessage(null);
    console.log("Subcontractor form submitted:", values);

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
        setSubmissionMessage(result.message || "Form submitted successfully!");
        form.reset(); // Reset form fields
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(result.message || "An error occurred.");
        // Optionally, you can set form errors here if your API returns field-specific errors
        // if (result.errors) {
        //   Object.keys(result.errors).forEach((key) => {
        //     form.setError(key as keyof z.infer<typeof SubcontractorFormSchema>, {
        //       type: 'manual',
        //       message: result.errors[key]?._errors.join(', '),
        //     });
        //   });
        // }
      }
    } catch (error) {
      setSubmissionStatus("error");
      const message =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";
      setSubmissionMessage(`Failed to submit form: ${message}`);
    }
    setIsSubmitting(false);
  }

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const headingAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: {
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateX(0)" : "translateX(-50px)",
    },
    config: { tension: 170, friction: 24 },
    delay: 100,
  });

  const subheadingAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-50px)" },
    to: {
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateX(0)" : "translateX(-50px)",
    },
    config: { tension: 170, friction: 24 },
    delay: 400,
  });

  return (
    <div className="relative z-10 w-full bg-red-2009 py-32 px-4 md:px-0">
      {/* Orange gradient background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-orange-500/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-500/10 to-transparent" />
      </div>

      <div className="w-full text-black px-4 sm:px-8 md:px-16 lg:px-32 shadow-none border-none rounded-2xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl md:text-3xl font-bold text-center text-white">
            <AnimatedDiv style={headingAnimation}>
              SUBCONTRACTOR RESOURCES & PRE-QUALIFICATION
            </AnimatedDiv>
          </CardTitle>

          <AnimatedDiv style={subheadingAnimation}>
            <p className="text-base text-center text-white">
              Fill out the form below to be added to our list of bidders.
            </p>
          </AnimatedDiv>
        </CardHeader>
        <CardContent className="pt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  STEP 1
                </h2>
                <p className="text-sm text-gray-600 mb-6 text-white">
                  Company Information
                </p>
                {/* Submission Status Messages */}
                {submissionStatus === "success" && submissionMessage && (
                  <div className="mb-4 p-3 rounded-md bg-green-100 border border-green-400 text-green-700">
                    {submissionMessage}
                  </div>
                )}
                {submissionStatus === "error" && submissionMessage && (
                  <div className="mb-4 p-3 rounded-md bg-red-100 border border-red-400 text-red-700">
                    {submissionMessage}
                  </div>
                )}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="company_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            COMPANY NAME{" "}
                            <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Company name"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            CONTACT <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Contact name"
                              className="p-2 z-50 border-gray-500 !bg-white rounded-[8px] h-10"
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
                      name="phone_number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            PHONE NUMBER{" "}
                            <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Phone number"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fax"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            FAX
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Fax number"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
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
                          <FormLabel className="text-sm font-medium text-white">
                            EMAIL <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email address"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="union_status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            UNION STATUS{" "}
                            <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Union status"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
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
                      name="bidding_area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            WHICH AREA ARE YOU LOOKING TO BID?{" "}
                            <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Bidding area"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="bondable"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            ARE YOU BONDABLE?{" "}
                            <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Bondable status (e.g., Yes/No, Amount)"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
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
                    name="expertise"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">
                          DIVISION AND AREA OF EXPERTISE{" "}
                          <span className="text-orange-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Division and area of expertise"
                            className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <hr className="border-dashed border-gray-400" />

              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  STEP 2
                </h2>
                <p className="text-sm text-gray-600 mb-6 text-white">
                  Company Mailing Address
                </p>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="street_address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">
                          STREET ADDRESS{" "}
                          <span className="text-orange-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Street address"
                            className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address_line_2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">
                          ADDRESS LINE 2
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Address line 2"
                            className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            CITY <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="City"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="state_province_region"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            STATE / PROVINCE / REGION{" "}
                            <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="State/province/region"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
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
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            COUNTRY <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Country"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="postal_zip_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">
                            POSTAL / ZIP CODE{" "}
                            <span className="text-orange-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Postal/zip code"
                              className="p-2 border-gray-500 !bg-white rounded-[8px] h-10 z-50"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full text-white font-medium py-4 md:py-6 rounded-full transition-all duration-300 hover:brightness-110 backdrop-blur-md"
                style={{
                  background: "linear-gradient(0deg, #A1480E 0%, #F16407 100%)",
                  backdropFilter: "blur(20px)",
                }}
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </div>
    </div>
  );
}
