<template>
  <nav id="side-tray-wrapper" class="">
    <div class="side-tray-container scrollbar-macosx">
      <div class="side-tray-close">
        <a href="#">
          <i>
            <svg viewBox="0 0 24 24">
              <use xlink:href="images/ui-icons.svg#close-icon"></use>
            </svg>
          </i>
        </a>
      </div>

      <nav id="main-nav-wrapper">
        <ul class="main-navigation">
          <li class="nav-link-cat"><a href="/newsy">Newsy</a></li>
          <li class="nav-link-cat"><a href="/video">Video</a></li>
          <li class="nav-link-cat"><a href="/wywiady">Wywiady</a></li>
          <li class="nav-link-cat"><a href="/politycy">Politycy</a></li>
          <li class="nav-link"><a href="/dolacz-do-nas">Dołącz do nas</a></li>
          <li class="nav-link"><a href="/app">Aplikacja</a></li>
        </ul>
      </nav>

      <div id="side-tray-widgets">
        <!-- AUTHOR WIDGET -->
        <section class="widget author-widget">
          <div class="author-box text-center">
            <div class="author-avatar">
              <img
                src="https://source.unsplash.com/xxTHuC_wdn0/300x300"
                class="img-circle"
                alt=""
              />
            </div>
            <h3 class="title">Jeżyq</h3>
            <p class="description">Społeczność Wolnościowa</p>
          </div>
        </section>
        <!-- / AUTHOR WIDGET -->

        <!-- SEARCH WIDGET -->
        <section class="widget search-widget">
          <form
            id="search-widget-form"
            class="search-form"
            method="get"
            action="#"
          >
            <div class="form-group">
              <input
                id="search-widget-input"
                type="text"
                name="s"
                class="form-control"
                placeholder="Wyszukaj..."
              />
              <button id="searchsubmit" class="search-button" type="submit">
                <i class="icon-search">
                  <svg class="" viewBox="0 0 32 32">
                    <use xlink:href="images/ui-icons.svg#search-icon"></use>
                  </svg>
                </i>
              </button>
            </div>
          </form>
        </section>
        <!-- / SEARCH WIDGET -->

        <!-- RECENT POST WIDGET -->
        <section class="widget recent-posts-widget">
          <h3 class="widget-title">Newsy</h3>
          <ul class="posts-list">
            <li>
              <span class="count">1.</span>
              <a href="blog-single.html">
                I Quit Drinking: 7 Ways it Changed my Life
              </a>
            </li>
          </ul>
        </section>
        <!-- / RECENT POST WIDGET -->

        <!-- NEWSLETTER WIDGET -->
        <section class="widget newsletter-widget">
          <h3 class="widget-title">Newsletter</h3>
          <p>Dołącz do naszej listy mailingowej- bądź na bieżąco.</p>
          <form
            id="side-tray-subscribe-form"
            method="post"
            name="subscribe-form"
            class="newsletter-form"
          >
            <div class="form-group">
              <input
                id="side-tray-email-signup"
                type="email"
                value=""
                name="email-signup"
                class="form-control"
              />
              <label for="side-tray-email-signup">
                <span class="label-text">Twój adres email</span>
              </label>
              <button class="submit-btn" type="submit">
                <i>
                  <svg class="" viewBox="0 0 25 10">
                    <use
                      xlink:href="images/ui-icons.svg#arrow-right-icon"
                    ></use>
                  </svg>
                </i>
              </button>
            </div>
          </form>
        </section>
        <!-- / NEWSLETTER WIDGET -->

        <!-- RECENT COMMENTS WIDGET -->
        <section class="widget recent-comments-widget">
          <h3 class="widget-title">Ostatnie Wywiady</h3>
          <ul class="posts-list">
            <li>
              <span class="count">1.</span>
              <span class="comment-author-link">
                <a href="#">Benjamin Nortan</a>
              </span>
              on
              <a href="blog-single.html">
                How To Maintain Your Mental Health
              </a>
            </li>
          </ul>
        </section>
        <!-- / RECENT COMMENTS WIDGET -->

        <!-- SOCIAL LINK WIDGET -->
        <section class="widget social-link-widget">
          <div class="socials social-transparent-dark">
            <ul class="social-icon-block">
              <li>
                <a href="#" class="facebook">
                  <i>
                    <svg viewBox="0 0 32 32">
                      <use
                        xlink:href="images/social-icons.svg#facebook-icon"
                      ></use>
                    </svg>
                  </i>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <i>
                    <svg viewBox="0 0 32 32">
                      <use
                        xlink:href="images/social-icons.svg#twitter-icon"
                      ></use>
                    </svg>
                  </i>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="youtube">
                  <i>
                    <svg viewBox="0 0 32 32">
                      <use
                        xlink:href="images/social-icons.svg#youtube-icon"
                      ></use>
                    </svg>
                  </i>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </section>
        <!-- / SOCIAL LINK WIDGET -->
      </div>
      <!-- / WIDGETS AREA -->
    </div>
  </nav>
</template>
