// "use client";

// import { useRef, useState } from "react";
// import { ArrowRight, FileUp } from "lucide-react";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import ConsultationSuccess from "./ConsultationSuccess";

// const bookingSchema = z.object({
//   name: z
//     .string()
//     .trim()
//     .min(2, "Please enter your name.")
//     .max(80, "Name must be under 80 characters."),

//   phone: z
//     .string()
//     .trim()
//     .min(8, "Please enter a valid phone or WhatsApp number.")
//     .max(20, "Phone number must be under 20 characters.")
//     .regex(
//       /^\+?[0-9][0-9\s()-]{7,19}$/,
//       "Please use a valid phone or WhatsApp number."
//     ),

//   email: z
//     .string()
//     .trim()
//     .email("Please enter a valid email address.")
//     .max(120, "Email must be under 120 characters."),

//   spaceType: z.string().min(1, "Please choose a space type."),

//   message: z
//     .string()
//     .trim()
//     .min(12, "Please share a little more about your space.")
//     .max(1200, "Please keep your note under 1,200 characters."),
// });

// export default function ConsultationBooking() {
//   const [spaceType, setSpaceType] = useState("");
//   const [errors, setErrors] = useState({});
//   const [successOpen, setSuccessOpen] = useState(false);
//   const [fileName, setFileName] = useState("");

//   const formRef = useRef(null);

//   function handleFileChange(event) {
//     const file = event.target.files?.[0];

//     if (!file) {
//       setFileName("");

//       setErrors((current) => ({
//         ...current,
//         floorPlan: undefined,
//       }));

//       return;
//     }

//     const allowedTypes = [
//       "application/pdf",
//       "image/jpeg",
//       "image/png",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       event.target.value = "";
//       setFileName("");

//       setErrors((current) => ({
//         ...current,
//         floorPlan: "Please upload a PDF, JPG, or PNG file.",
//       }));

//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       event.target.value = "";
//       setFileName("");

//       setErrors((current) => ({
//         ...current,
//         floorPlan: "Please keep the file under 10 MB.",
//       }));

//       return;
//     }

//     setFileName(file.name);

//     setErrors((current) => ({
//       ...current,
//       floorPlan: undefined,
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const form = new FormData(event.currentTarget);

//     const result = bookingSchema.safeParse({
//       name: form.get("name"),
//       phone: form.get("phone"),
//       email: form.get("email"),
//       spaceType,
//       message: form.get("message"),
//     });

//     const floorPlan = form.get("floorPlan");
//     const nextErrors = {};

//     if (!result.success) {
//       for (const issue of result.error.issues) {
//         const field = issue.path[0];

//         if (field && !nextErrors[field]) {
//           nextErrors[field] = issue.message;
//         }
//       }
//     }

//     if (floorPlan instanceof File && floorPlan.size > 0) {
//       const allowedTypes = [
//         "application/pdf",
//         "image/jpeg",
//         "image/png",
//       ];

//       if (!allowedTypes.includes(floorPlan.type)) {
//         nextErrors.floorPlan =
//           "Please upload a PDF, JPG, or PNG file.";
//       } else if (floorPlan.size > 10 * 1024 * 1024) {
//         nextErrors.floorPlan =
//           "Please keep the file under 10 MB.";
//       }
//     }

//     setErrors(nextErrors);

//     if (Object.keys(nextErrors).length > 0) {
//       const firstInvalid =
//         event.currentTarget.querySelector(
//           "[aria-invalid='true']"
//         );

//       firstInvalid?.focus();

//       return;
//     }

//     setSuccessOpen(true);
//   }

//   function resetForm() {
//     formRef.current?.reset();

//     setSpaceType("");
//     setFileName("");
//     setErrors({});
//   }

//   return (
//     <>
//       <section
//         id="booking"
//         className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
//       >
//         <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:gap-20">
//           <div className="lg:col-span-4">
//             <p className="text-sm font-medium uppercase tracking-widest text-primary">
//               Request a consultation
//             </p>

//             <h2 className="mt-3 text-4xl font-medium text-foreground sm:text-5xl">
//               Let’s understand your space.
//             </h2>

//             <p className="mt-6 leading-relaxed text-muted-foreground">
//               Share only what is useful now. We’ll review your request and
//               continue the conversation on the contact details you provide.
//             </p>

//             <p className="mt-8 border-t border-border/70 pt-5 text-xs leading-relaxed text-muted-foreground">
//               Fields marked * are required. Your optional plan can be a PDF,
//               JPG, or PNG up to 10 MB.
//             </p>
//           </div>

//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             noValidate
//             className="space-y-8 lg:col-span-8"
//           >
//             <div className="grid gap-8 sm:grid-cols-2">
//               <FormField
//                 label="Name"
//                 name="name"
//                 error={errors.name}
//               >
//                 <Input
//                   id="name"
//                   name="name"
//                   autoComplete="name"
//                   maxLength={80}
//                   aria-invalid={Boolean(errors.name)}
//                   className="h-12 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:border-primary focus-visible:ring-0"
//                 />
//               </FormField>

