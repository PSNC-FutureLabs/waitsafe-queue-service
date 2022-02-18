import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cards/{cardNumber} (GET)', () => {
    return request(app.getHttpServer())
      .get('/cards/AK58GD')
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        icon: 'green-monkey',
        number: 'AK58GD',
        hospitalId: 'szpital-1',
        _links: {
          self: {
            href: '/card/AK58GD',
          },
          visit: {
            href: '/card/AK58GD/visit',
          },
        },
        _embedded: {
          visit: {
            estimatedTime: '11:55',
            _links: {
              card: {
                href: '/card/AK58GD',
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
