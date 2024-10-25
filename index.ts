declare module "bun" {
  type BakeFramework = "react-server-components"

  type DevServerOptions = {
    routes: { pattern: string; entrypoint: string }[]
    framework: BakeFramework
  }

  export function wipDevServerExpectHugeBreakingChanges(options: DevServerOptions): void
}

import { wipDevServerExpectHugeBreakingChanges } from "bun"

wipDevServerExpectHugeBreakingChanges({
  // routes must be statically known so production
  // builds can prepare all required assets.
  routes: [{ pattern: "/", entrypoint: "./route.tsx" }],
  // for framework authors, attach your framework
  // via the interface described in `bake.d.ts`
  framework: "react-server-components",
})
