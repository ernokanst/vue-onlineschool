<template>
  <div class="infoblock">
      <h1>{{ course.name }}</h1>
      <p>{{ course.description }}</p>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  data() {
      return {
          course: {},
          isUpdating: true,
      }
  },
  methods: {
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
  computed: {
      fullImage() {
          return this.course.preview_image;
      }
  },
  mounted() {
      this.updateCourse();
  }
}
</script>

<style>

</style>