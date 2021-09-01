import { USER_MAIN_DATA } from '../mocks/mockedData';

export function getGoalScoreDataFormat() {
    const goalPieChartData = [
        { name: "completed", value: USER_MAIN_DATA[0].todayScore, fillColor: "#e60000" },
        { name: "not-completed", value: 1 - USER_MAIN_DATA[0].todayScore, fillColor: "transparent" },
    ];
    return goalPieChartData;
}
