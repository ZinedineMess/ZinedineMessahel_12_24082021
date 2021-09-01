import { USER_PERFORMANCE } from '../mocks/mockedData';

export function getPerformanceAverageDataFormat() {
    let performanceAverageData = [];

    USER_PERFORMANCE[0].data.map((data, index) => {
        return performanceAverageData.push({
            subject:
            USER_PERFORMANCE[0].kind[index + 1].charAt(0).toUpperCase() +
            USER_PERFORMANCE[0].kind[index + 1].slice(1),
            value: data.value,
        })
    })
    return performanceAverageData;
}
