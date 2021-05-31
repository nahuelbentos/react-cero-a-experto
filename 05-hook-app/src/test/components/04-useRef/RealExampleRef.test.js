import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en <RealExampleRef/>', () => {
  
  const wrapper = shallow( <RealExampleRef />);

  test('should de mostrarlo correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  });

  test('should de mostrar el componente <MultipleCustomHooks />', () => {

    
    const button = wrapper.find('button');
    button.simulate('click');

    expect( wrapper.find('MultipleCustomHooks').exists() ).toBeTruthy();
    
  });
  
  

});
