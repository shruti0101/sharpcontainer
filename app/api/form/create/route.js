import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      organsationName,
      productName,
      quantiy,
      message,
    } = body;

    if (
      !name ||
      !email ||
      !phone ||
      !organsationName ||
      !productName ||
      !quantiy ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "filled all details",
        },
        { status: 500 },
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Success",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 },
    );
  }
}
