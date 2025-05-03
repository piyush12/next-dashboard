type GenerateKeyArgs = {
  name: string;
  ticketId: string;
  fileName: string;
  attachmentId: string;
};

export const generateS3Key = ({
  name,
  ticketId,
  fileName,
  attachmentId,
}: GenerateKeyArgs) => {
  return `${name}/${ticketId}/${fileName}-${attachmentId}`;
};
