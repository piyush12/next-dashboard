import prisma from "@/lib/prisma";

type EmailVerificationOptions = {
  userId: string;
  email: string;
  code: string;
};

export async function validateEmailVerificationCode({
  userId,
  email,
  code,
}: EmailVerificationOptions): Promise<boolean> {
  const emailVerification = await prisma.emailVerificationCode.findFirst({
    where: {
      userId,
    },
  });

  if (emailVerification?.code !== code) {
    return false;
  }

  if (emailVerification.email !== email) {
    return false;
  }

  const isExpired = Date.now() > emailVerification.expiresAt.getTime();

  if (isExpired) {
    return false;
  }

  return true;
}
