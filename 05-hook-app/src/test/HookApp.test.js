import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Pruebas en HookApp', () => {

  const wrapper = shallow(<HookApp />);

  test('should de hacer match con snapshot', () => {
    expect(wrapper).toMatchSnapshot();
    
  })
  
  
})
