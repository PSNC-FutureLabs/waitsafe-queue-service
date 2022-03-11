import { Controller, Get, NotFoundException } from '@nestjs/common';
import { GetCardService } from './get-card.service';

type Link = string; /** eg /card/ABCD1234 */
type CardNumber = string; /** eg ABCD1234 */
type Icon = string; /** eg green-monkey */
type EstimatedTime = string; /** eg 2022-02-20T12:00:00.000Z */
type CardResponse = {
  icon: Icon;
  number: CardNumber;
  _links: {
    self: {
      href: Link;
    };
    visit: {
      href: Link;
    };
  };
  _embedded: {
    visit?: {
      estimatedTime: EstimatedTime;
      _links: {
        card: {
          href: Link;
        };
        queue: {
          href: Link;
        };
      };
    };
  };
};

@Controller()
export class GetCardController {
  constructor(private readonly getCardService: GetCardService) {}

  @Get('/cards/:cardNumber')
  async getCard(cardNumber: string): Promise<CardResponse> {
    const [card, visit] = await this.getCardService.getCardWithVisit(
      cardNumber,
    );

    return {
      icon: card.icon,
      number: card.number,
      _links: {
        self: {
          href: `/cards/${card.number}`,
        },
        visit: {
          href: `/cards/${card.number}/visit`,
        },
      },
      _embedded: {
        visit: visit
          ? {
              // if visit is not null
              estimatedTime: visit.estimatedTime.toISOString(),
              _links: {
                card: {
                  href: `/cards/${visit.cardNumber}`,
                },
                queue: {
                  href: `/queues/${visit.queueId}`,
                },
              },
            }
          : undefined,
      },
    };

    // throw new NotFoundException({
    //   code: 'NOT_FOUND',
    //   message: `Card '${cardNumber}' not found`,
    // });
  }
}
