// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.bossgarage.eu',
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
				'es': {
					label: 'Español',
					lang: 'es-ES',
				},
				'fr': {
					label: 'Français',
					lang: 'fr-FR',
				},
				'de': {
					label: 'Deutsch',
					lang: 'de-DE',
				},
				'it': {
					label: 'Italiano',
					lang: 'it-IT',
				},
				'tr': {
					label: 'Türkçe',
					lang: 'tr-TR',
				},
			},
			social: {
				github: 'https://github.com/bossgarage/docs',
				discord: 'https://discord.gg/bossgarage',
				youtube: 'https://youtube.com/@bossgarage',
				facebook: 'https://facebook.com/bossgarage',
				instagram: 'https://instagram.com/bossgarage',
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
