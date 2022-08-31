import * as React from 'react'
import * as ethers from 'ethers'
import { useEthers } from '@usedapp/core'

export type Block = ethers.ethers.providers.Block

export const useBlock = (blockNumber: number) => {
  const [block, setBlock] = React.useState<Block | null>(null)
  const ethers = useEthers()

  const getBlockDetails = React.useCallback(async () => {
    const blockDetails = await ethers.library?.getBlock(blockNumber)

    setBlock(blockDetails || null)
  }, [ethers.library, setBlock, blockNumber])

  React.useEffect(() => {
    getBlockDetails()
  }, [getBlockDetails])

  return block
}
