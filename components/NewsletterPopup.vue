<template>
  <div class="nl-popup">
    <div class="nl-popup-container">
      <h2 class="nl-title">Dołącz do nas</h2>
      <hr class="sep accent" />
      <p class="nl-sub-title">
        Dołącz do newslettera by być powiadamianym o&nbsp;nowościach na stronie.
      </p>

      <form id="nl-popup-form" class="nl-popup-form" method="post">
        <div class="form-group">
          <input
            id="input-email-signup"
            class="form-control"
            type="email"
            name="EmailAddress"
            value=""
            placeholder="Twój adres email"
          />

          <button id="nl-popup-submit" class="btn" type="submit">
            <i>
              <svg class="" viewBox="0 0 20 10">
                <use
                  xlink:href="~/assets/img/ui-icons.svg#arrow-right-small-icon"
                ></use>
              </svg>
            </i>
          </button>
        </div>
      </form>
    </div>
    <a href="#" class="nl-popup-close">
      <i>
        <svg viewBox="0 0 24 24">
          <use xlink:href="~/assets/img/ui-icons.svg#close-icon"></use>
        </svg>
      </i>
    </a>
  </div>
</template>
