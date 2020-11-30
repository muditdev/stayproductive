
export function secondsToClock(seconds) {
    const date = new Date(seconds * 1000);
    // ${date.getUTCHours()}: 
    return `${addZero(date.getUTCMinutes())} : ${addZero(date.getSeconds())}`
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}