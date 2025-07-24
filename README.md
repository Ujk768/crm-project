# Recruitment Dashboard - Candidate Management System

A responsive and user-friendly dashboard built for a recruitment company to **view, edit, and manage candidate details** efficiently across all device types. Built with **React**, **SCSS**, **React Hook Form**, and **Zod**, this dashboard is designed with performance, accessibility, and user experience in mind.

---

## ✨ Features

- 🔍 **View Candidate Details**: Browse and search through candidate information.
- 📝 **Edit via Modal Form**: Update candidate data using a form presented in a modal (React Portal).
- 📱 **Responsive UI**: Optimized layout for both desktop and mobile.
- ✅ **Form Validation**: Integrated form validation using `React Hook Form` and `Zod`.
- 🚀 **Smooth UX**: API loaders and minimum height strategies reduce layout shifts and improve perceived performance.

---

## 📐 Responsive Design

Responsiveness is handled using **SCSS mixins** and custom breakpoint definitions:

```scss
$breakpoints: (
  "mobile-min": (min-width: 320px),
  "mobile-max": (max-width: 767px),
  "desktop-max": (max-width: 1199px),
  "desktop-min": (min-width: 1025px)
);

@mixin breakpoint($name) {
  @if map-has-key($breakpoints, $name) {
    @media screen and #{inspect(map-get($breakpoints, $name))} {
      @content;
    }
  }
}

This allows clean and consistent breakpoint-based styles:

scss
Copy
Edit
@include breakpoint("mobile-max") {
  .sidebar {
    display: none;
  }
}

🧩 Modal Form Design
Built with React Portal for rendering modals outside the DOM hierarchy.

Modal supports keyboard accessibility, ESC close, and click outside to close.

Form within the modal is:

Responsive and mobile-friendly.

Auto-focused for better usability.

Connected to validation logic using React Hook Form + Zod.



✅ Validations
Implemented using:

React Hook Form for form state management.

Zod for schema-based runtime validation.

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

⏳ Performance & UX Optimizations
Loading Spinners: Shown while waiting for API responses to prevent flickering and improve user trust.

Min Height Placeholders: Used to reserve space and avoid layout shift during async operations.

Lazy Loading: Large components and modals are lazy-loaded to improve initial load time.


🧰 Tech Stack
React (with hooks)

SCSS for styling and responsive design

React Hook Form for form management

Zod for validation

TypeScript for type safety

React Portal for modals


Sceenshots

Desktop

<img width="959" height="439" alt="image" src="https://github.com/user-attachments/assets/57c70eeb-15df-4634-a1d0-4109a3c7ae39" />

<img width="960" height="440" alt="image" src="https://github.com/user-attachments/assets/2e15610d-79a5-4e51-b66d-045e0dbd9819" />


Desktop with Edit Details

<img width="960" height="442" alt="image" src="https://github.com/user-attachments/assets/76a11dd9-9a05-4c80-8f3c-8aa0c51d24ba" />


Mobile

<img width="172" height="373" alt="image" src="https://github.com/user-attachments/assets/bdd7244f-e146-4417-9d71-28184ce25daf" />

<img width="166" height="371" alt="image" src="https://github.com/user-attachments/assets/693e9f2d-af79-4d80-9fd5-ac0fa09ef7bc" />




Mobile with Edit Details

<img width="168" height="358" alt="image" src="https://github.com/user-attachments/assets/3ee7cd5c-1150-4e8a-bb99-f67ff07c1362" />



Code Sandbox Preview URL: https://zd45cw-5173.csb.app/


👨‍💻 Author
Made with ❤️ by Utkarsh Kanade
