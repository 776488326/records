import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
	site: 'https://776488326.github.io',
	integrations: [
		starlight({
			title: '行万里路',
			description: '包含以下内容：Vue2，Vue3，React，框架，前端，计算机，数据结构，算法，网络',
			logo: {
				src: './public/favicon.svg',
			},
			social: {
				github: 'https://github.com/776488326',
			}
		}),
	],
})
