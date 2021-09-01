import {Component} from 'react';
import { USER_MAIN_DATA } from '../mocks/mockedData';
import { USER_ACTIVITY } from '../mocks/mockedData';
import { USER_AVERAGE_SESSIONS } from '../mocks/mockedData';
import { USER_PERFORMANCE } from '../mocks/mockedData';

class DataFormat extends Component {
    // WELCOME DATA
    getWelcomeData = () => {
        return USER_MAIN_DATA[0].userInfos.firstName;
    }

    // DAILY ACTIVITY DATA
    getDailyActivityDataFormatDefault = () => {
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
    
    getDailyActivityDataFormat = () => {
    if (USER_ACTIVITY[0].sessions) {
        const data = [];

        for (let item of USER_ACTIVITY[0].sessions) {
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
        return this.getDailyActivityDataFormatDefault();
    }

    // USER AVERAGE DATA 
    getUserAverageDataFormat = () => {
        const sessionsData = []
        const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    
        USER_AVERAGE_SESSIONS[0].sessions.map((session) => {
            return sessionsData.push({
                day: days[session.day - 1],
                sessionLength: session.sessionLength,
            })
        })
    
        return sessionsData;
    }

    // PERFORMANCE AVERAGE DATA 
    getPerformanceAverageDataFormat = () => {
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

    // GOAL SCORE DATA
    getGoalScoreDataFormat = () => {
        const goalPieChartData = [
            { name: "completed", value: USER_MAIN_DATA[0].todayScore, fillColor: "#e60000" },
            { name: "not-completed", value: 1 - USER_MAIN_DATA[0].todayScore, fillColor: "transparent" },
        ];
        return goalPieChartData;
    }

    // MACRO TRACKER DATA 
    getCaloriesData = () => {
        return USER_MAIN_DATA[0].keyData.calorieCount;
    }
    
    getProteinsData = () => {
        return USER_MAIN_DATA[0].keyData.proteinCount;
    }
    
    getCarbohydratesData = () => {
        return USER_MAIN_DATA[0].keyData.carbohydrateCount;
    }
    
    getLipidsData = () => {
        return USER_MAIN_DATA[0].keyData.lipidCount;
    }
}

export default DataFormat;
