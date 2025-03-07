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
				'pt': {
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
					label: 'Honda ECUs',
					items: [
						{ label: 'Honduino K', items: [
							{ label: 'V1', link: '/honda/k/v1' },
							{ label: 'V1.1', link: '/honda/k/v1.1' },
						]},
						{ label: 'Honduino OBD0', items: [
							{ label: 'V1', link: '/honda/obd0/v1' },
							{ label: 'V1.1', link: '/honda/obd0/v1.1' },
						]},
						{ label: 'Honduino OBD1', items: [
							{ label: 'V2', link: '/honda/obd1/v2' },
							{ label: 'V3', link: '/honda/obd1/v3' },
							{ label: 'V3.1', link: '/honda/obd1/v3.1' },
							{ label: 'V4', link: '/honda/obd1/v4' },
							{ label: 'V4.1', link: '/honda/obd1/v4.1' },
							{ label: 'V4.2', link: '/honda/obd1/v4.2' },
							{ label: 'V4.3', link: '/honda/obd1/v4.3' },
						]},
						{ label: 'Honduino OBD1 DPFI', items: [
							{ label: 'V1', link: '/honda/obd1-dpfi/v1' },
						]},
						{ label: 'Honduino OBD2 DPFI', items: [
							{ label: 'V4', link: '/honda/obd2-dpfi/v4' },
							{ label: 'V5', link: '/honda/obd2-dpfi/v5' },
						]},
					],
				},
				{
					label: 'Nissan ECUs',
					items: [
						{ label: 'BossECU S13X', items: [
							{ label: 'V2', link: '/nissan/s13x/v2' },
							{ label: 'V3', link: '/nissan/s13x/v3' },
						]},
						{ label: 'BossECU S15X', items: [
							{ label: 'V1', link: '/nissan/s15x/v1' },
						]},
					],
				},
				{
					label: 'Opel ECUs',
					items: [
						{ label: 'BossECU C1XSE', items: [
							{ label: 'V1', link: '/opel/c1xse/v1' },
						]},
					],
				},
				{
					label: 'Bosch ECUs',
					items: [
						{ label: 'BossECU MSE6 (In development)', link: '#' },
						{ label: 'BossECU MSE8 (In development)', link: '#' },
					],
				},
				{
					label: 'PSA ECUs',
					items: [
						{ label: 'BossECU PSA NFW (In development)', link: '#' },
					],
				},
				{
					label: 'Universal ECUs',
					items: [
						{ label: 'BossECU 48', items: [
							{ label: 'V2.1b', link: '/universal/bossecu48/v2.1b' },
						]},
						{ label: 'Speeduino', items: [
							{ label: 'V0.4.3d', link: '/universal/speeduino/v0.4.3d' },
						]},
						{ label: 'Speedy Delphi', items: [
							{ label: 'V2', link: '/universal/speedy-delphi/v2' },
						]},
					],
				},
				{
					label: 'Accessories & Tools',
					items: [
						{ label: 'Igniters', items: [
							{ label: 'BossECU Igniter 4ch V1', link: '/igniters/4ch/v1' },
						]},
						{ label: 'Trigger Tools', items: [
							{ label: 'DPFI disc', link: '#' },
							{ label: 'Honda Cam Trigger (In development)', link: '#' },
						]},
					],
				},
			],
		}),
	],
});
