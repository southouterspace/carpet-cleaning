/**
 * Edge entry for the site. Static pages never hit this code (see
 * run_worker_first in wrangler.jsonc); only /api/* does, and it is handed to
 * the shared lead Worker so the form posts same-origin.
 */
interface Env {
  ASSETS: Fetcher
  LEADS: Fetcher
}

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url)
    if (pathname.startsWith("/api/")) return env.LEADS.fetch(request)
    return env.ASSETS.fetch(request)
  },
} satisfies ExportedHandler<Env>
