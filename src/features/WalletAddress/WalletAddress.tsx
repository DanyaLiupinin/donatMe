import { useEffect, useRef, useState } from "react";
import { connector } from "../../connector";
import { Spinner } from "@components";

export const WalletAddress = ({
  address,
  className = "",
}: {
  address: string;
  className?: string;
}) => {
  const [isDropdownOpened, setDropdownOpened] = useState(false);
  const [isSpinner, setIsSpinner] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onDisconnectWallet = () => {
    setIsSpinner(true);
    setTimeout(() => {
      connector.disconnect();
      setIsSpinner(false);
    }, 2000);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Spinner loading={isSpinner} />
      <div className={className}>
        <p
          onClick={() => setDropdownOpened(!isDropdownOpened)}
          className="text-white text-end"
        >
          {address}
        </p>
        {isDropdownOpened && (
          <div ref={dropdownRef} className="bg-white rounded">
            <button onClick={onDisconnectWallet}>Disconnect</button>
          </div>
        )}
      </div>
    </>
  );
};
