declare module "bun" {
  type BakeFramework = "react-server-components"

  type DevServerOptions = {
    routes: { pattern: string; entrypoint: string }[]
    framework: BakeFramework
  }

  export function wipDevServerExpectHugeBreakingChanges(options: DevServerOptions): void
}

import { wipDevServerExpectHugeBreakingChanges } from "bun"
import { react } from "./bun-framework-rsc"

wipDevServerExpectHugeBreakingChanges({
  // routes must be statically known so production
  // builds can prepare all required assets.
  routes: [
    { pattern: "/", entrypoint: "./pages/home/home.route.tsx" },
    { pattern: "/about", entrypoint: "./pages/about/about.route.tsx" },
  ],
  // for framework authors, attach your framework
  // via the interface described in `bake.d.ts`
  framework: react(), // "react-server-components",
})
