import { S3Client } from "@aws-sdk/client-s3";

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

if (!region || !accessKeyId || !secretAccessKey) {
  throw new Error("Missing AWS config values");
}

const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

export { s3 };
