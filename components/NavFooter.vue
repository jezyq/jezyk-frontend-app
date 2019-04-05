<template>
  <footer id="footer" class="footer-fixed-x footer-dark">
    <div class="footer-widgets">
      <div class="container">
        <div class="row">
          <div class="widget col-md-4">
            <p class="text-center">
              <small>
                Jeżyq &copy; 2019. Serwis powstał we współpracy z
                <a href="http://acidcode.pl" target="_blank">acidcode</a>.
              </small>
            </p>
          </div>

          <div class="widget col-md-4">
            <div class="footer-menu-widget footer-menu">
              <ul>
                <li>
                  <nuxt-link to="/o-nas">O nas</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/kontakt">Kontakt</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/minimum-wolnosciowe">
                    Minimum wolnościowe
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/dolacz-do-nas">Dołącz do nas</nuxt-link>
                </li>
              </ul>
            </div>
          </div>

          <div class="widget col-md-4">
            <div class="social-widget socials social-small">
              <ul class="social-icon-block">
                <li>
                  <a
                    href="https://www.facebook.com/groups/jezyq/"
                    class="facebook"
                    target="_blank"
                  >
                    <i>
                      <svg viewBox="0 0 32 32">
                        <use xlink:href="/social-icons.svg#facebook-icon"></use>
                      </svg>
                    </i>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/Jezyq_sw"
                    class="twitter"
                    target="_blank"
                  >
                    <i>
                      <svg viewBox="0 0 32 32">
                        <use xlink:href="/social-icons.svg#twitter-icon"></use>
                      </svg>
                    </i>
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
