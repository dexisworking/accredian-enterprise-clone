import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  company?: string;
  teamSize?: string;
  goals?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as LeadPayload;

  if (!body.name || !body.email || !body.company || !body.teamSize || !body.goals) {
    return NextResponse.json(
      { message: "Please complete all required fields." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    message: `Thanks ${body.name.split(" ")[0]}, your request has been received.`,
    submittedAt: new Date().toISOString(),
  });
}
