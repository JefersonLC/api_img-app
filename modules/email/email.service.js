import nodemailer from 'nodemailer';
import env from '../../config/environment.js';

export default class EmailService {
  async sendEmailtoVerify(token, userEmail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: env.EMAIL,
        pass: env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: env.EMAIL,
      to: userEmail,
      subject: 'Email verification',
      html: `
        <div>
          <p>
            Verify your email: ${env.DOMAIN}api/email/verify?token=${token}
          </p>
        </div>
      `
    };
    await transporter.sendMail(mailOptions);
  }
}
