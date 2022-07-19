import { toast } from "react-toastify";
import { Button } from "../../ui/button";
import { MyForm, TextArea, TextInput, TextLabel } from "./contactFormElements";
import { useForm, ValidationError } from "@formspree/react";
import { LoaderComp } from "../../ui/loader";
import { MutableRefObject, useRef } from "react";

function ContactForm() {
  const [state, handleMail] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  const contactFormRef: MutableRefObject<any> = useRef(null);

  if (state.succeeded && !state.submitting) {
    toast.success("mensaje enviado", {
      hideProgressBar: true,
      position: "bottom-center",
    });
    contactFormRef?.current?.reset();
  }
  if (state.errors.length > 0 && !state.submitting) {
    toast.error("algo salio mal", {
      hideProgressBar: true,
      position: "bottom-center",
    });
  }

  return (
    <MyForm onSubmit={handleMail} ref={contactFormRef}>
      <TextLabel htmlFor="name">
        Nombre
        <TextInput id="name" name="name" required={true}></TextInput>
      </TextLabel>
      <TextLabel htmlFor="email">
        Email
        <TextInput
          id="email"
          type="email"
          name="email"
          required={true}
        ></TextInput>
        <ValidationError
          style={{ color: "red" }}
          prefix="Email"
          field="email"
          errors={state.errors}
        ></ValidationError>
      </TextLabel>
      <TextLabel>
        Mensaje
        <TextArea id="message" name="message" required={true}></TextArea>
      </TextLabel>
      <Button type="submit" disabled={state.submitting}>
        {state.submitting ? <LoaderComp></LoaderComp> : "Enviar"}
      </Button>
    </MyForm>
  );
}

export { ContactForm };
