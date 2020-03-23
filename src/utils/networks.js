import BitcoinNetworks from '@liquality/bitcoin-networks'
import EthereumNetworks from '@liquality/ethereum-networks'
import config from '../config'

const networksMap = {
  btc: BitcoinNetworks,
  eth: EthereumNetworks,
  erc20: EthereumNetworks
}

function getNetworkByCurrency (asset) {
  const assetConfig = config.assets[asset]
  const networkId = assetConfig.network
  const networks = networksMap[asset] || networksMap[assetConfig.type]
  return networks[networkId]
}

function isETHNetwork (asset) {
  const assetConfig = config.assets[asset]
  return asset === 'eth' || assetConfig.type === 'erc20'
}

export { getNetworkByCurrency, isETHNetwork }
