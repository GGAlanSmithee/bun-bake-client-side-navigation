# bun-bake

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.34. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


## Bugs

* using "use client" without any client-side code makes hydration fails
* default exported client-side component fails