import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real production app, you would:
    // 1. Validate the data (e.g. using Zod)
    // 2. Save to a database (MongoDB, Prisma, etc.)
    // 3. Send an email notification (Resend, Nodemailer)
    
    console.log("New Lead Received:", body);

    // Simulate database delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(
      { message: "Lead captured successfully", data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Failed to capture lead" },
      { status: 500 }
    );
  }
}
