import { SearchIcon } from "assets";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SearchButton, SearchWrapper, StyledSearch } from "./styles";

interface IProps {
  closeBurger: () => void;
}

export const Search = ({ closeBurger }: IProps) => {
  const navigate = useNavigate();

  const { register, watch } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const value = watch("search");

  const handleSearchButton = () => {
    navigate(`search/${value}/1`);
  };

  return (
    <SearchWrapper>
      <StyledSearch
        type="text"
        placeholder="Search"
        {...register("search", {
          required: {
            value: true,
            message: "Please, enter a value",
          },
        })}
      />
      <SearchButton
        onClick={() => {
          handleSearchButton();
          closeBurger();
        }}
        whileHover={{ scale: 1.1 }}
      >
        <SearchIcon />
      </SearchButton>
    </SearchWrapper>
  );
};
