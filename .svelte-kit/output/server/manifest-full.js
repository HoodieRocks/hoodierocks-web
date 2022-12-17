export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-384x384.png","android-chrome-512x512.png","apple-touch-icon.png","bars-solid.svg","browserconfig.xml","discord.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","github.svg","indigo-white.svg","indigo.png","indigo.svg","instagram.svg","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest","terminal-solid.svg","waving-hand.webp"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".webmanifest":"application/manifest+json",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-00c3ad28.js","imports":["_app/immutable/start-00c3ad28.js","_app/immutable/chunks/index-9686e97b.js","_app/immutable/chunks/singletons-67f82f14.js","_app/immutable/chunks/index-d231d83a.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/creations",
				pattern: /^\/creations\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
