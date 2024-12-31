import { NextRequest } from "next/server";
import { handlers } from "@hack-finder/auth";

export const runtime = "edge";

export const POST = async (req: NextRequest) => {
  return handlers.POST(req);
};

export const GET = async (
  req: NextRequest,
  props: { params: { nextauth: string[] } },
) => {
  // Every other request just calls the default handler
  return handlers.GET(req);
};
