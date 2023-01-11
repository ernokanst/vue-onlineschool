<template>
    <main>
  <div class="infoblock">
      <h1>{{ course.name }}</h1>
      <p>{{ course.description }}</p>
    </div>
    <div class="infoblock">
  <v-expansion-panels variant="popout" class="lessons">
      <v-expansion-panel
        v-for="i in course.lesson_count"
        :key="i"
        :title="'Урок ' + i"
        text="В этом уроке вы узнаете о..."
      >
    </v-expansion-panel>
    </v-expansion-panels>
</div>
</main>
<form>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
  <h2>Оставьте отзыв о курсе!</h2>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Ваше имя"
      inputmode="text"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Ваш E-mail"
      inputmode="email"
      required
    ></v-text-field>

    <v-rating
      v-model="rating"
      color="primary"
      required
    ></v-rating>

    <v-text-field
      v-model="comment"
      label="Комментарий"
      inputmode="text"
    ></v-text-field>

    <v-btn
      color="primary"
      class="mr-4"
      @click="validate"
    >
      Отправить отзыв!
    </v-btn>
  </v-form>
</form>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
      return {
        valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Имя не введено',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail не введён',
        v => /.+@.+\..+/.test(v) || 'E-mail указан неправильно',
      ],
      rating: 0,
      comment: '',
          course: {},
          isUpdating: true,
      }
  },
  methods: {
    async validate () {
        const { valid } = await this.$refs.form.validate()

        if (valid) alert('Ваш отзыв был отправлен! Спасибо!')
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      ...mapActions({
          loadingCourse: 'courses/loadingCourse'
      }),
      async updateCourse() {
          this.isUpdating = true;

          this.course = {};

          setTimeout(async () => {
              this.course = await this.loadingCourse(this.$route.params.id);
              this.isUpdating = false;
              document.title = this.course.name
          }, 500)
      }
  },
  mounted() {
      this.updateCourse();
  }
}
</script>

<style>

</style>