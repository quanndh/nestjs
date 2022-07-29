import { ethers } from 'ethers';

(async () => {
  const msg = 'alo';

  const wallet = new ethers.Wallet('0x393af8b482052fef511a97a3e96c22335210b3328c94629d2cec316853345b51');

  const signature = await wallet.signMessage(msg);

  const signedWallet = ethers.utils.verifyMessage(msg, signature);

  console.log({ signatureLe: signature.substring(2).length, signature: signature.substring(2), signedWallet });
})();
