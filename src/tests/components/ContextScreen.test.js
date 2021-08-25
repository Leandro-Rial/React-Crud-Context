import { shallow } from "enzyme";
import ContextScreen from "../../components/ContextScreen";

describe('Pruebas en ContextScreen', () => {
    test('debe de mostrarse correctamente', () => {
        const wrapper = shallow(
            <ContextScreen />
        )

        expect(wrapper).toMatchSnapshot()
    });
});