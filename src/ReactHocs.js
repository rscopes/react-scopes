/*
 *   The MIT License (MIT)
 *   Copyright (c) 2019. Wise Wild Web
 *
 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 *
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 *
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 *
 *   @author : Nathanael Braun
 *   @contact : n8tz.js@gmail.com
 */

import is                     from 'is'
import React, {createContext} from "react";
import {Scope, Store}         from "rescope";
import spells                 from "rescope-spells";

const SimpleObjectProto = ({}).constructor;

const { Provider, Consumer } = createContext(Store.staticScope);

const classIcons = {
	toProps  : String.fromCharCode(0x26A1),
	fromProps: '',//String.fromCharCode(0x270D),
	rs       : String.fromCharCode(0xD83D, 0xDD17)
}

function walknSet( obj, path, value, stack ) {
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

function walknGet( obj, path, isKey ) {
	if ( is.string(path) )
		path = path.split('.');
	return path.length
	       ? obj[path[0]] && walknGet(obj[path[0]], path.slice(1))
	       : obj;
}

function parseRef( _ref ) {
	let ref = _ref.split(':');
	ref[0]  = ref[0].split('.');
	ref[1]  = ref[1] && ref[1].split('.');
	return {
		pathFrom: ref[0],
		pathTo  : ref[1] || [ref[0][ref[0].length - 1]]
	};
}

function isReactRenderable( obj ) {
	return obj.prototype instanceof React.Component || obj === React.Component || obj.$$typeof;
}

function shallowCompare( partialState, state ) {
	return !!Object.keys(partialState).find(key => (partialState[key] !== state[key]));
}


/**
 * Return a React "HOC" (High Order Component) that :
 *  - Inject & maintain the stores listed baseComponent::use and/or (use) in the
 * instances props.
 *  - Propag (scope) in the returned React Component context
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be
 *     searched ( default : the default ReScope::Scope::scopes.static scope )
 * @param use {array} the list of stores to inject from the current scope
 * @returns {ReScopeProvider}
 */
function scopeToProps( ...argz ) {
	let BaseComponent = (!argz[0] || (isReactRenderable(argz[0]))) && argz.shift(),
	    scope         = (!argz[0] || Scope.isScope(argz[0]) || is.fn(argz[0])) && argz.shift(),
	    use           = (!argz[0] || is.array(argz[0]) || argz[0] instanceof SimpleObjectProto) && argz.shift();
	
	if ( !use ) {
		use = [];
		while ( is.string(argz[0]) ) use.push(argz.shift());
	}
	
	if ( !(BaseComponent) ) {
		return function ( BaseComponent ) {
			return scopeToProps(BaseComponent, scope, use)
		}
	}
	
	let compName = BaseComponent.displayName || BaseComponent.name;
	
	
	let PropsProvider = scopeToState(class scopeToPropsProvider extends React.Component {
		static _originComponent = BaseComponent._originComponent || BaseComponent;
		static displayName      = classIcons.toProps + compName;
		
		render() {
			return <BaseComponent {...this.props}
			                      {...this.state}
			                      ref={this.props.forwardedRef}
			                      $dispatch={this.$dispatch}
			                      $actions={this.$actions}
			                      $scope={this.$scope}
			                      $stores={this.$stores}/>
		}
	}, is.fn(scope) && scope, use);
	
	
	let withRef              = React.forwardRef(( props, ref ) => {
		return <PropsProvider {...props} forwardedRef={ref}/>;
	});
	withRef.displayName      = classIcons.toProps + compName;
	withRef._originComponent = BaseComponent;
	withRef                  = (scope || !BaseComponent._originComponent) && reScope(!is.fn(scope) && scope)(withRef) || withRef;
	return withRef;
}

/**
 * Return a React "HOC" (High Order Component) that :
 *  - Inherit BaseComponent,
 *  - Inject & maintain the stores in BaseComponent::use and/or (use) in the instances
 * state.
 *  - Propag (scope) in the returned React Component context
 *
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param scope {ReScope.Scope|function} the propagated Scope where the stores will be
 *     searched
 * @param use {array} the list of stores injected from the current scope
 * @param additionalContext {Object} context to be propagated
 * @returns {ReScopeProvider}
 */
function scopeToState( ...argz ) {
	let BaseComponent = (!argz[0] || isReactRenderable(argz[0])) && argz.shift(),
	    scope         = (!argz[0] || Scope.isScope(argz[0]) || is.fn(argz[0])) && argz.shift(),
	    use           = (is.array(argz[0])) && argz.shift(),
	    stateMap      = !use && (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift(),
	    initialState  = {};
	
	if ( !use ) {
		use = [];
		while ( is.string(argz[0]) ) use.push(argz.shift());
	}
	
	if ( !(BaseComponent) ) {
		return function ( BaseComponent ) {
			return scopeToState(BaseComponent, scope, use, stateMap)
		}
	}
	
	let compName = BaseComponent.displayName || BaseComponent.name;
	
	use = [...(BaseComponent.use || []), ...(use || [])];
	stateMap && Scope.stateMapToRefList(stateMap, initialState, use);
	
	class ReScopeProvider extends BaseComponent {
		static _originComponent = BaseComponent._originComponent || BaseComponent;
		static defaultProps     = {
			...(BaseComponent.defaultProps || {}),
		};
		static displayName      = compName;
		
		_scopeWillUpdate = ( state ) => {
			// trigger update hook
			this.scopeWillUpdate && this.scopeWillUpdate(state, this.$stores);
			if ( this.applyScopeUpdate )
				state = this.applyScopeUpdate(state, this.$stores);
			this.setState(state);
		};
		
		constructor( p, ctx, q ) {
			super(p, ctx, q);
			
			if ( is.fn(scope) ) {
				this.$scope = scope(this, this.props, { rescope: p.$scope });
			}
			else
				this.$scope = p.$scope;
			
			if ( this.$scope && this.$scope.dead ) {
				console.error("ReScoping using dead scope !")
				this.$scope = null;
			}
			
			this.$stores  = this.$scope && this.$scope.stores;
			this.$actions = this.$scope && this.$scope.actions;
			if ( this.$scope && use.length ) {
				this.state = {
					...this.state,
					...initialState,
					...this.$scope.map(this, use, false)// don't bind now due to SSR
				}
			}
			else if ( !this.$scope )
				console.warn(`No Scope found in ${compName}`);
			
			//this.$dispatch = this.$scope && this.$scope.$dispatch.bind(this);
		}
		
		componentDidMount() {
			if ( use.length ) {
				this.$scope && this.$scope.bind(this._scopeWillUpdate, use, false)
			}
			super.componentDidMount && super.componentDidMount()
		}
		
		static getDerivedStateFromProps( props, state ) {
			let nScope = props.$scope;
			
			if ( nScope ) {
				if ( use.length )
					return nScope.map(this, use, false);
			}
			return null;
			
		}
		
		componentDidUpdate( props ) {
			let nScope = props.$scope;
			if ( nScope !== this.$scope ) {
				
				if ( is.fn(scope) )
					nScope = scope(this, this.props, { rescope: nScope });
				
				use.length && this.$scope.unBind(this._scopeWillUpdate, use);
				
				this.$scope = nScope;
				
				if ( this.$scope && this.$scope.dead ) {
					console.error("ReScoping using dead scope")
					this.$actions = this.$stores = this.$scope = null;
				}
				else {
					this.$actions = this.$scope.actions;
					this.$stores  = this.$scope.stores;
					use.length && nScope.bind(this._scopeWillUpdate, use);
				}
			}
		}
		
		componentWillUnmount() {
			super.componentWillUnmount && super.componentWillUnmount();
			if ( this.$scope && !this.$scope.dead ) {
				use.length && this.$scope.unBind(this._scopeWillUpdate, use);
			}
		}
	};
	
	return (scope || !BaseComponent._originComponent) && reScope(!is.fn(scope) && scope)(ReScopeProvider) || ReScopeProvider;
}

/**
 * Return a React "HOC" (High Order Component) that :
 *  - Render BaseComponent with new scope that inherit the given scope or context scope
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param storesMap {Object} the propagated Scope where the stores will be searched
 * @param parentScope {Scope} the propagated Scope where the stores will be searched
 * @param parentScopeId {string} the propagated Scope where the stores will be searched
 * @param additionalContext {Object} context to be propagated
 * @returns {*}
 */
function reScope( ...argz ) {
	let BaseComponent = (!argz[0] || isReactRenderable(argz[0])) && argz.shift(),
	    scope         = (!argz[0] || Scope.isScope(argz[0]) || is.fn(argz[0])) && argz.shift(),
	    scoped        = (!argz[0] || argz[0] instanceof SimpleObjectProto && !(Scope.isScope(argz[0]))) && argz.shift(),
	    scopeCfg      = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {};
	
	if ( !(BaseComponent) ) {
		return function ( BaseComponent ) {
			return reScope(BaseComponent, scope, scoped, scopeCfg)
		}
	}
	
	
	let compName = BaseComponent.displayName || BaseComponent.name;
	
	class ScopeProvider extends React.Component {
		static _originComponent = BaseComponent._originComponent || BaseComponent;
		static displayName      = classIcons.rs + compName;
		
		componentWillUnmount() {
			this.$scope && this.$scope.dispose("hoc");
		}
		
		render() {
			let forcedScope = scope || this.props.$scope;
			if ( forcedScope ) {
				if ( (!this.$scope || (forcedScope !== this.$scope.parent)) ) {
					this.$scope && this.$scope.dispose("hoc");
					this.$scope = forcedScope;
					this.$scope && this.$scope.retain("hoc");
				}
				return <Provider value={this.$scope}>
					<BaseComponent {...this.props}
					               ref={this.props.forwardedRef}
					               $actions={this.$scope.actions}
					               $scope={this.$scope}
					               $stores={this.$scope.stores}/>
				</Provider>;
			}
			return <Consumer>
				{
					nScope => {
						nScope = nScope || Store.staticScope;
						
						if ( nScope && (!this.$scope || nScope !== this.$scope.parent) ) {
							this.$scope && this.$scope.dispose("hoc");
							nScope      = new Scope(
								scoped || {},
								{
									autoDestroy: 'inherit',
									key        : compName,
									parent     : nScope,
									...scopeCfg
								}
							);
							this.$scope = nScope;
							this.$scope && this.$scope.retain("hoc");
						}
						return <Provider value={this.$scope}>
							<BaseComponent {...this.props}
							               ref={this.props.forwardedRef}
							               $actions={this.$scope.actions}
							               $scope={this.$scope}
							               $stores={this.$scope.stores}/>
						</Provider>;
					}
				}
			</Consumer>
		}
	}
	
	const withRef            = React.forwardRef(( props, ref ) => {
		return <ScopeProvider {...props} forwardedRef={ref}/>;
	});
	withRef.displayName      = classIcons.rs + compName;
	withRef._originComponent = BaseComponent;
	return withRef;
}

/**
 * Map specified props to
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param storesMap {Object} the propagated Scope where the stores will be searched
 * @param parentScope {Scope} the propagated Scope where the stores will be searched
 * @param parentScopeId {string} the propagated Scope where the stores will be searched
 * @param additionalContext {Object} context to be propagated
 * @returns {*}
 */
function propsToScope( ...argz ) {
	let BaseComponent = (!argz[0] || isReactRenderable(argz[0])) && argz.shift(),
	    scopedProps   = (!argz[0] || is.array(argz[0])) && argz.shift() || [];
	if ( !scopedProps.length ) {
		scopedProps = [];
		while ( is.string(argz[0]) ) scopedProps.push(argz.shift());
	}
	let scope    = (!argz[0] || Scope.isScope(argz[0])) && argz.shift(),
	    scopeCfg = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {};
	
	
	if ( !(BaseComponent) ) {
		return function ( BaseComponent ) {
			return propsToScope(BaseComponent, scopedProps, scope, scopeCfg)
		}
	}
	
	let compName = BaseComponent.displayName || BaseComponent.name,
	    refList  = scopedProps.map(parseRef);
	
	class ScopeProvider extends React.Component {
		static _originComponent = BaseComponent._originComponent || BaseComponent;
		static defaultProps     = {
			...(BaseComponent.defaultProps || {}),
		};
		static displayName      = classIcons.fromProps + compName;
		
		shouldComponentUpdate( nextProps, nextState, nextContext ) {
			return shallowCompare(nextProps, this.props);// todo: why the fuck it's required ?
		}
		
		render() {
			let props = this.props;
			refList.forEach(
				( ref ) => {
					if ( walknGet(props, ref.pathFrom) !== walknGet(props.$scope.state, ref.pathTo) )
						props.$scope.state[ref.pathTo[0]] = walknSet(
							{},
							ref.pathTo.slice(1),
							walknGet(props, ref.pathFrom)
						)
				}
			)
			return <BaseComponent {...props}
			                      ref={props.forwardedRef}/>
		}
	}
	
	
	let withRef              = React.forwardRef(( props, ref ) => {
		return <ScopeProvider {...props} forwardedRef={ref}/>;
	});
	withRef.displayName      = classIcons.fromProps + compName;
	withRef._originComponent = BaseComponent;
	withRef                  = (scope || !BaseComponent._originComponent) && reScope(!is.fn(scope) && scope)(withRef) || withRef;
	return withRef;
}

/**
 * Bind a component props to the specified store,
 * render with the specified store result data
 *
 * @param BaseComponent {React.Component} Base React Component ( default :
 *     React.Component )
 * @param storesMap {Object} the propagated Scope where the stores will be searched
 * @param parentScope {Scope} the propagated Scope where the stores will be searched
 * @param parentScopeId {string} the propagated Scope where the stores will be searched
 * @param additionalContext {Object} context to be propagated
 * @returns {*}
 */
function propsToStore( ...argz ) {
	let BaseComponent = (!argz[0] || isReactRenderable(argz[0])) && argz.shift(),
	    storeComp     = (!argz[0] || Store.isStore(argz[0])) && argz.shift() || Store,
	    storeName     = (!argz[0] || is.string(argz[0])) && argz.shift() || storeComp.displayName || "props",
	    scopeCfg      = (!argz[0] || argz[0] instanceof SimpleObjectProto) && argz.shift() || {},
	    scope         = (!argz[0] || Scope.isScope(argz[0])) && argz.shift();
	
	if ( !(BaseComponent) ) {
		return function ( BaseComponent ) {
			return propsToStore(BaseComponent,
			                    storeComp,
			                    storeName,
			                    scopeCfg,
			                    scope
			)
		}
	}
	
	let compName = BaseComponent.displayName || BaseComponent.name;
	
	class ScopeProvider extends React.Component {
		static _originComponent = BaseComponent._originComponent || BaseComponent;
		static displayName      = classIcons.fromProps + compName;
		
		componentWillUnmount() {
			this.$scope && this.$scope.dispose("hoc");
		}
		
		render() {
			return <Consumer>
				{
					nScope => {
						nScope = scope || this.props.$scope || nScope || Store.staticScope;
						if ( nScope && (!this.$scope || nScope !== this.$scope.parent) ) {
							this.$scope && this.$scope.dispose("hoc");
							nScope      = new Scope(
								{
									[storeName]: storeComp
								},
								{
									autoDestroy: 'inherit',
									key        : compName,
									parent     : nScope,
									...scopeCfg
								}
							);
							this.$scope = nScope;
							this.$scope && this.$scope.retain("hoc");
						}
						return <Provider value={this.$scope}>
							<BaseComponent {...this.props}
							               ref={this.props.forwardedRef}
							               $dispatch={this.$scope.dispatch}
							               $actions={this.$scope.actions}
							               $scope={this.$scope}
							               $stores={this.$scope.stores}/>
						</Provider>;
					}
				}
			</Consumer>
		}
	}
	
	let withRef              = React.forwardRef(( props, ref ) => {
		return <ScopeProvider {...props} forwardedRef={ref}/>;
	});
	withRef.displayName      = classIcons.fromProps + compName;
	withRef._originComponent = BaseComponent;
	withRef                  = (scope || !BaseComponent._originComponent) && reScope(!is.fn(scope) && scope)(withRef) || withRef;
	return withRef;
}

reScope.withScope    = reScope;
reScope.toState      = scopeToState;
reScope.scopeToState = scopeToState;
reScope.scopeToProps = scopeToProps;
reScope.toProps      = scopeToProps;
reScope.connect      = scopeToProps;
reScope.propsToScope = propsToScope;
reScope.fromProps    = propsToScope;
reScope.propsToStore = propsToStore;
reScope.Store        = Store;
reScope.Scope        = Scope;

const { asStore, asScope, asRef, withStateMap } = spells;

reScope.store        = asStore;
reScope.scope        = asScope;
reScope.ref          = asRef;
reScope.asStore      = asStore;
reScope.asScope      = asScope;
reScope.asRef        = asRef;
reScope.withStateMap = withStateMap;

export {
	reScope as default,
	reScope as RS,
	reScope,
	reScope as withScope,
	scopeToState,
	scopeToState as toState,
	scopeToProps,
	scopeToProps as toProps,
	scopeToProps as connect,
	propsToScope,
	propsToScope as fromProps,
	propsToStore,
	Store, Scope,
	asStore,
	asScope,
	asRef,
	withStateMap,
	asStore as store,
	asScope as scope,
	asRef as ref
};