<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <h3 class="md-title">{{$t('text.nyt_app')}}</h3>
      <div class="md-toolbar-section-end">
        <md-menu md-direction="bottom-start">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>
         <md-menu-content>
            <md-menu-item @click="setLocale('en')">{{$t('text.english')}}</md-menu-item>
            <md-menu-item @click="setLocale('fr')">{{$t('text.french')}}</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </md-toolbar>
    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">{{$t('text.nyt_app')}}</span>
      </md-toolbar>
<md-list>
        <md-list-item>
          <router-link to="/">
            <span class="md-list-item-text">{{$t('text.home')}}</span>
          </router-link>
        </md-list-item>
<md-list-item>
          <router-link to="/search">
            <span class="md-list-item-text">{{$t('text.search')}}</span>
          </router-link>
        </md-list-item>
      </md-list>
    </md-drawer>
<router-view />
  </div>
</template>
<script>
import { ENGLISH_DATEPICKER_LOCALE } from "@/datepickerLocales/en";
import { FRENCH_DATEPICKER_LOCALE } from "@/datepickerLocales/fr";
export default {
  name: "app",
  data: () => {
    return {
      showNavigation: false
    };
  },
  methods: {
    setLocale(locale) {
      this.$root.$i18n.locale = locale;
      if (locale == "en") {
        this.$material.locale = ENGLISH_DATEPICKER_LOCALE;
      } else if (locale == "fr") {
        this.$material.locale = FRENCH_DATEPICKER_LOCALE;
      }
      localStorage.setItem("locale", locale);
    }
  },
  beforeMount() {
    const locale = localStorage.getItem("locale") || "en";
    this.$root.$i18n.locale = locale;
    if (locale == "en") {
      this.$material.locale = ENGLISH_DATEPICKER_LOCALE;
    } else if (locale == "fr") {
      this.$material.locale = FRENCH_DATEPICKER_LOCALE;
    }
  }
};
</script>
<style>
.center {
  text-align: center;
}
form {
  width: 95vw;
  margin: 0 auto;
}
.md-toolbar.md-theme-default {
  background: #009688 !important;
  height: 60px;
}
.md-title,
.md-toolbar.md-theme-default .md-icon {
  color: #fff !important;
}
</style>