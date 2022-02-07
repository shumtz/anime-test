<template>
  <q-layout view="lhh lpR lff">
    <q-header reveal elevated class="bg-primary text-white row justify-between">
        <q-toolbar class="col-lg-4">
          <q-toolbar-title>
            Anime Friend Search
          </q-toolbar-title>
        </q-toolbar>
        <q-toolbar class="col-lg-4">
          <q-toolbar-title v-if="!isFinish">
            Olá, {{ user.name.first }}
            <q-avatar square size="35px" class="q-ml-md">
              <img :src="user.picture.thumbnail" />
            </q-avatar>
            </q-toolbar-title>
        </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Navbar',
  data() {
    return {
      isFinish: true
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  mounted() {
    this.$store.dispatch('randomUser').then(() => this.isFinish = false);
  }
}
</script>
