import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";

export async function GET(request: NextRequest) {
  const { data, error } = await supabase.from("short_forms").select("*");
  return NextResponse.json(data);
}
