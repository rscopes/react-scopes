# react-scopes

## Scopes & Stores in RS

### Stores

Stores Workflow

- A Store have it's state updated ( props or action has pushed state mutation, a source store had its data updated )
- If this state have the required & followed value
- The apply function push new data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores have theirs state updated and we go to step 1 until the whole scope is stable

See [RS Stores](https://github.com/rscopes/rescope/blob/master/doc/Store.md) for more infos

### Scopes

At first, scopes are like stores that would compose their state & data basing on the active stores they contain.<br/>
But Scopes were made for flexibility so they have 3 "scalability dimensions" :

- They can contain hierarchically named scopes
- They can have parent scope ( in the js prototypes way )
- And they can have "mixed" scopes

See [RS Scopes](https://github.com/rscopes/rescope/blob/master/doc/Scope.md) for more infos

#### Store & Scopes definition

##### Using spells / decorators

```jsx harmony

import React                                       from "react";
import RS, {asRef, asScope, asStore, withStateMap} from "react-scopes";
import {MyComplexStore}                            from "./from/somewhere";

// withScope will instantiate a dedicated scope when using this React Component
// it will inherit the scope & actions from the parents React Elements
@RS(
	{
		@asStore
		CoffeeMachine: {
			coffee: 100,
			sugar : 100,
			
			// actions return state mutation & can be call with props.$actions.*
			makeCoffee: () => ( state ) => ({
				coffee: state.coffee - 1,
				sugar : state.sugar - 1,
			})
		},
		
		// withStateMap hoc any Store to add values & refs to theirs state
		@withStateMap({
			              goFetchTaskIn: "developement"
		              })
		ThingsTodo: MyComplexStore,
		
		// Scope can contain sub scopes
		@asScope
		BrainScope: {
			@asStore
			workMachine: {
				cafeine : 0,
				workerId: undefined,
				
				// refs can targets any store value in the scope
				// when starting with "!" the store will not apply until the targeted value is !== undefined
				@asRef
				subject: "!ThingsTodo.stuff",
				work() {
					this.$actions.$parent.makeCoffee()
					
					return ( state ) => ({ cafeine: state.cafeine + 1 });
				},
				// the $apply fn update data basing the new state
				$apply( data, { cafeine }, changesInState ) {
					return {
						canWork: cafeine >= 2
					}
				}
			},
		},
		
		@asStore
		Manager: {
			// Connecting Manager will auto instantiate any referenced store 
			@asRef
			allOK          : "BrainScope.workMachine.canWork",
			@asRef
			shouldBuyCoffee: "CoffeeMachine.coffee",
			$apply( data, { allOK } ) {
				return {
					allOK
				}
			}
		},
		
	}
)
// this will connect any changes of props.workerId to BrainScope.workMachine.workerId
@RS.fromProps("workerId:BrainScope.workMachine.workerId")
// this will bind the result data of Manager to props.Manager
// * Store are recursively instantiated when referenced & are destroyed when listeners are removed
@RS.toProps("Manager")
class TestProps extends React.Component {
	//...
}
              
```

##### Using class


```jsx harmony

import React from "react";
import RS from "react-scopes";
import {CoffeeMachine, Brain} from "./stores/from/somewhere";

@RS(
        {
            appState: class appState extends RS.Store{
                static actions = {
                    incAction:()=>(state)=>({ someValues : state.someValues + 1 })
                    }
                };
                state = {
                    someValues : 0
                };
                apply(data, state, changesInDaState){
                	// All stores can call this.wait() & this.release()
                	// Quickly said, this.wait(optionalTokenForDebug) 
                	// will make this store & parent scope "unstable"
                	// so the store will not push it's result data to the listening stores
                	// when this.release(optionalTokenForDebug) is called the result data of the store is propagated
                	this.wait();
                	doSomeStuff().then(data=>{
                		// here the task can be canceled
                		this.push(data)
                		this.release();// will propag if number of wait() === number of release() calls
                	})
                	
                	return state; // apply return the new state by default
                }
                destroy(){
                    super.destroy();
                }
            }
        }
)
@RS.toProps("appState")
class MyComp extends React.Component {
    render() {
        let {appState} = this.props;
        return <div>{ appState.someValues }</div>;
    }
};

export default MyComp;
```

See [RS Stores](https://github.com/rscopes/rescope/blob/master/doc/Store.md) for more infos

## React - RS decorators (spells)

### RS ( aliases : withScope, reScope )

The @RS decorator will instantiate & associate a scope with each instance of MyComp.<br/>
This scope will inherit the scopes from the parents components & will be accessible by any child inheriting the react context.

```jsx harmony

import React from "react";
import RS from "react-scopes";
import {CoffeeMachine, Brain} from "./stores/from/somewhere";


@RS( // Will create & associate this scope with any instance of MyComp
    {
        Brain,
        CoffeeMachine
    }
)
@RS.connect("CoffeeMachine") // connect any CoffeeMachine update in props.CoffeeMachine
class MyComp extends React.Component {
    render() {
        let {CoffeeMachine} = this.props;
        return <div>{ CoffeeMachine.sugarMetrics }</div>;
    }
};

export default MyComp;
```

@RS will also work without inheriting & instantiating multiple scope instances<br/>
If an instanciated scope is passed as parameter, all this Component instances will share the same scope

```jsx harmony

import React from "react";
import RS from "react-scopes";
import {CoffeeMachine, Brain} from "./stores/from/somewhere";

// Will associate this scope instance with any instance of MyComp
// child element will inherit this same scope instance
@RS(
    new Scope(
        {
            appState: class appState extends Store{
                static actions = {
                    incAction(){
                        return { someValues : this.state.someValues + 1 };
                    }
                };
                state = {
                    someValues : 0
                };
                apply(data, state, changesInDaState){
                	// All stores can call this.wait() & this.release()
                	// Quickly said, this.wait(optionalTokenForDebug) 
                	// will make this store & parent scope "unstable"
                	// so the store will not push it's result data to the listening stores
                	// when this.release(optionalTokenForDebug) is called the result data of the store is propagated
                	this.wait();
                	doSomeStuff().then(data=>{
                		// here the task can be canceled
                		this.push(data)
                		this.release();// will propag if number of wait() === number of release() calls
                	})
                	
                	return state; // apply return the new state by default
                }
            }
        }
    )
)
@RS.connect("appState")
class MyComp extends React.Component {
    render() {
        let {appState} = this.props;
        return <div>{ appState.someValues }</div>;
    }
};

export default MyComp;
```

## RS.connect, RS.toProps & scopeToProps

Will bind values from the scope to the component props<br>
Path can contain store id, scope id, & sub json property

Ex :
- anotherStore.myValue
- mySubScope.myStore:myAlias

```jsx harmony

import React from "react";
import RS from "react-scopes";
import {CoffeeMachine, Brain} from "./stores/from/somewhere";


@RS( // Will create & associate this scope with any instance of MyComp
    {
        Brain,
        CoffeeMachine
    }
)
@RS.connect("CoffeeMachine") // connect any CoffeeMachine update in props.CoffeeMachine
class MyComp extends React.Component {
    render() {
        let {CoffeeMachine} = this.props;
        return <div>{ CoffeeMachine.sugarMetrics }</div>;
    }
};

export default MyComp;
```

```jsx harmony

import React from "react";
import RS from "react-rescope";

@RS.connect(
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

### RS.toState, scopeToState

Will bind values from the scope to the component state

```jsx harmony
import React from "react";
import RS from "react-rescope";

@RS.toState("appState", "appState.someSubValue:asAnyAlias")
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

## Dispatching actions, mutations & calling stores functions

```jsx
import React from "react";
import RS, {Scope, Store} from "react-scopes";

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

@RS.toProps(myScope, ["appState"]) // inheriting the scope
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
