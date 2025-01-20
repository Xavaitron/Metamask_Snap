import { BIP44Node, getBIP44AddressKeyDeriver } from '@metamask/key-tree';

/**
 * Derive the single account we're using for this snap.
 * The path of the account is m/44'/637'/0'/0'/0'.
 */
export const getAccount = async (): Promise<BIP44Node> => {
  const aptosTestNode = await snap.request({
    method: 'snap_getBip44Entropy',
    params: {
      coinType: 637,
    },
  });

  const deriveAptosTestnetPrivateKey = await getBIP44AddressKeyDeriver(
    aptosTestNode,
  );

  return deriveAptosTestnetPrivateKey(0);
};
