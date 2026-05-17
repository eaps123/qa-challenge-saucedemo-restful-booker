import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend, Rate } from 'k6/metrics';
import { apiConfig } from './config.js';

const successRate = new Rate('success_rate');
const authLatency = new Trend('auth_latency');
const createBookingLatency = new Trend('create_booking_latency');
const getBookingLatency = new Trend('get_booking_latency');

const baseURL =
  apiConfig.api.restfulBooker;

export const options = {
  scenarios: {

    auth_flow: {
      executor: 'constant-vus',
      vus: 20,
      duration: '3m',
      exec: 'authenticate',
    },

    create_booking_flow: {
      executor: 'constant-vus',
      vus: 40,
      duration: '5m',
      exec: 'createBooking',
    },

    get_booking_flow: {
      executor: 'constant-vus',
      vus: 60,
      duration: '5m',
      exec: 'getBooking',
    },
  },

  thresholds: {
    http_req_duration: ['p(95)<1000'],
    http_req_failed: ['rate<0.05'],

    success_rate: ['rate>0.99'],

    auth_latency: ['p(95)<800'],
    create_booking_latency: ['p(95)<1200'],
    get_booking_latency: ['p(95)<700'],
  },
};

const params = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

// =========================
// AUTH
// =========================

export function authenticate() {

  const payload = JSON.stringify({
    username: 'admin',
    password: 'password123',
  });

  const res = http.post(
    `${baseURL}/auth`,
    payload,
    params
  );

  const success = check(res, {
    'POST /auth - status 200': (r) =>
      r.status === 200,

    'POST /auth - token generated': (r) =>
      r.json('token') !== undefined,
  });

  successRate.add(success);

  authLatency.add(
    res.timings.duration
  );

  sleep(1);
}

// =========================
// CREATE BOOKING
// =========================

export function createBooking() {

  const payload = JSON.stringify({
    firstname: 'Everton',
    lastname: 'QA',
    totalprice: 999,
    depositpaid: true,

    bookingdates: {
      checkin: '2026-01-01',
      checkout: '2026-01-10',
    },

    additionalneeds: 'Breakfast',
  });

  const res = http.post(
    `${baseURL}/booking`,
    payload,
    params
  );

  const success = check(res, {
    'POST /booking - status 200': (r) =>
      r.status === 200,

    'POST /booking - booking created': (r) =>
      r.json('bookingid') !== undefined,
  });

  successRate.add(success);

  createBookingLatency.add(
    res.timings.duration
  );

  sleep(1);
}

// =========================
// GET BOOKING
// =========================

export function getBooking() {

  const bookingId =
    Math.floor(Math.random() * 100) + 1;

  const res = http.get(
    `${baseURL}/booking/${bookingId}`,
    params
  );

  const success = check(res, {
    'GET /booking/:id - valid response': (r) =>
      [200, 404].includes(r.status),
  });

  successRate.add(success);

  getBookingLatency.add(
    res.timings.duration
  );

  sleep(1);
}

// =========================
// SUMMARY
// =========================

export function handleSummary(data) {

  return {
    'reports/k6-summary.json':
      JSON.stringify(data, null, 2),
  };
}