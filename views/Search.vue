<template>
  <div>
    <div class="center">
      <h1>{{$t('text.search')}}</h1>
    </div>
    <form @submit="search" novalidate>
      <md-field :class="{ 'md-invalid': errors.has('keyword') }">
        <label for="keyword">{{$t('text.keyword')}}</label>
        <md-input type="text" name="keyword" v-model="searchData.keyword" v-validate="'required'"></md-input>
        <span class="md-error" v-if="errors.has('keyword')">{{errors.first('keyword')}}</span>
      </md-field>
<div>
        <md-datepicker v-model="searchData.beginDate" :md-disabled-dates="disabledDates">
          <label>{{$t('text.begin_date')}}</label>
        </md-datepicker>
      </div>
<div>
        <md-datepicker v-model="searchData.endDate" :md-disabled-dates="disabledDates">
          <label>{{$t('text.end_date')}}</label>
        </md-datepicker>
      </div>
<md-field>
        <label for="movie">{{$t('text.sort_by')}}</label>
        <md-select v-model="searchData.sort">
          <md-option value="newest">{{$t('text.newest')}}</md-option>
          <md-option value="oldest">{{$t('text.oldest')}}</md-option>
          <md-option value="relevance">{{$t('text.relevance')}}</md-option>
        </md-select>
      </md-field>
<md-button class="md-raised" type="submit">{{$t('text.search')}}</md-button>
    </form>
    <SearchResults />
  </div>
</template>
<script>
import { nytMixin } from "../mixins/nytMixin";
import SearchResults from "@/components/SearchResults.vue";
import * as moment from "moment";
export default {
  name: "search",
  mixins: [nytMixin],
  components: {
    SearchResults
  },
  computed: {
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    }
  },
  data: () => {
    return {
      searchData: {
        sort: "newest"
      },
      disabledDates: date => {
        return +date >= +new Date();
      }
    };
  },
  methods: {
    async search(evt) {
      evt.preventDefault();
      if (!this.isFormDirty || this.errors.items.length > 0) {
        return;
      }
      const data = {
        q: this.searchData.keyword,
        begin_date: moment(this.searchData.beginDate).format("YYYYMMDD"),
        end_date: moment(this.searchData.endDate).format("YYYYMMDD"),
        sort: this.searchData.sort
      };
      const response = await this.searchArticles(data);
      this.$store.commit("setSearchResults", response.data.response.docs);
    }
  }
};
</script>