//               <FormField
//                 label="Phone / WhatsApp"
//                 name="phone"
//                 error={errors.phone}
//               >
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   inputMode="tel"
//                   autoComplete="tel"
//                   maxLength={20}
//                   aria-invalid={Boolean(errors.phone)}
//                   className="h-12 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:border-primary focus-visible:ring-0"
//                 />
//               </FormField>
//             </div>

//             <div className="grid gap-8 sm:grid-cols-2">
//               <FormField
//                 label="Email"
//                 name="email"
//                 error={errors.email}
//               >
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   maxLength={120}
//                   aria-invalid={Boolean(errors.email)}
//                   className="h-12 rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:border-primary focus-visible:ring-0"
//                 />
//               </FormField>

//               <div className="space-y-3">
//                 <Label htmlFor="spaceType">
//                   Space type <span aria-hidden="true">*</span>
//                 </Label>

//                 <Select
//                   value={spaceType}
//                   onValueChange={setSpaceType}
//                 >
//                   <SelectTrigger
//                     id="spaceType"
//                     aria-invalid={Boolean(errors.spaceType)}
//                     className="h-12 rounded-none border-x-0 border-t-0 px-0 shadow-none focus:border-primary focus:ring-0"
//                   >
//                     <SelectValue placeholder="Choose one" />
//                   </SelectTrigger>

//                   <SelectContent>
//                     <SelectItem value="apartment">
//                       Apartment
//                     </SelectItem>

//                     <SelectItem value="independent-home">
//                       Independent home
//                     </SelectItem>

//                     <SelectItem value="plot-new-build">
//                       Plot / new build
//                     </SelectItem>

//                     <SelectItem value="office-workspace">
//                       Office / workspace
//                     </SelectItem>

//                     <SelectItem value="other">
//                       Other space
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>

//                 {errors.spaceType && (
//                   <p
//                     role="alert"
//                     className="text-sm text-destructive"
//                   >
//                     {errors.spaceType}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <FormField
//               label="What would you like to discuss?"
//               name="message"
//               error={errors.message}
//             >
//               <Textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 maxLength={1200}
//                 placeholder="Tell us what you are planning, changing, or trying to understand."
//                 aria-invalid={Boolean(errors.message)}
//                 className="min-h-36 resize-y rounded-none border-x-0 border-t-0 px-0 shadow-none focus-visible:border-primary focus-visible:ring-0"
//               />

//               <p className="text-xs text-muted-foreground">
//                 Please avoid sharing sensitive personal information.
//               </p>
//             </FormField>

//             <div className="space-y-3">
//               <Label htmlFor="floorPlan">
//                 Floor plan{" "}
//                 <span className="font-normal text-muted-foreground">
//                   — optional
//                 </span>
//               </Label>

//               <label
//                 htmlFor="floorPlan"
//                 className="flex min-h-20 cursor-pointer items-center justify-between gap-5 border-y border-border/70 py-4 transition-colors hover:border-primary"
//               >
//                 <span className="flex min-w-0 items-center gap-3">
//                   <FileUp
//                     className="h-5 w-5 shrink-0 text-primary"
//                     aria-hidden="true"
//                   />

//                   <span className="truncate text-sm text-muted-foreground">
//                     {fileName || "Choose a PDF, JPG, or PNG"}
//                   </span>
//                 </span>

//                 <span className="shrink-0 text-sm font-medium text-primary">
//                   Browse
//                 </span>
//               </label>

//               <Input
//                 id="floorPlan"
//                 name="floorPlan"
//                 type="file"
//                 accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
//                 onChange={handleFileChange}
//                 className="sr-only"
//               />

//               {errors.floorPlan && (
//                 <p
//                   role="alert"
//                   className="text-sm text-destructive"
//                 >
//                   {errors.floorPlan}
//                 </p>
//               )}
//             </div>

//             <Button
//               type="submit"
//               size="lg"
//               className="h-13 rounded-full px-7 text-base"
//             >
//               Request a consultation
//               <ArrowRight
//                 className="h-4 w-4"
//                 aria-hidden="true"
//               />
//             </Button>
//           </form>
//         </div>
//       </section>

//       <ConsultationSuccess
//         open={successOpen}
//         onOpenChange={setSuccessOpen}
//         resetForm={resetForm}
//       />
//     </>
//   );
// }

// function FormField({ label, name, error, children }) {
//   return (
//     <div className="space-y-3">
//       <Label htmlFor={name}>
//         {label} <span aria-hidden="true">*</span>
//       </Label>

//       {children}

//       {error && (
//         <p role="alert" className="text-sm text-destructive">
//           {error}
//         </p>
//       )}
//     </div>
//   );
// }
 export default function ConsultationBooking(){
  return (
    <>
    <h1> Hello</h1>
    </>
  )
 }