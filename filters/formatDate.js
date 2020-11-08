import * as moment from 'moment';
export const formatDate = (date) => {
    if (date) {
        return moment(date).format('YYYY-MM-DD hh:mm A');
    }
}