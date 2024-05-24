type TWallet = any;

interface IWalletBadgeProps {
  wallet: TWallet;
  onClickWallet: (wallet: TWallet) => void;
}

export const WalletBadge = ({ wallet, onClickWallet }: IWalletBadgeProps) => {
  return (
    <div
      onClick={() => onClickWallet(wallet)}
      className="flex between-content items-center gap-3 bg-[#73abff4a] p-2 rounded"
    >
      <img src={wallet.imageUrl} alt="" className="w-[20px] h-[20px]" />
      <p className="text-white">{wallet.name}</p>
    </div>
  );
};
