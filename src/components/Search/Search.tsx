import { SearchIcon } from "assets";
import { SearchModal } from "components";
import { useForm } from "react-hook-form";
import { useWindowSize } from "hooks";
import { useNavigate } from "react-router-dom";
import { SearchButton, SearchWrapper, StyledSearch } from "./styles";
import { Color } from "ui";

interface IProps {
  closeBurger: () => void;
}

interface ISearch {
  search: string;
}

export const Search = ({ closeBurger }: IProps) => {
  const { width = 0 } = useWindowSize();
  const navigate = useNavigate();

  const handleSearchButton = () => {
    navigate(`search/${value}/1`);
  };

  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      search: "",
    },
    mode: "onChange",
  });

  const handleSearch = (search: ISearch) => {
    reset();
  };

  const value = watch("search");

  return (
    <SearchWrapper onSubmit={handleSubmit(handleSearch)}>
      <StyledSearch
        type="text"
        placeholder="Search"
        value={value}
        {...register("search", {
          required: {
            value: true,
            message: "Please, enter a value",
          },
        })}
        whileFocus={{ border: `1px solid ${Color.Primary}` }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <SearchButton
        onClick={() => {
          handleSearchButton();
          closeBurger();
        }}
      >
        <SearchIcon />
      </SearchButton>

      {width > 9992 && value && <SearchModal value={value} />}
    </SearchWrapper>
  );
};
