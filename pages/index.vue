<template>
  <div id="content-wrap">
    <div id="main-content">
      <div id="content-area">
        <div class="blog-grid">
          <div class="post-wrap">
            <article class="post">
              <a href="#">
                <div class="post-media">
                  <img
                    src="https://source.unsplash.com/Z_NBiiq0Zgc/500x500"
                    alt=""
                  />
                </div>
                <div class="post-content">
                  <div class="post-meta">
                    <span class="cat-links">
                      <span>Life Style</span>
                    </span>
                  </div>
                  <h2 class="blog-title">
                    <span>I Quit Drinking: 7 Ways it Changed my Life</span>
                  </h2>
                </div>
              </a>
            </article>
          </div>

          <div id="load-more">
            <div class="container">
              <nav class="pagination clearfix">
                <div class="col-prev">
                  <a href="#">
                    <i class="arrow-left">
                      <svg class="" viewBox="0 0 35 10">
                        <use
                          xlink:href="/ui-icons.svg#arrow-left-long-icon"
                        ></use>
                      </svg>
                    </i>
                    <span>Previous page</span>
                  </a>
                </div>
                <div class="col-pages">
                  <a class="page-numbers" href="#">1</a>
                  <span class="page-numbers dots">…</span>
                  <a class="page-numbers" href="#">3</a>
                  <a class="page-numbers" href="#">4</a>
                  <span class="page-numbers current">5</span>
                  <a class="page-numbers" href="#">6</a>
                  <a class="page-numbers" href="#">7</a>
                  <span class="page-numbers dots">…</span>
                  <a class="page-numbers" href="#">10</a>
                </div>
                <div class="col-next">
                  <a href="#">
                    <span>Next page</span>
                    <i class="arrow-right">
                      <svg class="" viewBox="0 0 35 10">
                        <use
                          xlink:href="/ui-icons.svg#arrow-right-long-icon"
                        ></use>
                      </svg>
                    </i>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <section class="newsletter-section" data-bg-color="FFC8B2">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="newsletter-inner">
                  <header class="section-header text-center">
                    <h3 class="section-title">Newsletter</h3>
                    <hr class="sep" />
                    <p class="description">
                      Okazjonalne powiadomienia o nowościach i ciekawych
                      inicjatywach związanych z naszą społecznością.
                    </p>
                  </header>
                  <div class="newsletter-form">
                    <form
                      id="subscribe-form"
                      method="post"
                      name="subscribe-form"
                      class="newsletter-form"
                    >
                      <div class="form-group">
                        <input
                          id="subscription-email"
                          type="email"
                          value=""
                          name="subscription-email"
                          class="form-control"
                          placeholder="Twój adres email"
                        />
                        <button
                          id="subscription-submit"
                          class="btn"
                          type="submit"
                        >
                          <i>
                            <svg class="" viewBox="0 0 20 10">
                              <use
                                xlink:href="/ui-icons.svg#arrow-right-small-icon"
                              ></use>
                            </svg>
                          </i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
