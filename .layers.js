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
			"lpack-react"
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
			"lpack-react"
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
			"lpack-react"
		]
	}
}