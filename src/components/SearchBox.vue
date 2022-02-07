<template>
  <section class="container">
    <div class="row justify-center q-mb-xl">
      <div class="col-10">
        <q-input v-model="text" debounce="1000" outlined label="Pesquise seu anime aqui...">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </div>
    <div class="text-left q-mb-md">
      <span class="text-body1">Resultado para a palavra: {{ text }}</span>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SearchBox',
  props: {
    text: {
      type: String,
    }
  },
  computed: {
    ...mapState({
      resultAllAnimes: (state) => state.resultAllAnimes,
    })
  },
  watch: {
    text() {
      this.searchResult();
    }
  },
  methods: {
    searchResult() {
      this.$store.dispatch('getAllAnimes', this.text);
    }
  }
};
</script>
