## My notes while developing

This repo is configured for a static GitHub Pages deployment (see `output: "export"` in `next.config.ts`)

```bash
npm run dev
```

Runs a development server for actively building the site with hot reload.



```bash
npm run build
```

Creates a production version of the site. Because of the `next.config.ts` setting with `output: "export"`, this command generates static HTML, JavaScript, CSS, and other assets inside `out/`. The `out/` folder is the deployable version of my portfolio.



```bash
npm run serve
```

Runs a simple static web server for the `out` directory. This simulates how GitHub Pages serves the deployed portfolio.