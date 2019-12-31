
<p align="center"><img  width="192" src ="https://github.com/rScopes/rescope/raw/master/doc/assets/logo.svg?sanitize=true" /></p>

<p align="center" style="font-size:25px"><b>

# react-scopes

</b></p>
<p align="center">Flexible State management system based on flux architecture, stores data components & inheritable scopes
</p>

<p align="center"><a href="https://travis-ci.org/rscopes/react-scopes">
<img src="https://travis-ci.org/rscopes/react-scopes.svg?branch=master" alt="Build Status" /></a>
<a href="https://www.npmjs.com/package/react-scopes">
<img src="https://img.shields.io/npm/v/react-scopes.svg" /></a>
<img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" />

</p>

## What's react-scopes ?

RS is a simple to use & flexible state management system inspired by ReactJS methods.<br/>
Quickly said, RS allow linking, scoping, and sequencing multiples async-able stores while remaining in a serializable flux architecture.

RS Stores look like "React components for data".<br>
Basically, they render determined data according theirs current state & propagate these data to the listening stores state .<br>

## Scopes ?

At first, scopes are like stores that would compose their state & data basing on the active stores they contain.<br/>
But they were made for flexibility so they have 3 "scalability dimensions" :

- They can contain hierarchically named scopes
- They can have parent scope ( in the js prototypes way )
- And they can have "mixed" scopes

## Minimal doc [here](DOC.MD)

## Samples [here](https://github.com/rscopes/react-scopes-samples)

## Simplified & limited sample :

```jsx harmony
import React       from "react";
import RS, {asRef, Scope} from "react-scopes";

const appScope = new Scope({

        // Here a simple store definition ( only instantiated if used )
        @RS.store
        config: {
        	// simple props define the initial state
            apiUrl: "https://somewhere.com",
            
            // functions defines actions
            // ( action return mutations / updates for the store state )
            changeApiUrl:({apiUrl})=>({apiUrl}),
            
            // when the state of this store change 
            // the $apply function update or replace the store result data
            // This resulting data object is the "public" value of this store
            // It *should* be predictable basing the state object for good async SSR  
            $apply(data={}, state, changesInState){
            	data.apiUrl = state.apiUrl+"/api";
            	return data;
            }
        },
    });

// Any App instance will use the same "appScope" Scope instance 
@RS(appScope)
class App extends React.Component {
    render() {
    	// MyComp will inherit appScope
        return <MyComp active={true}/>
    }
}

// Here; RS will instantiate the following scope definition 
// with any instance of the "MyComp" React Component 
@RS(
    {
        @RS.store
        master: {
            go: false,
        },
        @RS.store
        test  : {
        	// @asRef allow defining "references" to any reachable store in the scope
        	// Here "config" exist in the parent scope ("appScope") 
            @asRef
            config: "config",
            
            @asRef
            activateQuery: "master.go",
            
            // the $apply fn can update the data object using both sync and async methods
            $apply( data = {}, state, { activateQuery } ) {
                if ( activateQuery ) {
                	// All stores can call this.wait() & this.release()
                	// Quickly said, this.wait(optionalTokenForDebug) 
                	// will make this store & parent scope "unstable"
                	// so the store will not push result data to the listening stores
                	// when this.release(optionalTokenForDebug) is called the result data of the store is propagated
                    this.wait();
                    setTimeout(
                        tm => {
                            this.push({ state: "stable", value: "#asyncData2" });
                            this.release();
                        }, 500
                    );
                    return ({ state: "querying", value: undefined });
                   
                }
                return data;
            }
        },
        @RS.store
        test2 : {
            @asRef
            config: "config",
            @asRef
            activateQuery: "master.go",
            
            // Another async method consist on updating the data object dynamically
            $apply( data = {}, state, { activateQuery } ) {
                if ( activateQuery ) {
                    this.wait(); 
                    setTimeout(
                        tm => {
                            data.state = "stable";
                            data.value = "#asyncData1";
                            this.release();
                        }, 550
                    );
                    data.state = "querying";
                    data.value = undefined;
                }
                return data;
            }
        }
    }
)
// bind this.props.active values to master.go
@RS.fromProps("active:master.go")
// bind test & test2 to the props ( & mount any required store ) 
@RS.connect("test", "test2")
class MyComp extends React.Component {
    render() {
        let { test, test2 } = this.props;
        return <div className={'target'}>{test.value}-{test2.value}</div>
    }
}


```

## Notes

RS seems semantically & functionally stable. <br/>
It's free of memory leaks & have correct perfs.<br/>
<br/>
That's said RS was not written trying to be the faster/cleaner system one shot, but to :
- Have better scalability ( by making complex components independent )
- Easily define & reuse async data process 
- Make async SSR
- Avoid using tons of independents libs to manage the app state
- Easily serialize & restore full or partial app state
- etc

RS should be rewritten completely using a more functional approach ( but as react hook+context are close to make the job & RS is made probono it will not )

### About decorators

( well, like code-decorators )

These are stage-0 decorators because while the decorators spec has changed and is now stage-2, no transpiler has yet to implement these changes and until they do, this library won't either. Although the TypeScript documentation uses the phrase "Decorators are a stage 2 proposal for JavaScript" this is misleading because TypeScript still only implements the stage-0 version of the spec, which is very incompatible with stage-2 (as of this writing). If you concretely find that a compiler (babel, TS, etc) implement stage-2+, please do link me to the appropriate release notes! 🎈


This can be consumed by any transpiler that supports stage-0 of the decorators spec, like [babel.js](https://babeljs.io/) version 5. *Babel 6 [does not yet support decorators natively](https://phabricator.babeljs.io/T2645), but you can include [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) or use the [`applyDecorators()` helper](#applydecorators-helper).*

### Related packages

rScopes link the following packages :<br>

ReScope : [rescope](https://github.com/rscopes/rescope)<br>
ReScope HOCs, decorators & tools : [rescope-spells](https://github.com/rscopes/rescope-spells)<br>


<a href="https://www.buymeacoffee.com/6RMg8OQ" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

[![*](https://www.google-analytics.com/collect?v=1&tid=UA-82058889-1&cid=555&t=event&ec=project&ea=view&dp=%2Fproject%2Freact-scopes&dt=readme)](#)