import { IPaginate } from "@/interfaces/paginate";
import { Button } from "../button";
import { Wrapper } from "./styles";

interface Props {
  paginate: IPaginate;
  handlePageChange: (page: number) => void;
}

export const Paginate = ({ paginate, handlePageChange }: Props) => {
  const handlePrevious = () => {
    handlePageChange(Math.max(paginate.currentPage - 1, 1));
  };

  const handleNext = () => {
    handlePageChange(Math.min(paginate.currentPage + 1, paginate.totalPages));
  };

  return (
    <Wrapper>
      <Button
        text="<"
        onClick={handlePrevious}
        disabled={paginate.currentPage === 1}
        styleType="colorful"
      />
      <span className="number">
        Page {paginate.currentPage} of {paginate.totalPages}
      </span>
      <Button
        text=">"
        onClick={handleNext}
        disabled={paginate.currentPage === paginate.totalPages}
        styleType="colorful"
      />
    </Wrapper>
  );
};
