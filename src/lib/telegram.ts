import { LeadFormData } from '@/types';

export async function sendLeadToTelegram(data: LeadFormData): Promise<{ success: boolean; message: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram configuration missing');
    return { success: false, message: 'Server configuration error' };
  }

  const message = `
🎓 *New Course Enrollment Lead*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
📚 *Course:* ${data.course}

⏰ *Date:* ${new Date().toLocaleString('en-US', { 
    timeZone: 'UTC',
    dateStyle: 'medium',
    timeStyle: 'short'
  })}
  `.trim();

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );

    const result = await response.json();

    if (result.ok) {
      return { success: true, message: 'Lead submitted successfully!' };
    } else {
      console.error('Telegram API error:', result);
      return { success: false, message: 'Failed to submit lead. Please try again.' };
    }
  } catch (error) {
    console.error('Error sending lead to Telegram:', error);
    return { success: false, message: 'Network error. Please try again.' };
  }
}

export function getTelegramEnrollLink(courseName: string): string {
  const message = `Hi! I'm interested in enrolling in the ${courseName} course. Please provide me with more details.`;
  return `https://t.me/SkillsNova?text=${encodeURIComponent(message)}`;
}

export function getTelegramChannelLink(): string {
  return 'https://t.me/SkillsNova';
}
