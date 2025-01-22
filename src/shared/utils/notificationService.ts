import sgMail from "@sendgrid/mail";

// Use the API key from environment variables
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  throw new Error("SendGrid API key is missing. Check your .env.local file.");
}

sgMail.setApiKey(SENDGRID_API_KEY);

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string; // Optional plain text version
}

export async function sendEmail(options: EmailOptions) {
  const msg = {
    to: options.to,
    from: process.env.SENDGRID_FROM_EMAIL || "system@rivx.live", // Use verified sender
    subject: options.subject,
    html: options.html,
    text: options.text || "",
  };

  try {
    await sgMail.send(msg);
    console.info("Email sent successfully to:", options.to);
  } catch (error: unknown) {
    console.error("Error sending email:", error);

    if (error instanceof Error) {
      console.error("Error message:", error.message);
    }

    // Check if it's a SendGrid-specific error with a response body
    if ((error as any)?.response?.body) {
      console.error("SendGrid error response:", (error as any).response.body);
    }

    throw new Error("Failed to send email.");
  }
}
