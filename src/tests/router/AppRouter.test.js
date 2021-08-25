import { shallow } from "enzyme";
import AppRouter from "../../router/AppRouter";

describe('Pruebas en AppRouter', () => {
    test('debe de mostar el AppRouter correctamente', () => {
        const wrapper = shallow(
            <AppRouter />
        )

        expect(wrapper).toMatchSnapshot()
    });
});