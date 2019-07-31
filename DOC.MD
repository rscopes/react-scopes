# rScopes

## Scopes & Stores in RS

See [rescope](https://github.com/rscopes/rescope) for more infos

### Stores

Stores Workflow

- A Store have it's state updated ( props or action has pushed state mutation, a source store had its data updated )
- If this state have the required & followed value
- The apply function push new data in an async or sync way
- The store is stabilized and (if there is new data) propagated
- listening stores have theirs state updated and we go to step 1 until the whole scope is stable

### Scopes

RS scopes are like stores that would compose their state & data basing on the scopes and stores they contain.

#### Store & Scopes definition

##### Using spells

```jsx harmony

// withScope will instantiate a dedicated scope when using this React Component
// it will inherit the scope & actions from the parents React Elements
@withScope(
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
@propsToScope("workerId:BrainScope.workMachine.workerId")
// this will bind the result data of Manager to props.Manager
// * Store are recursively instantiated when referenced & are destroyed when listeners are removed
@scopeToProps("Manager")
class TestProps extends React.Component {
	//...
}
              
```

##### Using class

See [rescope](https://github.com/rscopes/rescope)

## React - RS decorators (spells)

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

@withScope will also work without inheriting & instantiating multiple scope instances

```jsx harmony

import React from "react";
import {withScope, scopeToProps} from "rscopes";
import {CoffeeMachine, Brain} from "./stores/from/somewhere";

// Will associate this scope instance with any instance of MyComp
// child element will inherit this same scope instance
@withScope( 
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
@scopeToProps("appState")
class MyComp extends React.Component {
    render() {
        let {appState} = this.props;
        return <div>{ appState.someValues }</div>;
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

## Dispatching actions, mutations & calling stores functions

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
