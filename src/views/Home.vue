<template>
  <main>
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
                            hide-details
                        ></v-text-field>
        <v-select
          v-model="filter"
          :items="subjects"
          @update:model-value="setCourseSubject"
          item-title="subject"
          item-value="id"
          label="Категория"
          return-object
        ></v-select>
        <v-select
          v-model="sort"
          :items="sortTypes"
          @update:model-value="setSortCourses"
          item-title="sortType"
          item-value="id"
          label="Сортировка"
          return-object
        ></v-select>
      </div>
      <v-row dense v-if="filteredCourses.length">
        <v-col
          v-for="card in filteredCourses"
          :key="card.name"
          :cols="4"
        >
        <v-hover v-slot="{ isHovering, props }">
          <v-card v-bind="props">
            <router-link :to="'/course/' + card.id">
            <v-img
              :src="card.preview_image"
              class="align-end"
              height="400px"
              :alt="card.description"
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
          </router-link>
            <v-card-actions>
              
              <router-link style="text-decoration: none; color: inherit;" :to="'/course/' + card.id">
                <v-card-title class="text" v-text="card.name"></v-card-title>
              </router-link>

              <v-spacer></v-spacer>
              <v-btn disabled color="surface-variant" variant="text" prepend-icon="mdi-star" >{{ card.rating }}</v-btn>
              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

            </v-card-actions>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
      <div v-else>Курсы не найдены :(</div>
    </v-container>
  </v-card>
</main>
</template>

<script>
  import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';
  export default {
    data () {
      return {
        filter: { subject: 'Все категории', id: 0 },
        subjects: [
          { subject: 'Все категории', id: 0 },
          { subject: 'Информационные технологии', id: 101 },
          { subject: 'Математика', id: 102 },
          { subject: 'Языки и лингвистика', id: 103 },
          { subject: 'Естественные науки', id: 104 },
        ],
        sort: { sortType: 'Не выбрано', id: 0 },
        sortTypes: [
          { sortType: 'Не выбрано', id: 0 },
          { sortType: 'По алфавиту А → Я', id: 1 },
          { sortType: 'По алфавиту Я → А', id: 2 },
        ],
      }
    },
    computed: {
        ...mapState({
            courseSearchQuery: 'courses/courseSearchQuery',
            courseSubject: 'courses/courseSubject',
            isLoading: state => state.courses.isLoading,
            courses: state => state.courses.courses
        }),
        ...mapGetters({
            filteredCourses: 'courses/filteredCourses'
        })
    },
    methods: {
      ...mapMutations({
            setCourseSearchQuery: 'courses/setCourseSearchQuery',
            setCourseSubject: 'courses/setCourseSubject',
            setSortCourses: 'courses/sortCourses'
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