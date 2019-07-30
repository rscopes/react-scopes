# rScopes

## Scopes & Stores in RS

### Stores

### Scopes

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
