import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToTelegram } from '@/lib/telegram';
import { LeadFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: LeadFormData = await request.json();

    // Validate required fields
    const { name, email, phone, course } = body;

    if (!name || !email || !phone || !course) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send lead to Telegram
    const result = await sendLeadToTelegram(body);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: result.message,
        redirectUrl: `https://t.me/SkillsNova?text=${encodeURIComponent(`Hi! I just submitted my enrollment form for ${course}. My name is ${name}.`)}`,
      });
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing lead form:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
