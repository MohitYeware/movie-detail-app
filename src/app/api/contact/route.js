import dbConnect from "@/utils/dbConnection";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    await dbConnect();
    await Contact.create(body);

    return NextResponse.json(
      { message: "Request sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server erro, please try again later !!" },
      { status: 500 }
    );
  }
}
