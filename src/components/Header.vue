<template>
  <header>
    <v-app-bar :elevation="6" color="primary">
        <v-app-bar-title>
          <v-btn variant="plain" v-ripple="false" href="/">Онлайн-школа</v-btn>
          <v-btn prepend-icon="mdi-book-plus-outline" href="/course/add">Добавить курс</v-btn>
        </v-app-bar-title>
        <template v-slot:append>
          <v-btn prepend-icon="mdi-code-json" href="/main.json">JSON</v-btn>
          <v-btn prepend-icon="mdi-github" href="https://github.com/ernokanst/vue-onlineschool">Git</v-btn>
          <v-btn prepend-icon="mdi-account-tie" >{{ user }}</v-btn>
        </template>
    </v-app-bar>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        user: "Аккаунт"
      }
    },
  }
</script>