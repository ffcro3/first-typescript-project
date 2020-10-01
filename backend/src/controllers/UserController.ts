import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Fabricio', email: 'loremipsum@gmail.com' },
  { name: 'Jéssica', email: 'loremipsum@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: 'Fabricio Rocha', email: 'fabriciofrocha87@gmail.com' },
      message: { subject: 'Bem vindo ao sistema', body: 'Seja bem vindo' },
    });

    return res.send('message sent');
  },
};
