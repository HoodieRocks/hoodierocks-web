export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","bars-solid.svg","browserconfig.xml","discord.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","github.svg","indigo-white.svg","indigo.png","indigo.svg","instagram.svg","mstile-150x150.png","robots.txt","site.webmanifest","terminal-solid.svg","waving-hand.webp"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".webmanifest":"application/manifest+json",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-4a99a6fd.js","imports":["_app/immutable/start-4a99a6fd.js","_app/immutable/chunks/index-1c56a37f.js","_app/immutable/chunks/singletons-827566c2.js","_app/immutable/chunks/preload-helper-9b728935.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
