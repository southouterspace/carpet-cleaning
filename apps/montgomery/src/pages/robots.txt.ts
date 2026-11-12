import type { APIRoute } from "astro"
import { buildRobotsTxt } from "@carpet/seo"
import { site } from "../site.config"

export const GET: APIRoute = () =>
  new Response(buildRobotsTxt(site), { headers: { "Content-Type": "text/plain; charset=utf-8" } })
