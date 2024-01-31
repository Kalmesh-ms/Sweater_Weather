export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/* 

PARAMS
- Unix date in sec
- TimeZone shift from UTC in sec

RETURNS
- date String : formate : "Sunday 10, Jan"
*/

export const getDate = function (dateUnix, timezone){
    const date = new Date((dateUnix + timezone)* 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * 
 * @param {Number} timeUnix Unix date in sec
 * @param {Number} timezone Timezone shift from UTC in secs
 * @returns {string} Time String. formate : "HH:MM AM/PM"
 */

export const getTime = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone)* 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/**
 * 
 * @param {Number} timeUnix Unix date in sec
 * @param {Number} timezone Timezone shift from UTC in secs
 * @returns {string} Time String. formate : "HH AM/PM"
 */

export const getHours = function(timeUnix, timezone){
    const date = new Date((timeUnix + timezone)* 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps Meter per sec 
 * @returns {number} Kilometer per hour
 */

export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph/1000;
}

export const aqiText = {
    1 : {
        level : "Good",
        message : "	Air quality is satisfactory, and air pollution poses little or no risk."
    },
    2 : {
        level : "Fair",
        message : "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
    },
    3 : {
        level : "Moderate",
        message : "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
    },
    4 : {
        level : "Poor",
        message : "Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
    },
    5 : {
        level : "Very Poor",
        message : "Health warning of emergency conditions: everyone is more likely to be affected."
    }
}