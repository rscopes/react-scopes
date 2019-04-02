
<p align="center"><img  width="192" src ="https://github.com/rScopes/rescope/raw/master/doc/assets/logo.svg?sanitize=true" /></p>

<p align="center" style="font-size:25px"><b>

# rScopes

</b></p>
<p align="center">Flexible State management system based on flux architecture, stores data components & inheritable scopes
</p>

<p align="center"><a href="https://github.com/rScopes/rescope/tree/master">
<img src="https://travis-ci.org/rScopes/rescope.svg?branch=master" alt="Build Status" /></a>
<a href="https://www.npmjs.com/package/rscopes">
<img src="https://img.shields.io/npm/v/rscopes.svg" /></a>
<img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" />

</p>

## rScopes What ?

RS is a flexible state management system inspired by ReactJS methods.<br/>
Quickly said, RS allow chaining, linking, and sequencing multiples redux-like stores while remaining in a serializable flux architecture.

RS is semantically and operationally stable; it does the work and has a coherent semantic system. <br/>
That said, it need tests, then to be optimized, and of course, docs and examples. <br/>

## What's it like?

Here some basics :

```jsx
import {
	reScope, scopeToProps, propsToScope
}                            from "rscopes";
import {
	withStateMap, asRef, asStore
}                            from "rescope-spells";

@reScope(
	{
		@asStore
		AppState: {
			someInitial : undefined,
			value      : undefined,
			
			doSomeGlobalMutation(value){
			    return {value};
			}
		}
	}
)
@scopeToProps("AppState")
class App extends React.Component {
	state            = {};
	
	render() {
		let {
			    $actions, AppState
		    }     = this.props,
		    state = this.state;
		return (
			<div className={ "App" }>
			    <Test id="someId"/>
			    <Test id="someId2"/>
			</div>
		);
	}
};

@reScope(
	{
		@asStore
		myRecord: { // having a dedicated "myRecord" store for every Test components
			id : undefined,
			$apply(data, state, changesInState){
			
                if (changesInState.id) // simplified
                    getSomeAsyncData(changesInState.id)
                    .then( data => this.push(data) );
                
                return data; 			
			}
		},
		
		@asStore
		myProcessedStuff: {
		    @asRef
			someData : "!myRecord.someRemoteData", // "!" mean required; 
		    @asRef
			appValue : "!AppState.value", 
			
			$apply(data, { someData, appValue }){
			
                return { value : someData[appValue] }; 			
			} 
		}
	}
)
@propsToScope(
	[
		"id:myRecord.id"// bind props.id to local scope/store
	])
@scopeToProps("myRecord", "myProcessedStuff")
class Test extends React.Component {
	state            = {};
	
	render() {
		let {
			    $actions, myProcessedStuff
		    }     = this.props,
		    state = this.state;
		return (
			<div className={ "Test" }>
			    { myProcessedStuff && myProcessedStuff.value }
			</div>
		);
	}
};


```

### Related packages

rScopes link the following packages :<br>

ReScope : [rescope](https://github.com/rScopes/rescope)<br>
React HOCs, decorators & tools : [react-rescope](https://github.com/rScopes/react-rescope)<br>
ReScope HOCs, decorators & tools : [rescope-spells](https://github.com/rScopes/rescope-spells)<br>

### Samples & bootstraps

The examples and bootstrap will come gradually [here](https://github.com/rScopes/rescope-samples)

[![HitCount](http://hits.dwyl.io/caipilabs/Caipilabs/rescope.svg)](http://hits.dwyl.io/caipilabs/Caipilabs/rescope)
<span class="badge-paypal"><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VWKR3TWQ2U2AC" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<a href="https://liberapay.com/n8tz/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
