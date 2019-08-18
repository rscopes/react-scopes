module.exports = {
  "default": {
    "rootFolder": "src",
    "basedOn": "Comp",
    "vars": {
      "rootAlias": "react-scopes",
      "externals": true,
      "entryPoint": "react-scopes/index.js",
      "production": true,
      "webpackPatch": {}
    },
    "extend": [
      "wi-layer-react-express"
    ]
  },
  "staging": {
    "rootFolder": "src",
    "basedOn": "Comp",
    "vars": {
      "rootAlias": "react-scopes",
      "externals": true,
      "webpackPatch": {}
    },
    "extend": [
      "wi-layer-react-express"
    ]
  },
  "samples": {
    "rootFolder": "samples",
    "basedOn": "static",
    "vars": {
      "rootAlias": "Samples",
      "targetDir": "dist.samples",
      "webpackPatch": {}
    },
    "extend": [
      "wi-layer-react-express"
    ]
  }
}