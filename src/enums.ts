// https://bitcoindata.science/bitcoin-units-converter.html
export enum BtcUnits {
  satoshi = 1,
  finney = 10 ** 1,
  bit = 10 ** 2,
  millibit = 10 ** 5,
  bitcent = 10 ** 6,
  bitcoin = 10 ** 8
}

// https://etherscan.io/unitconverter
export enum EtherUnits {
  Wei = 1,
  KWei = 10 ** 3,
  MWei = 10 ** 6,
  GWei = 10 ** 9,
  Szabo = 10 ** 12,
  Finney = 10 ** 15,
  Ether = 10 ** 18
}
