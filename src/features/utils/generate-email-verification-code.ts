import prisma from "@/lib/prisma";
import { generateRandomCode } from "@/utils/crypto";

const EMAIL_VERIFICATION_EXPIRES_TIME_MS = 1000 * 60 * 10;

export async function generateEmailVerificationCode(
  userId: string,
  email: string,
): Promise<string> {
  await prisma.emailVerificationCode.deleteMany({
    where: {
      userId,
    },
  });
  console.log("object", userId, email);
  const code = generateRandomCode();

  await prisma.emailVerificationCode.create({
    data: {
      userId,
      email,
      code,
      expiresAt: new Date(Date.now() + EMAIL_VERIFICATION_EXPIRES_TIME_MS),
    },
  });

  return code;
}
