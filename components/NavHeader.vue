<template>
  <header id="header">
    <div id="header-wrap">
      <div class="container">
        <nav class="filter">
          <span class="cat-filter">
            <span class="filter-text">Kategoria :&nbsp;</span>
            <span class="filter-by">Wszystkie</span>
          </span>
          <div class="filter-dropdown">
            <ul class="filter-items">
              <li class="active"><a href="/">Strona główna</a></li>
              <li><a href="/newsy">Newsy</a></li>
              <li><a href="/video">Video</a></li>
              <li><a href="/wywiady">Wywiady</a></li>
              <li><a href="/politycy">Politycy</a></li>
            </ul>
          </div>
        </nav>
        <!-- / CATEGORIES FILTER -->

        <!-- LOGO -->
        <h1 id="logo">
          <a href="/" title="Jeżyq">
            <img
              class="logo-dark"
              src="~/assets/img/logo.png"
              srcset="~/assets/img/logo.png 1x, ~/assets/img/logo@2x.png 2x"
              alt="Jeżyq"
            />
          </a>
        </h1>
        <!-- / LOGO -->

        <!-- HEADER ACTIONS -->
        <div class="actions">
          <div class="actions-wrap">
            <!-- Newsletter -->
            <div class="newsletter">
              <a href="#" class="nl-popup-trigger">
                <span class="icon-envelope">
                  <svg class="" viewBox="0 0 32 22">
                    <use xlink:href="images/ui-icons.svg#envelope-icon"></use>
                  </svg>
                </span>
                <span class="tooltip">Newsletter</span>
              </a>
            </div>
            <!-- / Newsletter -->

            <!-- Search -->
            <div class="search">
              <a href="#" class="search-popup-trigger">
                <span class="icon-search">
                  <svg class="" viewBox="0 0 32 32">
                    <use xlink:href="images/ui-icons.svg#search-icon"></use>
                  </svg>
                </span>
                <span class="tooltip">Wyszukaj</span>
              </a>
            </div>
            <!-- / Search -->

            <!-- Navigation -->
            <div class="menu-btn">
              <a id="mobile-menu-trigger" href="#">
                <span class="icon-menu">
                  <svg class="" viewBox="0 0 26 20">
                    <use xlink:href="images/ui-icons.svg#hamburger-icon"></use>
                  </svg>
                </span>
                <span class="tooltip">Menu</span>
              </a>
            </div>
            <!-- / Navigation -->
          </div>
        </div>
        <!-- / HEADER ACTIONS -->
      </div>
    </div>
  </header>
</template>
