import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Piyawat krueaprasoet",
    studentId: "660612152",
  });
};
