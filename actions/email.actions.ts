"use server";

import { resend } from "@/lib/resend";
import type { ActionResponse } from "@/types/email";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const FROM_EMAIL = "onboarding@resend.dev"; // Sandbox mode requirement

export async function sendContactEmail(
  formData: FormData,
): Promise<ActionResponse<{ id: string }>> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const budget = formData.get("budget") as string;
    const service = formData.get("service") as string;
    const details = formData.get("details") as string;

    // Validate required fields
    if (!name || !email || !details) {
      return {
        success: false,
        error: "Name, email, and message are required fields.",
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please provide a valid email address.",
      };
    }

    if (!ADMIN_EMAIL) {
      console.error("ADMIN_EMAIL environment variable is not set");
      return {
        success: false,
        error: "Server configuration error. Please try again later.",
      };
    }

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1e293b; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
            New Contact Form Submission
          </h1>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #475569; margin-top: 0;">Contact Details</h2>
            
            <p style="margin: 10px 0;">
              <strong style="color: #1e293b;">Name:</strong> 
              <span style="color: #64748b;">${name}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #1e293b;">Email:</strong> 
              <a href="mailto:${email}" style="color: #dc2626;">${email}</a>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #1e293b;">Budget Range:</strong> 
              <span style="color: #64748b;">${budget || "Not specified"}</span>
            </p>
            
            <p style="margin: 10px 0;">
              <strong style="color: #1e293b;">Service Interested In:</strong> 
              <span style="color: #64748b;">${service || "Not specified"}</span>
            </p>
          </div>
          
          <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
            <h3 style="color: #1e293b; margin-top: 0;">Message</h3>
            <p style="color: #475569; white-space: pre-wrap;">${details}</p>
          </div>
          
          <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
            <p>This email was sent from the Deep Dev Solutions contact form.</p>
          </footer>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: error.message || "Failed to send email. Please try again.",
      };
    }

    return {
      success: true,
      data: { id: data?.id || "" },
    };
  } catch (error) {
    console.error("sendContactEmail error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}

export async function subscribeToNewsletter(
  formData: FormData,
): Promise<ActionResponse<{ id: string }>> {
  try {
    const email = formData.get("email") as string;

    // Validate email
    if (!email) {
      return {
        success: false,
        error: "Email is required.",
      };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please provide a valid email address.",
      };
    }

    // Create contact using global contacts API (no audienceId required)
    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
    });

    if (error) {
      console.error("Resend contacts error:", error);

      // Handle duplicate contact gracefully
      if (error.message?.includes("already exists")) {
        return {
          success: true,
          data: { id: "existing" },
        };
      }

      return {
        success: false,
        error: error.message || "Failed to subscribe. Please try again.",
      };
    }

    return {
      success: true,
      data: { id: data?.id || "" },
    };
  } catch (error) {
    console.error("subscribeToNewsletter error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
