import { ChainId, Config } from '@usedapp/core'

export const localConfig: Config = {
  readOnlyChainId: ChainId.Hardhat,
  readOnlyUrls: {
    [ChainId.Hardhat]: 'http://localhost:8545',
  },
}

export const ropstenConfig: Config = {
  readOnlyChainId: ChainId.Ropsten,
  readOnlyUrls: {
    [ChainId.Ropsten]: 'API_URL_TO_NODE_PROVIDER',
  },
}

export const config =
  process.env.NODE_ENV === 'development' ? localConfig : ropstenConfig
