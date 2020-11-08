<template>
  <div>
    <div class="center">
      <h1>{{$t(`text.${selectedSection}`)  | capitalize}}</h1>
      <br />
      <md-menu>
        <md-button class="md-raised" md-menu-trigger>{{$tc('text.sections', 2)}}</md-button>
<md-menu-content>
          <md-menu-item
            v-for="s in sections"
            :key="s"
            @click="selectSection(s)"
          >{{$t(`text.${s}`) | capitalize}}</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
    <br />
<md-card v-for="a in articles" :key="a.id">
      <md-card-header>
        <div class="md-title title">{{a.title}}</div>
      </md-card-header>
<md-card-content>
        <md-list>
          <md-list-item>{{$t(`text.date`)}}: {{a.published_date | formatDate}}</md-list-item>
          <md-list-item>
            <a :href="a.url">{{$t('text.link')}}</a>
          </md-list-item>
          <md-list-item v-if="a.byline">{{a.byline}}</md-list-item>
          <md-list-item>{{a.abstract}}</md-list-item>
        </md-list>
        <img
          v-if="a.multimedia[a.multimedia.length - 1]"
          :src="a.multimedia[a.multimedia.length - 1].url"
          :alt="a.multimedia[a.multimedia.length - 1].caption"
          class="image"
        />
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
import { nytMixin } from "../mixins/nytMixin";
export default {
  name: "home",
  mixins: [nytMixin],
  computed: {},
data() {
    return {
      selectedSection: "home",
      articles: [],
      sections: `arts, automobiles, books, business, fashion, food, health,
    home, insider, magazine, movies, national, nyregion, obituaries,
    opinion, politics, realestate, science, sports, sundayreview,
    technology, theater, tmagazine, travel, upshot, world`
        .replace(/ /g, "")
        .split(",")
    };
  },
beforeMount() {
    this.getNewsArticles(this.selectedSection);
  },
methods: {
    async getNewsArticles(section) {
      const response = await this.getArticles(section);
      this.articles = response.data.results;
    },
selectSection(section) {
      this.selectedSection = section;
      this.getNewsArticles(section);
    }
  }
};
</script>
<style scoped>
.image {
  width: 100%;
}
.title {
  color: rgba(0, 0, 0, 0.87) !important;
  margin: 0 15px !important;
}
.md-card {
  width: 95vw;
  margin: 0 auto;
}
</style>