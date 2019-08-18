module.exports = {
	"default": {
		"rootFolder": "src",
		"basedOn"   : "Comp",
		"vars"      : {
			"rootAlias"   : "react-scopes",
			"externals"   : true,
			"entryPoint"  : "react-scopes/index.js",
			"production"  : true,
			"webpackPatch": {
				"devtool": "source-map"
			}
		},
		"extend"    : [
			"wi-layer-react-express"
		]
	},
	"staging": {
		"rootFolder": "src",
		"basedOn"   : "Comp",
		"vars"      : {
			"rootAlias"   : "react-scopes",
			"externals"   : true,
			"production"  : false,
			"webpackPatch": {}
		},
		"extend"    : [
			"wi-layer-react-express"
		]
	},
	"samples": {
		"rootFolder": "samples",
		"basedOn"   : "static",
		"vars"      : {
			"rootAlias"   : "Samples",
			"production"  : false,
			"targetDir"   : "dist.samples",
			"webpackPatch": {}
		},
		"extend"    : [
			"wi-layer-react-express"
		]
	}
}