import { InputContainer, Label, PureInput } from './styles'

type InputProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

export const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <div>
      <Label>{label}</Label>
      <InputContainer>
        <PureInput
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </InputContainer>
    </div>
  )
}
