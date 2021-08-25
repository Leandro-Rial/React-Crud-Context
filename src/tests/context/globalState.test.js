import { mount } from "enzyme";
import { UserContext, UserProvider } from "../../context/GlobalState";

describe('Pruebas en GlobalState', () => {
    test('debe de mostrarse correctamente', () => {
        const wrapper = mount(
            <UserContext.Provider>
                <UserProvider />
            </UserContext.Provider>
        )

        expect(wrapper).toMatchSnapshot()
    });
})
