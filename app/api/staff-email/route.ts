// import React from 'react';
import { Resend } from 'resend';
// import EmailTemplate from '@/app/components/email-template';
import SurveyForm from '@/app/emails';
import StaffEmailTemplate from '@/app/components/staff-email';

const resend = new Resend("re_gXmWAsSA_8prFNFGQBnfCaVgby3tFjnX1");

export async function POST(request) {
  try {
    const formData = await request.json();
    const {
        job,
        duration,
        improvements,
        comments,
        enjoy,
        mentalHealth,
        healthImpact,
        balance,
        concerns,
        performance,
        supported,
        advancement,
        communication,
        training,
        time,
        quality,
        safe,
        autonomy,
        valued,
        satisfied,
        hours,
    } = formData;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['giffyonyinye@gmail.com'],
      subject: "Hello world",
      react: StaffEmailTemplate({ 
        job,
        duration,
        improvements,
        comments,
        enjoy,
        mentalHealth,
        healthImpact,
        balance,
        concerns,
        performance,
        supported,
        advancement,
        communication,
        training,
        time,
        quality,
        safe,
        autonomy,
        valued,
        satisfied,
        hours
       }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};