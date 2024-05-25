import { FC } from "react";
import { PuffLoader } from "react-spinners";

interface ISpinnerProps {
  loading: boolean;
}

export const Spinner: FC<ISpinnerProps> = ({ loading }) => {
  return <PuffLoader loading={loading} color="#6373ec" />;
};
