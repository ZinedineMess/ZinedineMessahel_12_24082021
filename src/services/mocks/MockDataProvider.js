import axios from 'axios';
import MockDataFormatter from './MockDataFormatter';
import { USER_ACTIVITY } from './mockedData';
import { USER_AVERAGE_SESSIONS } from './mockedData';
import { USER_MAIN_DATA } from './mockedData';
import { USER_PERFORMANCE } from './mockedData';

class MockDataProvider {
    /**
     * Fetch USER_MAIN_DATA from MockedData
     * @return  {Array.Object}
     */
    async getMainData() {
        const data = {};

        await fetch(USER_MAIN_DATA[0])
        .then(function (response) {
            data.content = MockDataFormatter.getMainDataFormat(response);
        })
        return data;
    }

    /**
     * Fetch USER_ACTIVITY from MockedData
     * @return  {Array.Object}
     */
    async getUserDailyActivityData() {
        const data = {};

        await axios.get(USER_ACTIVITY)
        .then(function (response) {
            data.content = MockDataFormatter.getDailyActivityDataFormat(response);
        })
        return data;
    }

    /**
     * Fetch USER_AVERAGE_SESSIONS from MockedData
     * @return  {Array.Object}
     */
    async getUserAverageSessionData() {
        const data = {};

        await axios
            .get(USER_AVERAGE_SESSIONS)
            .then(function (response) {
                data.content = MockDataFormatter.getUserAverageDataFormat(response);
            })
        return data;
    }

    /**
     * Fetch USER_PERFORMANCE from MockedData
     * @return  {Array.Object}
     */
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
