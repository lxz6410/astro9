import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://your-website.com',
    base: '/',
    output: 'static',
    build: {
        format: 'directory'
    },
    integrations: [],
});
