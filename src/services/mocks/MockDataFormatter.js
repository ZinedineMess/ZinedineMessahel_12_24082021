class MockDataFormatter {
    static getMainDataFormat(dataMock) {
        return {
            firstName: dataMock.data.userInfos.firstName,
            macroTracker: dataMock.data.data.keyData,
            userScore: [
                { name: "completed", value: dataMock.data.data.todayScore || dataMock.data.data.score, fillColor: "#e60000" },
                { name: "not-completed", value: 1 - dataMock.data.data.todayScore || dataMock.data.data.score, fillColor: "transparent" },
            ]
        }
    }

    // DAILYACTIVITY
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
        return data;
    }

    static getDailyActivityDataFormat(dataMock) {
        if (dataMock) {
            const data = [];
    
            for (let item of dataMock.data.data.sessions) {
                // eslint-disable-next-line no-unused-vars
                const [yyyy, mm, dd] = item.day.split("-");
                
                data.push({
                    day: `${dd}/${mm}`,
                    kilogram: item.kilogram,
                    calories: item.calories,
                    });
                }
                return data;
            }
        this.getDailyActivityDataFormatDefault();
    }

    // AVERAGESESSIONS
    static getUserAverageDataFormat(dataMock) {
        const sessionsData = []
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

        dataMock.data.data.sessions.map((session) => {
            return sessionsData.push({
                day: days[session.day - 1],
                sessionLength: session.sessionLength,
            })
        })

        return sessionsData;
    }

    // PERFORMANCE
    static getPerformanceAverageDataFormat(dataMock) {
        let performanceAverageData = [];

        dataMock.data.data.data.map((data, index) => {
            return performanceAverageData.push({
                subject:
                dataMock.data.data.kind[index + 1].charAt(0).toUpperCase() +
                dataMock.data.data.kind[index + 1].slice(1),
                value: data.value,
            })
        })
        return performanceAverageData;
    }
}

export default MockDataFormatter;
