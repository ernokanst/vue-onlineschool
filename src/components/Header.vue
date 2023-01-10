<template>
    <v-app-bar :elevation="6" color="primary">
        <v-app-bar-title><v-btn variant="plain" v-ripple="false" href="/">Онлайн-школа</v-btn></v-app-bar-title>
        <template v-slot:append>
          <v-btn prepend-icon="mdi-account-tie" >Аккаунт</v-btn>
        </template>
    </v-app-bar>
</template>

<script>

</script>