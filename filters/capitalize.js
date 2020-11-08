export const capitalize = (str) => {
    if (typeof str == 'string') {
        if (str == 'realestate') {
            return 'Real Estate';
        }
        if (str == 'sundayreview') {
            return 'Sunday Review';
        }
if (str == 'tmagazine') {
            return 'T Magazine';
        }
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    }
}