import { TextInput, Button, Select } from '@mantine/core'
import { useForm } from '@mantine/form'

import styles from '@/components/SchemaBuilder/styles.module.css'

const SchemaBuilder = () => {
  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      type: ''
    }
  })

  const SCHEMA_TYPES = ['String', 'Boolean']
  console.log({ ...form.getInputProps('types') })

  return (
    <div className={styles.container}>
      <form onSubmit={form.onSubmit(values => console.log(values))}>
        <TextInput
          withAsterisk
          label="Title"
          placeholder="schema_title"
          {...form.getInputProps('name')}
        />
        <TextInput
          withAsterisk
          label="Description"
          placeholder="schema_description"
          {...form.getInputProps('description')}
        />

        <Select
          label="TYPES"
          placeholder="Pick value"
          data={SCHEMA_TYPES}
          {...form.getInputProps('type')}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default SchemaBuilder
