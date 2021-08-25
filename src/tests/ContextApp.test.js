import { shallow } from "enzyme";
import { UserReducer } from "../context/UserReducer";
import ContextApp from '../ContextApp'

describe('Prubas en ContextApp', () => {
    test('debe de mostarse correctamente', () => {
        const wrapper = shallow(
            <UserReducer>
                <ContextApp />
            </UserReducer>
        )

        expect(wrapper).toMatchSnapshot()
    });
});