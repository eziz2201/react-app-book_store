import { useAppSelector } from "../../store/hooks/hooks";
import { getSearchBooksCurrentPage } from "../../store/selectors/searchBooksSelectors";
import { createPages } from "../../utils/pagesCreator";
import IconSelector from "../IconSelector/IconSelector";
import {
  StyledNavigationButton,
  StyledNumberButton,
  StyledNumberButtonList,
  StyledPageControl,
} from "./styles";

interface IPageControl {
  handlePrevPage: () => void;
  handlePage: (item: number) => void;
  handleNextPage: () => void;
  totalPage: number;
}

const PageControl = ({
  handlePrevPage,
  handlePage,
  handleNextPage,
  totalPage,
}: IPageControl) => {
  const searchBooksCurrentPage = useAppSelector(getSearchBooksCurrentPage);
  const ArrayOfTotalPage: [] = [];

  createPages(ArrayOfTotalPage, totalPage, searchBooksCurrentPage);
  return (
    <StyledPageControl>
      <StyledNavigationButton type="button" onClick={handlePrevPage}>
        <IconSelector id="prev" /> Prev
      </StyledNavigationButton>
      <StyledNumberButtonList>
        {ArrayOfTotalPage.map((item) => (
          <StyledNumberButton
            isActive={searchBooksCurrentPage === item}
            key={item}
            onClick={() => handlePage(item)}
          >
            {item}
          </StyledNumberButton>
        ))}
      </StyledNumberButtonList>

      <StyledNavigationButton type="button" onClick={handleNextPage}>
        Next <IconSelector id="next" />
      </StyledNavigationButton>
    </StyledPageControl>
  );
};

export default PageControl;
