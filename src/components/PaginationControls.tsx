import { ChangeEvent, useState, useEffect, useRef } from "react";

type PaginationControlsProps = {
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  setPage: (page: number) => void;
  lastPage: number;
};

export const PaginationControls = ({
  currentPage,
  onNext,
  onPrevious,
  hasNextPage,
  hasPreviousPage,
  lastPage,
  setPage,
}: PaginationControlsProps) => {
  const [isInput, setIsInput] = useState(false);
  const [inputValue, setInputValue] = useState(currentPage);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setPage(inputValue);
    }, 750);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setPage]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= lastPage) {
      setInputValue(value);
    }
  };

  useEffect(() => {
    if (isInput && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isInput]);

  return (
    <div className="flex justify-evenly my-4 items-center">
      <div className={"flex gap-5"}>
        <button
          onClick={() => setPage(1)}
          disabled={!hasPreviousPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            !hasPreviousPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          First (1)
        </button>
        <button
          onClick={onPrevious}
          disabled={!hasPreviousPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            !hasPreviousPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>
      </div>
      {isInput ? (
        <input
          min={1}
          max={lastPage}
          type="number"
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          onBlur={() => setIsInput(false)}
          className="w-10 text-center bg-transparent font-semibold p-0 m-0 number-input"
        />
      ) : (
        <span
          className="w-10 text-center text-lg font-semibold cursor-pointer"
          onClick={() => setIsInput(true)}
        >
          {currentPage}
        </span>
      )}
      <div className={"flex gap-5"}>
        <button
          onClick={onNext}
          disabled={!hasNextPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
        <button
          onClick={() => setPage(lastPage)}
          disabled={!hasNextPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${
            !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Last ({lastPage})
        </button>
      </div>
    </div>
  );
};
