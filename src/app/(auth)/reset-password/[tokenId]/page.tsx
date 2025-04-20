import Flex from "@/components/Shared/Flex";
import Text from "@/components/Shared/Text";
import PasswordResetForm from "@/features/password/components/password-reset-form";

type Props = {
  params: Promise<{ tokenId: string }>;
};

async function ResetPassword({ params }: Props) {
  const { tokenId } = await params;
  return (
    <Flex gap="2" direction="column">
      <Text as="h1" variant="h4">
        Reset Password
      </Text>
      <PasswordResetForm tokenId={tokenId} />
    </Flex>
  );
}

export default ResetPassword;
