import "./SearchBar.css";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar = ({ search, setSearch }: Props) => {
  return (
    <div className="search-bar">

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>
  );
};

export default SearchBar;