import env from '../../config/env';
import { ApiClient } from '../clients/apiClient';

export class BookingService {

    private client: ApiClient;

    constructor(token?: string) {
        this.client = new ApiClient(
            env.api.restfulBooker,
            token
        );
    }

    async authenticate() {
        await this.client.init();

        return this.client.post('/auth', {
            username: 'admin',
            password: 'password123'
        });
    }

    async getBookings() {
        await this.client.init();

        return this.client.get('/booking');
    }

    async getBookingById(id: number) {
        await this.client.init();

        return this.client.get(`/booking/${id}`);
    }

    async createBooking(payload: unknown) {
        await this.client.init();

        return this.client.post('/booking', payload);
    }

    async updateBooking(
        id: number,
        payload: unknown
    ) {
        await this.client.init();

        return this.client.put(
            `/booking/${id}`,
            payload
        );
    }

    async deleteBooking(id: number) {
        await this.client.init();

        return this.client.delete(
            `/booking/${id}`
        );
    }
}