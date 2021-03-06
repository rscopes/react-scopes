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
import React              from "react";
import ReactDom           from "react-dom";
import RS, {withStateMap} from "..";

@RS(
	{
		@RS.withStateMap({ hello: "rScope" })
		test: RS.Store
	}
)
@RS.toProps("testRoot", "test")
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

@RS(
	{
		
		@RS.store
		test: { hello: "rScope to state" }
	}
)
@RS.toState("testRoot", "test")
class TestState extends React.Component {
	redraws = 0;
	
	render() {
		
		return <div className={"test"} style={{}}>
			{JSON.stringify(this.state.test)}
			{JSON.stringify(this.state.testRoot)}
			( redraws {this.redraws++} )
		</div>
	}
}

@RS(
	{
		@RS.store
		test: { hello: "propsToScope" }
	}
)
@RS.fromProps("testProp:test.myProp")
@RS.toProps("testRoot", "test")
class TestPropProp extends React.Component {
	redraws = 0;
	
	render() {
		
		return <div className={"test"} style={{}}>
			{JSON.stringify(this.props.test)}
			{JSON.stringify(this.props.testRoot)}
			( redraws {this.redraws++} )
		</div>
	}
}

@RS(
	{
		@RS.store
		testRoot: {
			root: "rScope",
			now : 0,
			$apply() {
				setTimeout(( tm ) => {
					this.setState({ now: this.nextState.now + 1 })
				}, 5000)
				setTimeout(( tm ) => {
					this.setState({ now: this.nextState.now + 1 })
				}, 5001)
				return this.nextState;
			}
		},
		
	}
)
class App extends React.Component {
	render() {
		
		return <div className={"app"} style={{
			width : "100%",
			height: "100%"
		}}>
			<TestProps/>
			<TestState/>
			<TestPropProp testProp={"yeah"}/>
		</div>
	}
}

function renderSamples() {
	document.body.innerHTML = '<div id="app"></div>';
	ReactDom.render(
		<App/>
		, document.getElementById('app'));
	
}

renderSamples()

if ( process.env.NODE_ENV !== 'production' && module.hot ) {
	module.hot.accept('.', renderSamples);
}