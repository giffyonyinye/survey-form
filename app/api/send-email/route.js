// import React from 'react';
import { Resend } from 'resend';
// import EmailTemplate from '@/app/components/email-template';
import SurveyForm from '@/app/emails';
import EmailTemplate from '@/app/components/email-template';

const resend = new Resend("re_gXmWAsSA_8prFNFGQBnfCaVgby3tFjnX1");

export async function POST(request) {
  try {
    const formData = await request.json();
    const {
      ageGroup,
      gender,
      anonymous,
      duration,
      quality,
      other,
      respected,
      arrivalTime,
      satisfied,
      communicate,
      informed,
      comfortable,
      competence,
      trained,
      treated,
      service,
      recommend,
      supportPlan,
      safe,
      ppe,
      consent,
      improved,
      comments,
    } = formData;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['giffyonyinye@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ 
      ageGroup: ageGroup,
      gender: gender,
      anonymous: anonymous,
      duration: duration,
      quality: quality,
      other: other,
      respected: respected,
      arrivalTime: arrivalTime,
      satisfied: satisfied,
      communicate: satisfied,
      informed: informed,
      comfortable: comfortable,
      competence: competence,
      trained: trained,
      treated: treated,
      service: service,
      recommend: recommend,
      supportPlan: supportPlan,
      safe: safe,
      ppe: ppe,
      consent: consent,
      improved: improved,
      comments: comments,
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