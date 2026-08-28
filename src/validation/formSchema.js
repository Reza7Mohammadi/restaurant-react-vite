import * as yup from "yup";

export const formSchema = yup.object({
    name: yup
        .string()
        .trim()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

    email: yup
        .string()
        .trim()
        .required("Email is required")
        .email("Enter a valid email"),

    subject: yup
        .string()
        .trim()
        .required(),
    
    message : yup
        .string()
        .trim()
        .required()
});