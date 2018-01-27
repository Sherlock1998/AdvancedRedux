import {renderComponent,expect} from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests
describe('App',()=>{
  //Use 'it' to test a single attribute of a target
  it('should show the correct text',()=>{
    const component = renderComponent(App);
    //Use 'expect' to make an assertion of a target
    expect(component).to.contain('React simple starter');
  })
})
