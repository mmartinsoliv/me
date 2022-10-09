import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import WindiCSS from 'vite-plugin-windicss';
import Icons from 'unplugin-icons';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	vite: {
		plugins: [VitePWA({
			registerType: 'autoUpdate',
			manifest: { 
              short_name: 'Matheus Martins',
			  name: 'Matheus Martins | Blog',
			  start_url: '/'
			}
		}), WindiCSS(), Icons]
	}
});
