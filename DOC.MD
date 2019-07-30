# rScopes

## Scopes & Stores in RS

### Stores

#### Stores Workflow

- A Store have it's state updated ( props or action has pushed state mutation, a source store had its data updated )
- If this state have the required & followed value
- The apply function push new data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores have theirs state updated and we go to step 1 until the whole scope is stable

#### Store definition

##### Using spells

```jsx harmony
import React    from "react";
import {withScope, withStateMap, asStore, asScope, Store} from "..";

@withScope(
	{
	    @asStore
	    CoffeeMachine:{
	    	coffee:100,
	    	sugar :100,
	    	makeCoffee(){
	    		let state=this.nextState;
	    		return {}
	    	}
	    },

		@withStateMap({ hello: "rScopes" })
		test: Store
	}
)
class TestProps extends React.Component {
	redraws = 0;

	render() {

		return <div className={"test"} style={{}}>
			{JSON.stringify(this.props.test)}
			{JSON.stringify(this.props.testRoot)}
			( redraws {this.redraws++} )
		</div>
	}
}
```

##### Using class

### Scopes

RS scopes are like stores that would compose their state & data basing on the scopes and stores they contain.

### Structuring Scopes

## Basic React - RS 

### withScope

The @withScope decorator will instantiate & associate the given scope with each instance of MyComp.<br/>
The scope instance will be injectable in any child inheriting the react context.   

```jsx harmony

import React from "react";
import {withScope, scopeToProps} from "rscopes";
import {CoffeeMachine, Brain} from "./stores/from/somewhere";


@withScope( // Will create & associate this scope with any instance of MyComp
    {
        Brain,
        CoffeeMachine
    }
)
@scopeToProps("CoffeeMachine") // connect any CoffeeMachine update in props.CoffeeMachine
class MyComp extends React.Component {
    render() {
        let {CoffeeMachine} = this.props;
        return <div>{ CoffeeMachine.sugarMetrics }</div>;
    }
};

export default MyComp;
```

## scopeToProps

```jsx harmony

import React from "react";
import {withScope, scopeToProps} from "rscopes";
import {CoffeeMachine, Brain} from "./stores/from/somewhere";


@withScope( // Will create & associate this scope with any instance of MyComp
    {
        Brain,
        CoffeeMachine
    }
)
@scopeToProps("CoffeeMachine") // connect any CoffeeMachine update in props.CoffeeMachine
class MyComp extends React.Component {
    render() {
        let {CoffeeMachine} = this.props;
        return <div>{ CoffeeMachine.sugarMetrics }</div>;
    }
};

export default MyComp;
```


## scopeToProps

Will bind values from the scope to the component props<br>
Reference format : (($storeId|$scopeId)\.)+($pathKey)*(\:$alias)?

Ex : 
- anotherStore.myValue 
- mySubScope.myStore:myAlias

```jsx harmony

import React from "react";
import {scopeToProps} from "react-rescope";


@scopeToProps( 
	// bind all CoffeeMachine data update to this.props.CoffeeMachine
	"CoffeeMachine", 
	// bind the BrainMachine.sugarMetrics values to this.props.brainSugarMetrics 
	"BrainMachine.sugarMetrics:brainSugarMetrics"
) 
class MyComp extends React.Component {
    render() {
        let {CoffeeMachine, brainSugarMetrics} = this.props;

        return (
            <div>
                {
                    CoffeeMachine.sugarMetrics
                } /
                {
                    brainSugarMetrics
                }
            </div>
        );
    }
};

export default MyComp;
```

### scopeToState

Will bind values from the scope to the component state

```jsx harmony
import React from "react";
import {scopeToState} from "react-rescope";

@scopeToState("appState", "appState.someSubValue:asAnyAlias")
class MyComp extends React.Component {
    render() {
        let {appState, asAnyAlias} = this.state,
            {$actions}   = this;

        return (
            <div>
                <h1>MyComp</h1>
                {
                    appState.someValues
                }
                {
                    asAnyAlias
                }
            </div>
        );
    }
};

export default MyComp;
```

## Dispatching actions, mutations & calling stores functions

### Using $actions

The $actions object contain all the available actions as binded functions, it's provided :
- in the props for components using scopeToProps
- in the instance object (this) for components using scopeToState

Calling $actions will trigger the specified action on every stores accessible in the current scope.

```jsx
import React from "react";
import {scopeToProps, Scope, Store} from "react-rescope";

let myScope = new Scope(
    {
        appState: class appState extends Store{
            static actions = {
                incAction(){
                    return { someValues : this.state.someValues + 1 };
                }
            }
            static state = {
                someValues : 0
            }
        }
    }
)

@scopeToProps(myScope, ["appState"]) // inheriting the scope
class MyComp extends React.Component {
    render() {
        let {appState, $stores, $actions} = this.props;

        return (
            <div onClick={$actions.incAction}>
                <h1>MyComp</h1>
                {
                    appState.someValues
                }

            </div>
        );
    }
};

export default MyComp;
```
