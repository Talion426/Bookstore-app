import { BookDetails, Title } from "components";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchGetBookDetails, getBookDetails, useAppDispatch, useAppSelector } from "store";
import { StyledBookPage } from "./styles";

export const BookPage = () => {
  const params = useParams();
  const [options] = useState({ isbn13: `${params.isbn13}` });
  const { result, isLoading } = useAppSelector(getBookDetails);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetBookDetails(options));
  }, [dispatch, options]);

  return (
    <StyledBookPage>
      <BookDetails book={result} />
    </StyledBookPage>
  );
};
