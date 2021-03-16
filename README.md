# Next.js with Netlify CMS Demo

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It also uses [Netlify CMS](https://www.netlifycms.org/) to provide the content manager interface.

See [`package.json`](package.json) for versions of libraries

## Getting Started

Initial install with

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

- Website UI: [http://localhost:3000](http://localhost:3000)
- Content Admin UI: [http://localhost:3000/manager](http://localhost:3000/manager)

## Included Features

**Next.js Additions**  
- Basic Page Component
- Direct path imports `import Component from 'src/components/Component'` (via `jsconfig.json`)

**Netlify CMS Additions**  
- Netlify CMS pre-configured for local vs production development (via `netlify-cms-config.js`)
- Pre-building content into single `.json` file for easy consumption (via `prebuild.js`)
- Data Transformations during pre-build (via `transformations.js`)
- Custom Netlify CMS widget included as sample extension (See [Credits Widget](src/components/widgets/credits))

## TODO

- [ ] Docs: Netlify CMS setup
- [ ] Docs: Deployment
- [ ] Netlify Fields: Basic blog setup