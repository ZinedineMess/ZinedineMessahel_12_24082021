import axios from 'axios';
import MockDataFormatter from './MockDataFormatter';
import { USER_ACTIVITY } from './mockedData';
import { USER_AVERAGE_SESSIONS } from './mockedData';
import { USER_MAIN_DATA } from './mockedData';
import { USER_PERFORMANCE } from './mockedData';

class MockDataProvider {
    // MAIN DATA
    async getMainData() {
        const data = {};

        await fetch(USER_MAIN_DATA[0])
        .then(function (response) {
            data.content = MockDataFormatter.getMainDataFormat(response);
        })
        return data;
    }

    // DAILYACTIVITY
    async getUserDailyActivityData() {
        const data = {};

        await axios.get(USER_ACTIVITY)
        .then(function (response) {
            data.content = MockDataFormatter.getDailyActivityDataFormat(response);
        })
        return data;
    }

    // AVERAGESESSIONS
    async getUserAverageSessionData() {
        const data = {};

        await axios
            .get(USER_AVERAGE_SESSIONS)
            .then(function (response) {
                data.content = MockDataFormatter.getUserAverageDataFormat(response);
            })
        return data;
    }

    // PERFORMANCE
    async getUserPerformanceData() {
        const data = {};

        await axios
            .get(USER_PERFORMANCE)
            .then(function (response) {
                data.content = MockDataFormatter.getPerformanceAverageDataFormat(response);
            })
        return data;
    }
}

export default MockDataProvider;
