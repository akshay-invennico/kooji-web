export const CAL_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const CAL_MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const WEEK_DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export function getDaysInMonth(y: number, m: number) {
    return new Date(y, m + 1, 0).getDate();
}

export function getFirstDay(y: number, m: number) {
    return new Date(y, m, 1).getDay();
}

export function fmtDate(d: Date) {
    return `${d.getDate().toString().padStart(2, "0")} ${CAL_MONTHS[d.getMonth()]}`;
}

export function fmtRange(s: Date | null, e: Date | null) {
    if (s && e) return `${fmtDate(s)} - ${fmtDate(e)}, ${e.getFullYear()}`;
    if (s) return `${fmtDate(s)} - ?`;
    return "";
}

export function fmtSingleDate(d: Date | null) {
    if (!d) return "";
    return `${d.getDate().toString().padStart(2, "0")} ${CAL_MONTHS[d.getMonth()]}, ${d.getFullYear()}`;
}
