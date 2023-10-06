import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import * as S from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

function SearchFormComponent() {
  const [newRepo, setNewRepo] = useState("");
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchRepo() {
    reset();
  }
  return (
    <S.SearchFormContainer onSubmit={handleSearchRepo}>
      <input
        type="text"
        value={newRepo}
        onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Busque por repositório"
        // {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <HiOutlineMagnifyingGlass size={20} />
        Buscar
      </button>
    </S.SearchFormContainer>
  );
}

export const SearchForm = memo(SearchFormComponent);
