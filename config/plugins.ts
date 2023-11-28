export default ({ env }) => ({
	'navigation': { enabled: true },
	slugify: {
		enabled: true,
		config: {
			contentTypes: {
				page: {
					field: 'url',
					references: ['title'],
				},
				serie: {
					field: "slug",
					references: "title",
				},
				faq: {
					field: "slug",
					references: "title",
				},
				"post-category": {
					field: "slug",
					references: "title",
				},
				"faq-category": {
					field: "slug",
					references: "title",
				},
				"product-category": {
					field: "slug",
					references: "title",
				},
				post: {
					field: "slug",
					references: "title",
				},
				product: {
					field: "slug",
					references: "title",
				},



			},

		},
	},
	editorjs: {
		enabled: true,
		// resolve: path.resolve('./src/plugins/strapi-plugin-react-editorjs')
	},
	'color-picker': {
		enabled: true
	},
	'duplicate-button': true,
	seo: {
		enabled: true,
	},
	upload: {
		config: {
			breakpoints: {
				xlarge: 1920,
				large: 1000,
				medium: 750,
				small: 500,
				xsmall: 64,
				thumbnail: 140
			},
		},
	},
	graphql: {
		enabled: true,
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: false,
			depthLimit: 25,
			defaultLimit: 100,
			amountLimit: 100,
			maxLimit: 150,
			apolloServer: {
				tracing: false,

			},
		},
	}

});
