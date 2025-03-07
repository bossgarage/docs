// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://viruxe.github.io',
	integrations: [
		starlight({
			title: 'Boss Garage',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				'pt-pt': {
					label: 'Português',
					lang: 'pt-PT',
				},
			},
			social: {
				github: 'https://github.com/bossgarage/docs',
			},
			sidebar: [
				{
					label: 'Honda',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Honduino OBD2 DPFI - V5', slug: 'honda/honduino-obd2-dpfi' },
					],
				}
			],
		}),
	],
});
