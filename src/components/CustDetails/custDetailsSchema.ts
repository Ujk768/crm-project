import { z } from "zod";

export const custDetailsSchema = z.object({
  mobileNumber: z
    .string()
    .regex(/^\+?[0-9\s\-()]{10,}$/, "Valid phone number required"),
  email: z.string().email("Enter a valid email"),
  currentOrganization: z.string().min(1, "Required"),
  skills: z.string().min(1, "Required"),
  availableFrom: z.string().min(1, "Required"),
  currentSalary: z.string().min(1, "Required"),
  noticePeriod: z.string().min(1, "Required"),
  fullAddress: z.string().min(1, "Required"),
  resume: z.string().min(1, "Required"),
  totalExperience: z.string().min(1, "Required"),
  summary: z.string().min(1, "Required"),
  currentEmploymentStatus: z.string().min(1, "Required"),
  dateOfBirth: z.string().min(1, "Required"),
  relevantExperience: z.string().min(1, "Required"),
  salaryExpectation: z.string().min(1, "Required"),
  status: z.string().min(1, "Required"),
  salaryType: z.string().min(1, "Required"),
  languageSkills: z.string().min(1, "Required"),
});

export type CustDetailsFormData = z.infer<typeof custDetailsSchema>;
