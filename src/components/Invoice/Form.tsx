import { SyntheticEvent } from "react";

import Box from "@/components/Shared/Box";
import Flex from "@/components/Shared/Flex";
import Label from "@/components/Shared/Label";
import Text from "@/components/Shared/Text";
import { TextArea } from "@/components/Shared/TextArea";
import TextField from "@/components/Shared/TextField";

import SubmitButton from "./SubmitButton";

type IFormProps = {
  onSubmit: (event: SyntheticEvent) => void;
  action: (formData: FormData) => void;
};

function InvoiceForm({ onSubmit, action }: IFormProps) {
  return (
    <form action={action} onSubmit={onSubmit}>
      <Box className="mb-8 border-b-[1px] border-b-light-divider pb-4 pt-4 dark:border-b-dark-divider">
        <Text as="p">Add Invoice</Text>
      </Box>

      <Flex gap="6">
        <Box className="w-2/4">
          <Flex direction="column" gap="5">
            <Label htmlFor="name">Biller Name</Label>
            <TextField type="text" id="name" name="name" fullWidth></TextField>
          </Flex>
        </Box>
        <Box className="w-2/4">
          <Flex direction="column" gap="5">
            <Label htmlFor="email">Biller Email</Label>
            <TextField
              type="text"
              id="email"
              name="email"
              fullWidth
            ></TextField>
          </Flex>
        </Box>
      </Flex>

      <Flex gap="6" className="mt-8">
        <Box className="w-2/4">
          <Flex direction="column" gap="5">
            <Label htmlFor="value">Value</Label>
            <TextField
              type="text"
              id="value"
              name="value"
              fullWidth
            ></TextField>
          </Flex>
        </Box>
        <Box className="w-2/4">
          <Flex direction="column" gap="5">
            <Label htmlFor="description">Description</Label>
            <TextArea
              placeholder="Description"
              name="description"
              id="description"
            />
          </Flex>
        </Box>
      </Flex>

      <Flex gap="6" className="mb-8 mt-8">
        <SubmitButton>Submit</SubmitButton>
      </Flex>
    </form>
  );
}

export default InvoiceForm;
