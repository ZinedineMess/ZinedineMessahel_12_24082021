import { USER_ACTIVITY } from '../mocks/mockedData';

function getDailyActivityDataFormatDefault() {
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

export function getDailyActivityDataFormat() {
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
        return getDailyActivityDataFormatDefault();
    }
