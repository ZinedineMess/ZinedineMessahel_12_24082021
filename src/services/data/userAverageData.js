import { USER_AVERAGE_SESSIONS } from '../mocks/mockedData';

export function getUserAverageDataFormat() {
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
