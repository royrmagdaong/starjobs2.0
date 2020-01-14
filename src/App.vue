<template>
  <v-app>
    <app-bar></app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';

export default {
  name: 'App',

  components: {
    'app-bar':AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
