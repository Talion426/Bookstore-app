import { ChangeEvent, useEffect, useState } from "react";
import { feachSearchBooks, getSearchBooks, useAppDispatch, useAppSelector } from "../../store";
import { StyledSearch, SearchButton, SearchWrapper } from "./styles";
import { SearchIcon } from "../../assets";

interface IProps {
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ placeholder, type, value, onChange }: IProps) => {
  const [params, setParams] = useState({
    searchValue: "",
    page: "",
  });

  const dispatch = useAppDispatch();
  const { result, isLoading } = useAppSelector(getSearchBooks);

  useEffect(() => {
    dispatch(feachSearchBooks(params));
  }, [dispatch, params]);

  const { books, page, error, total } = result;

  const handleParams = () => {
    setParams({ searchValue: value, page: "1" });
  };

  return (
    <SearchWrapper>
      {" "}
      <StyledSearch type={type} placeholder={placeholder} value={value} onChange={onChange} />
      <SearchButton onClick={handleParams}>
        <SearchIcon />
      </SearchButton>
    </SearchWrapper>
  );
};
