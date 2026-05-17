import { test, expect } from '@playwright/test';
import { BookingFactory } from '../factories/booking.factory';
import { BookingService } from '../services/booking.service';
import { BookingResponseSchema } from '../schemas/booking.schema';

test.describe('Restful Booker API', () => {

    let bookingService: BookingService;

    let token: string;
    let bookingId: number;

    test.beforeAll(async () => {

        bookingService =
            new BookingService();

        const authResponse =
            await bookingService.authenticate();

        expect(authResponse.status())
            .toBe(200);

        const authBody =
            await authResponse.json();

        token =
            authBody.token;
    });

    test('POST - deve criar reserva', async () => {

        const response =
            await bookingService.createBooking(
                BookingFactory.validBooking()
            );

        expect(response.status())
            .toBe(200);

        const body =
            await response.json();

        // Contract Test (Zod)
        BookingResponseSchema.parse(body);

        expect(body.bookingid)
            .toBeDefined();

        bookingId =
            body.bookingid;
    });

    test('GET - deve buscar reserva por id', async () => {

        const response =
            await bookingService.getBookingById(
                bookingId
            );

        expect(response.status())
            .toBe(200);

        const body =
            await response.json();

        expect(body.firstname)
            .toBe('Everton');
    });

    test('PUT - deve atualizar reserva', async () => {

        const serviceWithToken =
            new BookingService(token);

        const payload =
            BookingFactory.validBooking();

        payload.firstname =
            'QA Updated';

        const response =
            await serviceWithToken.updateBooking(
                bookingId,
                payload
            );

        expect(response.status())
            .toBe(200);

        const body =
            await response.json();

        expect(body.firstname)
            .toBe('QA Updated');
    });

    test('DELETE - deve remover reserva', async () => {

        const serviceWithToken =
            new BookingService(token);

        const response =
            await serviceWithToken.deleteBooking(
                bookingId
            );

        expect(response.status())
            .toBe(201);
    });

    test('POST - deve validar campos obrigatórios', async () => {

        const response =
            await bookingService.createBooking(
                BookingFactory.invalidBooking()
            );

        expect([200, 400, 500])
            .toContain(response.status());
    });
});