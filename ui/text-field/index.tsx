import { FieldContainer, TextInput, TextLabel } from "./textFieldElements";
type props = {
  label: string;
  type: string;
  name: string;
  value?: string;
  onChange?: (any) => any;
};
export function MyTextInput(props: props) {
  return (
    <FieldContainer>
      <TextLabel>
        <TextInput></TextInput>
      </TextLabel>
    </FieldContainer>
  );
}
