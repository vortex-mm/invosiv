import { useMemo, useRef } from 'react'
import { DocHandle, isValidAutomergeUrl, Repo } from '@automerge/automerge-repo'
import { BroadcastChannelNetworkAdapter } from '@automerge/automerge-repo-network-broadcastchannel'
import { IndexedDBStorageAdapter } from '@automerge/automerge-repo-storage-indexeddb'

const useRepoService = <T>() => {
  const handler = useRef<DocHandle<T>>()

  useMemo(() => {
    const rootDocUrl = `${document.location.hash}`

    const repo = new Repo({
      network: [new BroadcastChannelNetworkAdapter()],
      storage: new IndexedDBStorageAdapter()
    })

    if (isValidAutomergeUrl(rootDocUrl)) {
      handler.current = repo.find(rootDocUrl)
    } else {
      handler.current = repo.create()
    }
  }, [])

  return handler.current
}

export default useRepoService
