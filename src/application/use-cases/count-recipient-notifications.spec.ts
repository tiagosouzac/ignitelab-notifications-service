import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications';
import { CountRecipientNotifications } from './count-recipient-notification';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Você recebeu uma solicitação de amizade!'),
        category: 'social',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        content: new Content('Você recebeu uma solicitação de amizade!'),
        category: 'social',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-2',
        content: new Content('Você recebeu uma solicitação de amizade!'),
        category: 'social',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
