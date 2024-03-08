import InputRegistery from '@/elements/InputRegistery'
import { GetInputPropsReturnType } from 'node_modules/@mantine/form/lib/types'

interface FormInputBuilder {
  name: string
  label: string
  description: string
  dataType: string
  bluePrint: string
  validationRules: string[]
}

type InputBluePrint = keyof typeof InputRegistery

const FormInputBuilder = ({ formItem, formProps }: { formItem: FormInputBuilder; formProps: GetInputPropsReturnType }) => {
  const { bluePrint, label, description } = formItem

  const FormInput = InputRegistery[bluePrint as InputBluePrint]
  return (
    <FormInput label={label} placeholder={description} {...formProps} />
  )
}

export default FormInputBuilder 
