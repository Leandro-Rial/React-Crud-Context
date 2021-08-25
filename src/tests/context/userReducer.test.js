import { UserReducer } from "../../context/UserReducer";
import { types } from '../../types/types';

describe('Pruebas en UserReducer', () => {
    test('debe de retornar el estado por defecto', () => {
        const state = UserReducer({users: []}, {})

        expect(state).toEqual({ users: [] })
    });

    test('debe de eliminar el usuario', () => {
        const action = {
            type: types.removeUser,
            payload: {
                id: "4as6d5asd1654s"
            }
        }

        const state = UserReducer({ users: [] }, action);

        expect(state).toEqual({ users: []})
    });

    test('debe de añadir un user', () => {
        const action = {
            type: types.addUser,
            payload: {
                user: {
                    id: "asdweasdasd",
                    name: "Jorge"
                }
            }
        }
        
        const state = UserReducer({ users: [] }, action);
        
        expect(state).toEqual({ users:[{user:{id: "asdweasdasd", name: "Jorge"}}] })
    });
});