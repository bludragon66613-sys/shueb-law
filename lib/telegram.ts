/**
 * Send notifications to Telegram when contact form is submitted.
 * Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in environment variables.
 */

interface TelegramMessage {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly subject: string;
  readonly message: string;
}

export async function sendTelegramNotification(data: TelegramMessage): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return false;
  }

  const text = [
    '📩 *New Contact Form Submission*',
    '',
    `*Name:* ${escapeMarkdown(data.name)}`,
    `*Email:* ${escapeMarkdown(data.email)}`,
    data.phone ? `*Phone:* ${escapeMarkdown(data.phone)}` : '',
    data.subject ? `*Subject:* ${escapeMarkdown(data.subject)}` : '',
    '',
    `*Message:*`,
    escapeMarkdown(data.message),
  ]
    .filter(Boolean)
    .join('\n');

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'MarkdownV2',
    }),
  });

  return response.ok;
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}
