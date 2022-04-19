import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ClockService } from '../src/clock/clock.service';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ClockService)
      .useValue({ now: () => new Date('1996-12-19T00:00:00.000Z') })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cards/{cardNumber} (GET)', () => {
    return request(app.getHttpServer())
      .get('/cards/AK58GD')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toEqual({
          icon: 'green-monkey',
          number: 'AK58GD',
          _links: {
            self: {
              href: '/cards/AK58GD',
            },
            visit: {
              href: '/cards/AK58GD/visit',
            },
          },
          _embedded: {
            visit: {
              estimatedTime: '1996-12-19T10:15:00.000Z',
              _links: {
                card: {
                  href: '/cards/AK58GD',
                },
                queue: {
                  href: '/hospitals/szpital-1/queues/kolejka-1',
                },
              },
            },
          },
        });
      });
  });
});
