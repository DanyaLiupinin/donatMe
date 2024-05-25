import { FC } from "react";
import { PuffLoader } from "react-spinners";

interface ISpinnerProps {
  loading: boolean;
}

export const Spinner: FC<ISpinnerProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="bg-[#0e0d0db5] z-20 absolute top-0 left-0 bottom-0 right-0 my-auto mx-auto flex justify-center items-center">
          <PuffLoader loading={loading} color="#f07cfa" />
        </div>
      )}
    </>
  );
};
