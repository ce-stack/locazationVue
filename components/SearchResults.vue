<template>
  <div id="search-results">
    <md-card v-for="s in searchResults" :key="s.id">
      <md-card-header>
        <div class="md-title title">{{s.headline.main}}</div>
      </md-card-header>
<md-card-content>
        <md-list>
          <md-list-item>{{$t(`text.date`)}}: {{s.pub_date | formatDate}}</md-list-item>
          <md-list-item>
            <a :href="s.web_url">{{$t('text.link')}}</a>
          </md-list-item>
          <md-list-item v-if="s.byline.original">{{s.byline.original}}</md-list-item>
          <md-list-item>{{s.lead_paragraph}}</md-list-item>
          <md-list-item>{{s.snippet}}</md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
  </div>
</template>
<script>
export default {
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    }
  }
};
</script>
<style scoped>
.title {
  margin: 0 15px !important;
}
#search-results {
  margin: 0 auto;
  width: 95vw;
}
.md-title.title {
  color: rgba(0, 0, 0, 0.87) !important;
}
</style>