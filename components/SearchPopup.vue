<template>
  <div class="search-popup">
    <div class="search-popup-container">
      <form id="search-popup-form" class="search-popup-form" method="post">
        <input
          id="search-popup"
          class="form-control"
          type="text"
          name="searchpopup"
          value=""
          placeholder="Wyszukaj..."
        />
        <input
          id="search-popup-submit"
          class="btn"
          type="submit"
          value="Submit"
          disabled
        />
      </form>
      <h5 class="cat-list-title">lub wybierz kategorię</h5>
      <ul class="cat-list">
        <li class="cat-list-item"><a href="category.html">Newsy</a></li>
        <li class="cat-list-item"><a href="category.html">Video</a></li>
        <li class="cat-list-item"><a href="category.html">Wywiady</a></li>
        <li class="cat-list-item"><a href="category.html">Politycy</a></li>
      </ul>
    </div>
    <a href="#" class="search-popup-close">
      <i>
        <svg viewBox="0 0 24 24">
          <use xlink:href="~/assets/img/ui-icons.svg#close-icon"></use>
        </svg>
      </i>
    </a>
  </div>
</template>
