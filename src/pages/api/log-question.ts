import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { question, timestamp } = req.body;
    const logLine = `${timestamp}: ${question}\n`;
    fs.appendFileSync('unanswered_questions.log', logLine);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
} 