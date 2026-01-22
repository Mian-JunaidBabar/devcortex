import { Resend } from "resend";


if (!process.env.RESEND_API_KEY) {
  throw new Error("Something went wrong");
}

export const resend = new Resend(process.env.RESEND_API_KEY);
