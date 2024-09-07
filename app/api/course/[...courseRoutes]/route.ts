import { NextRequest, NextResponse } from "next/server";

interface Param {
  courseRoutes: string[];
}

// ! catch all routes

export function GET(req: NextRequest, { params }: { params: Param }) {
  console.log("courseRoutes", params.courseRoutes);
  return NextResponse.json({
    message: "hello world",
  });
}
