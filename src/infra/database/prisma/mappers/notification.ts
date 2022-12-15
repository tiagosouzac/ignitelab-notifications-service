import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
