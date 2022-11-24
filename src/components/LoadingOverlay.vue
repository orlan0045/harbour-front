<template>
  <div class="text-center">
    <v-overlay :model-value="open" class="align-center justify-center">
      <v-progress-circular
          indeterminate
          size="64"
          color="primary"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  }
}
</script>