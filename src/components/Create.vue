<template>
<main>
  <div class="infoblock">
    <h1>Создание нового курса</h1>
  </div>
<form>
  <v-form
  ref="form"
  v-model="valid"
  lazy-validation
>
  <v-text-field
    v-model="name"
    :counter="50"
    :rules="nameRules"
    label="Название курса"
    inputmode="text"
    required
  ></v-text-field>

  <v-text-field
      v-model="description"
      :counter="100"
      :rules="descriptionRules"
      label="Описание курса"
      inputmode="text"
      required
    ></v-text-field>

  <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Выберите категорию курса']"
      label="Категория курса"
      required
    ></v-select>

  <v-text-field
    v-model="imagelink"
    label="Ссылка на изображение"
    inputmode="url"
  ></v-text-field>

  <v-text-field
  v-model="lessons"
  label="Количество уроков"
  :rules="lessonRules"
  type="number"
  inputmode="numeric"
  />
  
  <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Сбросить форму
    </v-btn>

  <v-btn
    color="success"
    class="mr-4"
    @click="validate"
  >
    Создать курс!
  </v-btn>
</v-form>
</form>
</main>
</template>

<script>

export default {
data() {
    return {
      valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Название не введено',
      v => (v && v.length <= 50) || 'Название должно быть короче 50 символов',
    ],
    description: '',
    descriptionRules: [
      v => !!v || 'Описание не введено',
      v => (v && v.length <= 100) || 'Описание должно быть короче 100 символов',
    ],
    lessons: 0,
    lessonRules: [
      v => !!v || 'Введите количество уроков',
      v => (v && v >= 0) || 'Число введено неправильно',
    ],
    select: null,
      items: [
        'Информационные технологии',
        'Математика',
        'Языки и лингвистика',
        'Естественные науки',
        'Другое',
      ],
    }
},
methods: {
  async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Курс создан!')
    },
    reset () {
      this.$refs.form.resetValidation()
      this.$refs.form.reset()
    },
},
}
</script>

<style>

</style>