<template>
  <section class="container">
    <q-table :rows="resultAllAnimes.results" :columns="columns" :no-data-label="resultAllAnimes.errors ? resultAllAnimes.errors : 'Lista vazia'">
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="title" :props="props">
            {{ props.row.title }}
          </q-td>
          <q-td key="type" :props="props">
            {{ props.row.type }}
          </q-td>
          <q-td key="episodes" :props="props">
            {{ props.row.episodes }}
          </q-td>
          <q-td key="score" :props="props">
            {{ props.row.score }}
          </q-td>
          <q-td key="start_date" :props="props">
            {{ $luxonDateTime.fromISO(props.row.start_date).toFormat("dd/LL/y") }} -
            {{ $luxonDateTime.fromISO(props.row.end_date).toFormat("dd/LL/y") }}
          </q-td>
          <q-td key="action" :props="props">
            <q-btn color="secondary" class="full-width" @click="() => {
              (bar = true) && (resultAnime(props.row.mal_id))}">Ver</q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    <q-dialog v-model="bar" :maximized="maximizedToggle" transition-show="slide-up" transition-hide="slide-down" persistent>
      <q-card :style="!maximizedToggle ? 'width: 900px; max-width: 100vw; height: 550px; max-height: 90vh;' : ''">
        <q-bar class="bg-primary text-white">
          <span>{{ getOneAnime.title }}</span>

          <q-space></q-space>

          <q-btn dense flat icon="minimize" @click="maximizedToggle = false" :disable="!maximizedToggle">
            <q-tooltip v-if="maximizedToggle" class="bg-white text-primary">Minimize</q-tooltip>
          </q-btn>
          <q-btn dense flat icon="crop_square" @click="maximizedToggle = true" :disable="maximizedToggle">
            <q-tooltip v-if="!maximizedToggle" class="bg-white text-primary">Maximize</q-tooltip>
          </q-btn>
          <q-btn dense unelevated color="red" icon="close" v-close-popup>
            <q-tooltip class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <div class="row">
          <q-card-section class="col-lg-7">
            <p class="text-body2 ">Titulo: {{ getOneAnime.title }}</p>
            <p class="text-body2">Quantidade de episódios: {{ getOneAnime.episodes }}</p>
            <p class="text-body2">
              Sinopse:
              <br />
              {{ getOneAnime.synopsis }}
            </p>
          </q-card-section>

          <q-card-section class="col-lg-5 text-right">
            <p class="text-body2">Score: {{ getOneAnime.score }}</p>
            <p><a :href="getOneAnime.url" target="_blank">Ver +</a></p>
            <img :src="getOneAnime.image_url" style="width: 218px; height: 254px;" />
          </q-card-section>
        </div>
      </q-card>
    </q-dialog>
  </section>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";

const columns = [
  { name: "title", align: "left", label: "Título", field: "title", sortable: true },
  { name: "type", label: "Tipo", field: "type" },
  { name: "episodes", label: "Quantidade de episódios", sortable: true, field: "episodes" },
  { name: "score", align: "right", label: "Score", sortable: true, field: "score" },
  { name: "start_date", align: "right", label: "Período", field: "start_date" },
  { name: "action", align: "right", label: "", field: "action" },
];

export default {
  name: "ResultsAnime",
  props: {
    text: {
      type: String,
    },
  },
  computed: {
    ...mapState({
      resultAllAnimes: (state) => state.resultAllAnimes,
      getOneAnime: (state) => state.resultOneAnime
    }),
  },
  methods: {
    resultAnime(id) {
      this.$store.dispatch('getOneAnime', id);
    }
  },
  setup() {
    return {
      bar: ref(false),
      id: ref(),
      maximizedToggle: ref(false),
      columns,
    };
  },
};
</script>
