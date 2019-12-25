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

const child_process = require('child_process');
const os            = require('os');
const shortid       = require('shortid');
const path          = require('path'),
      packageCfg    = JSON.parse(require('fs').readFileSync(__dirname + '/../package.json'));

import React                        from 'react';
import RS, {Scope, Store, scopeRef} from '../dist/react-scopes.js';
import {expect}                     from 'chai';
import Enzyme, {shallow, mount}     from 'enzyme';
import Adapter                      from 'enzyme-adapter-react-16';
import "./.setup"

Enzyme.configure({ adapter: new Adapter() });

var util  = require('util'),
    spawn = require('child_process').spawn,
    cmd;

describe(packageCfg.name + "@" + packageCfg.version + " : ", () => {
	let comps  = {},
	    scopes = {};
	describe("Basics", () => {
		it('it RS & bind simple store on react component state', function () {
			
			@RS(
				{
					test: class test extends Store {
						static state = { ok: true };
					}
				}
			)
			@RS.toState(
				{
					@scopeRef
					testAlias: "test"
				}
			)
			class MyComp extends React.Component {
				state = {};
				
				render() {
					let { testAlias = {} } = this.state;
					return <div className={'target'}>{testAlias.ok ? "ok" : 'ko'}</div>
				}
			}
			
			const wrapper = mount(<MyComp/>);
			expect(wrapper.find('.target').text()).to.equal("ok");
		});
		it('it RS & bind simple store on react component props', function () {
			
			@RS(
				{
					test: class test extends Store {
						static state = { ok: true };
					}
				}
			)
			@RS.toProps(
				{
					@scopeRef
					testAlias: "test"
				}
			)
			class MyComp extends React.Component {
				render() {
					let { testAlias = {} } = this.props;
					return <div className={'target'}>{testAlias.ok ? "ok" : 'ko'}</div>
				}
			}
			
			const wrapper = mount(<MyComp/>);
			expect(wrapper.find('.target').text()).to.equal("ok");
		});
		it('it react on store update', function ( done ) {
			this.timeout(Infinity);
			
			@RS(
				{
					test: class test extends Store {
						static state = { ok: false };
						static actions = {
							test: () => ({ ok: true })
						};
					}
				}
			)
			@RS.toProps(
				{
					@scopeRef
					testAlias: "test"
				}
			)
			class MyComp extends React.Component {
				render() {
					let { testAlias = {}, className } = this.props;
					return <div className={'target'}>{testAlias.ok ? "ok" : 'ko'}</div>
				}
			}
			
			class MyCompTest extends React.Component {
				render() {
					return <MyComp test={true}/>
				}
			}
			
			const wrapper = mount(<MyCompTest/>);
			
			wrapper.find(MyComp._originComponent).get(0).props.$actions.test()
			setTimeout(
				() => wrapper.find('.target').text() == "ok" ? done() : done(new Error("not updated !!")),
				50
			)
			
		});
	});
});