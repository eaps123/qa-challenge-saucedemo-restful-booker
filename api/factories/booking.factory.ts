export class BookingFactory {

    static validBooking() {
        return {
            firstname: 'Everton',
            lastname: 'Pedro',
            totalprice: 1500,
            depositpaid: true,

            bookingdates: {
                checkin: '2026-05-20',
                checkout: '2026-05-25'
            },

            additionalneeds: 'Breakfast'
        };
    }

    static invalidBooking() {
        return {
            firstname: '',
            lastname: '',
            totalprice: null,
            depositpaid: null,
            bookingdates: {
                checkin: '',
                checkout: ''
            }
        };
    }

    static authPayload() {
        return {
            username: 'admin',
            password: 'password123'
        };
    }
}