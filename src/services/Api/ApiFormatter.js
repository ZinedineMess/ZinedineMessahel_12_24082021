class ApiFormatter {
    /**
     * Retrieve dataAPI USER_MAIN_DATA and return the data formatted, ready to be used for the component
     * @param {Object} dataApi - Data from the API SportSee
     * @return {Object} - Formatted data for the component
     */
    static getMainDataFormat(dataApi) {
        let fetchedData = dataApi.data.data;

        return {
            firstName: fetchedData.userInfos.firstName,
            macroTracker: fetchedData.keyData,
            userScore: fetchedData.todayScore || fetchedData.score,
        }
    }

    /**
     * Build an array with the dates of the 7 previous days.
     * @return {Object} - Formatted default data for the component
     */
    static getDailyActivityDataFormatDefault() {
        const data = [];
        let date = new Date(Date.now());
    
        // eslint-disable-next-line no-unused-vars
        for (let _ of "1234567") {
            let dateFr = new Intl.DateTimeFormat("fr").format(date);
            data.push({
                day: dateFr.slice(0, 5),
                kilogram: 0,
                calories: 0,
            });
            date.setDate(date.getDate() - 1);
        }
        data.reverse();

        return {
            data: data,
            mininumYaxisKg : Math.min(...data.map((elt) => elt.kilogram)) - 1,
            maximumYaxisKg : Math.max(...data.map((elt) => elt.kilogram)) + 2,
            minimumYaxisKcal : Math.min(...data.map((elt) => elt.calories)) - 50,
            maximumYaxisKcal : Math.max(...data.map((elt) => elt.calories)) + 50,
        }
    }

    /**
     * Retrieve dataAPI USER_ACTIVITY and return the data formatted, ready to be used for the component
     * @param {Object} dataApi - Data from the API SportSee
     * @return {Object} - Formatted data for the component
     */
    static getDailyActivityDataFormat(dataApi) {
        if (dataApi) {
            let fetchedData = dataApi.data.data;
            const data = [];
    
            for (let item of fetchedData.sessions) {
                // eslint-disable-next-line no-unused-vars
                const [yyyy, mm, dd] = item.day.split("-");
                
                data.push({
                    day: `${dd}/${mm}`,
                    kilogram: item.kilogram,
                    calories: item.calories,
                    });
                }

                return {
                    data: data,
                    mininumYaxisKg : Math.min(...data.map((elt) => elt.kilogram)) - 1,
                    maximumYaxisKg : Math.max(...data.map((elt) => elt.kilogram)) + 2,
                    minimumYaxisKcal : Math.min(...data.map((elt) => elt.calories)) - 50,
                    maximumYaxisKcal : Math.max(...data.map((elt) => elt.calories)) + 50,
                }
            }
        this.getDailyActivityDataFormatDefault();
    }

    /**
     * Retrieve dataAPI USER_AVERAGE_SESSIONS and return the data formatted, ready to be used for the component
     * @param {Object} dataApi - Data from the API SportSee
     * @return {Object} - Formatted data for the component
     */
    static getUserAverageDataFormat(dataApi) {
        let fetchedData = dataApi.data.data;
        const sessionsData = [];
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

        fetchedData.sessions.map((session) => {
            return sessionsData.push({
                day: days[session.day - 1],
                sessionLength: session.sessionLength,
            })
        })

        return sessionsData;
    }

    /**
     * Retrieve dataAPI USER_PERFORMANCE and return the data formatted, ready to be used for the component
     * @param {Object} dataApi - Data from the API SportSee
     * @return {Object} - Formatted data for the component
     */
    static getPerformanceAverageDataFormat(dataApi) {
        let fetchedData = dataApi.data.data.data;
        let performanceAverageData = [];

        fetchedData.map((data, index) => {
            return performanceAverageData.push({
                subject:
                dataApi.data.data.kind[index + 1].charAt(0).toUpperCase() +
                dataApi.data.data.kind[index + 1].slice(1),
                value: data.value,
            })
        })
        return performanceAverageData;
    }
}

export default ApiFormatter;
