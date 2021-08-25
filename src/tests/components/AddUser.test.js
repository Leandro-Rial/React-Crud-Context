import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import AddUser from "../../components/AddUser";
import { UserProvider } from "../../context/GlobalState";

describe('Pruebas en AddUser', () => {
    
    const wrapper = mount(
        <UserProvider>
            <MemoryRouter>
                <AddUser />
            </MemoryRouter>
        </UserProvider>
    )
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    });

    test('debe de realizar el submit', () => {
        wrapper.find("form").prop(onsubmit, {
            preventDefault(){}
        })
    });
});