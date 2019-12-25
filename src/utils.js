import is                     from 'is'
import React, {createContext} from "react";


export function walknSet( obj, path, value, stack ) {
	if ( is.string(path) )
		path = path.split('.');
	if ( !path.length )
		return value;
	else if ( path.length == 1 ) {
		obj[path[0]] = stack
		               ? [...(obj[path[0]] || []), value]
		               : value;
		return obj;
	}
	else
		return walknSet(
			obj[path[0]] =
				obj[path[0]] || {},
			path.slice(1),
			value, stack
		) && obj || obj;
}

export function walknGet( obj, path, isKey ) {
	if ( is.string(path) )
		path = path.split('.');
	return path.length
	       ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1))
	       : obj;
}

export function parseRef( _ref ) {
	let ref = _ref.split(':');
	ref[0]  = ref[0].split('.');
	ref[1]  = ref[1] && ref[1].split('.');
	return {
		pathFrom: ref[0],
		pathTo  : ref[1] || [ref[0][ref[0].length - 1]]
	};
}

export function isReactRenderable( obj ) {
	return obj.prototype instanceof React.Component || obj === React.Component || obj.$$typeof || is.fn(obj);
}

function shallowCompare( partialState, state ) {
	return !!Object.keys(partialState).find(key => (partialState[key] !== state[key]));
}