import { sendEmail } from "src/shared/utils/notificationService"; // Ensure this path is correct

(async () => {
  try {
    await sendEmail({
      to: "derek@rivx.live", // Replace with the intended recipient
      subject: "Welcome to LiveX",
      html: `
        <h1>Welcome to LiveX!</h1>
        <p>We are thrilled to have you join our platform.</p>
      `,
      text: "Welcome to LiveX! We are thrilled to have you join our platform.",
    });
    console.info("Test email sent successfully!");
  } catch (error) {
    console.error("Failed to send test email:", error);
  }
})();
