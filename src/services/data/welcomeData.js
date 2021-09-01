import { USER_MAIN_DATA } from '../mocks/mockedData';

export function getWelcomeData() {
    return USER_MAIN_DATA[0].userInfos.firstName;
}
