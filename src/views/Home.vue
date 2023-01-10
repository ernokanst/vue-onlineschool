<template>
  <div class="infoblock">
    <h1>Добро пожаловать!</h1>
    <p>Выберите курс и приступайте к обучению!</p>
  </div>
  <v-card
    class="mx-auto"
  >

    <v-container fluid>
      <div class="searchBar">
      <v-text-field
                            :model-value="courseSearchQuery"
                            @update:model-value="setCourseSearchQuery"
                            label="Поиск курса"
                            append-inner-icon="mdi-magnify"
                            density="compact"
                            variant="solo"
                            hide-details
                            single-line
                        ></v-text-field>
                      </div>
      <v-row dense>
        <v-col
          v-for="card in filteredCourses"
          :key="card.name"
          :cols="4"
        >
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props">
            <v-img
              :src="card.preview_image"
              class="align-end"
              height="400px"
              cover
            >
            <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-primary v-card--reveal text-h4"
            style="height: 100%;"
            v-text="card.description"
          >
          </div>
        </v-expand-transition>
            </v-img>
            
            <v-card-actions>
              
              <v-card-title class="text" v-text="card.name"></v-card-title>

              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

            </v-card-actions>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';
  export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            courseSearchQuery: 'courses/courseSearchQuery',
            isLoading: state => state.courses.isLoading,
            courses: state => state.courses.courses
        }),
        ...mapGetters({
            filteredCourses: 'courses/filteredCourses'
        })
    },
    methods: {
      ...mapMutations({
            setCourseSearchQuery: 'courses/setCourseSearchQuery'
        }),
        ...mapActions({
            loadingCourses: 'courses/loadingCourses'
        })
    },
    mounted() {
        this.loadingCourses();
    }
}
</script>