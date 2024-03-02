import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {

  console.log("hey")
  
  return NextResponse.json({message: "Hey"})

}