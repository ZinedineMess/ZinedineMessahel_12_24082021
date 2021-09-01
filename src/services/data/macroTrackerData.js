import { USER_MAIN_DATA } from '../mocks/mockedData';

export function getCaloriesData() {
    return USER_MAIN_DATA[0].keyData.calorieCount;
}

export function getProteinsData() {
    return USER_MAIN_DATA[0].keyData.proteinCount;
}

export function getCarbohydratesData() {
    return USER_MAIN_DATA[0].keyData.carbohydrateCount;
}

export function getLipidsData() {
    return USER_MAIN_DATA[0].keyData.lipidCount;
}
