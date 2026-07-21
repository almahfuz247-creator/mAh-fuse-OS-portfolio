import { Resend } from "resend";

let _resend: Resend | null = null;

export function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY is not set");
    }
    _resend = new Resend(key);
  }
  return _resend;
}

export const CONTACT_FROM =
  process.env.RESEND_FROM ?? "mAh⚡fuse OS <onboarding@resend.dev>";

export const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL ?? "mahfuz.bsc@gmail.com";

export const RESUME_FILE_PATH =
  process.env.RESUME_FILE_PATH ?? "./public/resume.pdf";
