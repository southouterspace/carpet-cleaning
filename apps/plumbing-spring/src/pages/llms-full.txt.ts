import type { APIRoute } from "astro"
import { buildLlmsFullTxt } from "@carpet/seo"
import { site } from "../site.config"

export const GET: APIRoute = () =>
  new Response(buildLlmsFullTxt(site), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
