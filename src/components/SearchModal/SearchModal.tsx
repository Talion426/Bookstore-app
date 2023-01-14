import { Portal, SearchModalList } from "components";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSearchBooks, getSearchBooks, useAppDispatch, useAppSelector } from "store";
import { TargetPortal } from "ui";
import { SearchModalWrapper, Button } from "./styles";

interface IProps {
  value: string;
}

export const SearchModal = ({ value }: IProps) => {
  const dispatch = useAppDispatch();
  const { searchValue } = useParams();
  const { results } = useAppSelector(getSearchBooks);
  const { books } = results;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      fetchSearchBooks({
        searchValue: value,
        page: "1",
      }),
    );
  }, [searchValue, dispatch]);

  const handleSearch = () => {
    navigate(`search/${value}/1`);
  };

  return (
    <Portal target={TargetPortal.SEARCH}>
      <SearchModalWrapper>
        {books && books.length > 0 && (
          <>
            <SearchModalList books={books} />
            <Button
              onClick={() => {
                handleSearch();
              }}
            >
              all results
            </Button>
          </>
        )}
      </SearchModalWrapper>
    </Portal>
  );
};
