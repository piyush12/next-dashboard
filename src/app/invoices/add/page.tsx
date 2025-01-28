"use client";

import Flex from "@/components/Shared/Flex";
import Paper from "@/components/Shared/Paper";

function AddNewInvoice() {
  // const [formState, setFormState] = useState("ready");

  // async function handleSubmit(event: SyntheticEvent) {
  //   event.preventDefault();
  //   if (formState === "pending") return;
  //   setFormState("pending");
  //   const target = event.target as HTMLFormElement;
  //   const formData = new FormData(target);
  //   await createInvoiceAction(formData);
  // }

  return (
    <Flex className="p-4">
      <Paper className="w-full pb-3 pl-6 pr-6 pt-3">
        {/* <InvoiceForm onSubmit={handleSubmit} action={createInvoiceAction} /> */}
        test
      </Paper>
    </Flex>
  );
}

export default AddNewInvoice;
