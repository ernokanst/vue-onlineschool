<template>
  <div class="infoblock">
    <h1>Добро пожаловать!</h1>
    <p>Выберите курс и приступайте к обучению!</p>
  </div>
  <v-card
    class="mx-auto"
  >

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              height="400px"
              cover
            >
            </v-img>
            
            <v-card-actions>
              
              <v-card-title class="text" v-text="card.title"></v-card-title>

              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Физика', src: 'https://get.pxhere.com/photo/light-museum-show-human-blue-electricity-lightning-energy-high-voltage-thunder-flash-thunderstorm-demonstration-experiment-physics-discharge-artificial-lightning-museum-of-technology-tesla-coil-electrical-supply-experimental-physics-electric-shielding-nikola-tesla-tesla-transformer-resonance-transformer-high-frequency-ac-voltage-faradayscher-cage-faraday-cage-faraday-speed-1126030.jpg', flex: 4 },
        { title: 'Информатика', src: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Computer-science-education.jpg', flex: 4 },
        { title: 'Английский язык', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
      ],
    }),
  }
</script>