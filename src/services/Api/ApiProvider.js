import ApiFormatter from './ApiFormatter';
import axios from 'axios';

class ApiProvider {
    constructor() {
        this.userId = 12;
        this.baseUrl = 'http://localhost:3000';
    }

    /**
     * Fetch USER_MAIN_DATA from API
     * @return {Array.Object}
     */
    async getMainData(id) {
        const data = {};
        let url = `${this.baseUrl}/user/${id}`;

        await axios.get(url)
        .then(function (response) {
            data.content = ApiFormatter.getMainDataFormat(response);
        })
        return data;
    }

    /**
     * Fetch USER_ACTIVITY from API
     * @return {Array.Object}
     */
    async getUserDailyActivityData(id) {
        const data = {};
        let url = `${this.baseUrl}/user/${id}/activity`;

        await axios.get(url)
        .then(function (response) {
            data.content = ApiFormatter.getDailyActivityDataFormat(response);
        })
        return data;
    }

    /**
     * Fetch USER_AVERAGE_SESSIONS from API
     * @return {Array.Object}
     */
    async getUserAverageSessionData(id) {
        const data = {};
        let url = `${this.baseUrl}/user/${id}/average-sessions`;

        await axios
            .get(url)
            .then(function (response) {
                data.content = ApiFormatter.getUserAverageDataFormat(response);
            })
        return data;
    }

    /**
     * Fetch USER_PERFORMANCE from API
     * @return {Array.Object}
     */
    async getUserPerformanceData(id) {
        const data = {};
        let url = `${this.baseUrl}/user/${id}/performance`;

        await axios
            .get(url)
            .then(function (response) {
                data.content = ApiFormatter.getPerformanceAverageDataFormat(response);
            })
        return data;
    }
}

export default ApiProvider;
