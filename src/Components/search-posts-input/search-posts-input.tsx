import { useState } from "react";
import styles from "./seacrch-posts-input.module.css";

interface SearchPostsInputProps {
  filtredType?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  filterTypes?: string[];
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFilter?: string; // adiciona para controle externo opcional
}

export default function SearchBar(props: SearchPostsInputProps) {
  const [internalFilter, setInternalFilter] = useState("");

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInternalFilter(e.target.value);
    props.filtredType?.(e);
  };

  const filterValue = props.selectedFilter ?? internalFilter;

  return (
    <div className={styles.search_container}>
      <input
        type="text"
        placeholder={props.placeholder}
        className={styles.search_input}
        onChange={props.onChange}
      />
      {props.filterTypes && props.filterTypes.length > 0 && (
        <select
          className={styles.filter_select}
          value={filterValue}
          onChange={handleFilterChange}
        >
          <option value="">Todos</option>
          {props.filterTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
