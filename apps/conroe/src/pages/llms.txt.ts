import type { APIRoute } from "astro"
import { buildLlmsTxt } from "@carpet/seo"
import { site } from "../site.config"

export const GET: APIRoute = () =>
  new Response(buildLlmsTxt(site), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
