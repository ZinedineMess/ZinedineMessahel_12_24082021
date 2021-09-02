import ApiFormatter from './ApiFormatter';
import axios from 'axios';

class ApiProvider {
    constructor() {
        this.userId = 12;
        this.baseUrl = 'http://localhost:3000';
    }

    // MAIN DATA
    async getMainData() {
        const data = {};
        let url = `${this.baseUrl}/user/${this.userId}`;

        await axios.get(url)
        .then(function (response) {
            data.content = ApiFormatter.getMainDataFormat(response);
        })
        return data;
    }

    // DAILYACTIVITY
    async getUserDailyActivityData() {
        const data = {};
        let url = `${this.baseUrl}/user/${this.userId}/activity`;

        await axios.get(url)
        .then(function (response) {
            data.content = ApiFormatter.getDailyActivityDataFormat(response);
        })
        return data;
    }

    // AVERAGESESSIONS
    async getUserAverageSessionData() {
        const data = {};
        let url = `${this.baseUrl}/user/${this.userId}/average-sessions`;

        await axios
            .get(url)
            .then(function (response) {
                data.content = ApiFormatter.getUserAverageDataFormat(response);
            })
        return data;
    }

    // PERFORMANCE
    async getUserPerformanceData() {
        const data = {};
        let url = `${this.baseUrl}/user/${this.userId}/performance`;

        await axios
            .get(url)
            .then(function (response) {
                data.content = ApiFormatter.getPerformanceAverageDataFormat(response);
            })
        return data;
    }
}

export default ApiProvider;
