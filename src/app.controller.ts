import { Controller, Get, Render } from '@nestjs/common';
import * as dayjs from 'dayjs';

@Controller()
export class AppController {
  @Get('/hospital/:hospitalId/queue/:queueId.html')
  @Render('queue')
  queue() {
    return {
      queueName: 'Kolejka do pokoju 5',
      hospitalName:
        'Szpital Kliniczny im. Heliodora Święcickiego Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu',
      visits: [
        {
          estimatedTime: dayjs().add(15, 'minutes').toISOString(),
          card: {
            numer: 'KH58GD',
            icon: 'blue-whale',
          },
        },
        {
          estimatedTime: dayjs().add(30, 'minutes').toISOString(),
          card: {
            numer: 'NH77HF',
            icon: 'red-whale',
          },
        },
        {
          estimatedTime: dayjs().add(55, 'minutes').toISOString(),
          card: {
            numer: 'BH56EE',
            icon: 'green-monkey',
          },
        },
      ],
    };
  }
}
