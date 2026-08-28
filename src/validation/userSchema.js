import * as yup from "yup";


/* ================================
   LOGIN SCHEMA
================================ */

export const loginSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("Username is required"),

  password: yup
    .string()
    .required("Password is required"),
});


/* ================================
   REGISTER SCHEMA
================================ */

export const registerSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Enter a valid email"),

  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),

  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf(
      [yup.ref("password")],
      "Passwords must match"
    ),
});