<template>
  <SearchBox />
  <ResultsAnime />
</template>

<script>
import SearchBox from '../components/SearchBox.vue';
import ResultsAnime from '../components/ResultsAnime.vue';

export default {
  name: 'Home',
  components: {
    SearchBox,
    ResultsAnime,
  },
};
</script>
