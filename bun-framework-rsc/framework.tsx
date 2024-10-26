// This file is unused by Bun itself, but rather is a tool for
// contributors to hack on `bun-framework-react` without needing
// to compile bun itself.
import type { Bake } from "bun"

export function react(): Bake.Framework {
  return {
    clientEntryPoint: require.resolve("./client.tsx"),
    serverEntryPoint: require.resolve("./server.tsx"),
    reactFastRefresh: true,
    serverComponents: {
      separateSSRGraph: true,
      serverRegisterClientReferenceExport: "registerClientReference",
      serverRuntimeImportSource: "react-server-dom-webpack/server",
    },
  }
}
