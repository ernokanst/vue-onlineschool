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
          v-for="card in filteredCourses"
          :key="card.name"
          :cols="4"
        >
          <v-card>
            <v-img
              :src="card.preview_image"
              class="align-end"
              height="400px"
              cover
            >
            </v-img>
            
            <v-card-actions>
              
              <v-card-title class="text" v-text="card.name"></v-card-title>

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
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            courseSearchQuery: state => state.courses.courseSearchQuery,
            isLoading: state => state.courses.isLoading,
            courses: state => state.courses.courses
        }),
        ...mapGetters({
            filteredCourses: 'courses/filteredCourses'
        })
    },
    methods: {
        ...mapActions({
            loadingCourses: 'courses/loadingCourses'
        })
    },
    mounted() {
        this.loadingCourses();
    }
}
</script>