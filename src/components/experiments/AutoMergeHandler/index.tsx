import useRepoService from '@/hooks/services/useRepoService'
import InvoCard from '@/elements/InvoCard'

function AutoMergeHandler() {
  const handler = useRepoService<{ count: number }>()

  handler?.change(doc => {
    doc.count = 5
  })

  return (
    <>
      <InvoCard />
    </>
  )
}

export default AutoMergeHandler 
