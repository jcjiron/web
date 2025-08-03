import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message, phone } = await request.json() // Add 'phone' here

    const resend = new Resend(process.env.RESEND_API_KEY)

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Replace with your verified domain if available
      to: ["jcjiron4@gmail.com"], // Changed to the allowed testing email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p> {/* Add this line */}
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Error processing form submission" }, { status: 500 })
  }
}
