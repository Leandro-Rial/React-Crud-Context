import { types } from "../../types/types";

describe('Pruebas en types', () => {
    test('los types deben de ser iguales', () => {
        expect(types).toEqual({
            removeUser: '[crud] remove user',
            addUser: '[crud] create user',
            editUser: '[crud] edit user'
        })
    });
});