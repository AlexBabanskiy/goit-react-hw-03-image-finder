import { Searchbardiv } from './Searchbar.styled';

export function Searchbar() {
  return (
    <Searchbardiv>
      <header class="searchbar">
        <form class="form">
          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />

          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>
        </form>
      </header>
    </Searchbardiv>
  );
}
