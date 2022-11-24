<template>
  <v-app>
    <UploadFiles @update-events="updateEvents"/>
    <CalendarVisualizer :events="events" :resources="resources"/>
  </v-app>
</template>

<script>
import UploadFiles from "@/components/UploadFiles";
import CalendarVisualizer from "@/components/CalendarVisualizer";

export default {
  name: 'App',
  data() {
    return {
      resources: [],
      events: []
    }
  },
  components: {
    CalendarVisualizer,
    UploadFiles
  },
  methods: {
    updateEvents(resources, events) {
      this.resources = resources
      this.events = events
    }
  }
}
</script>
<style scoped>
body, html, #app {
  font-family: Roboto, sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
}
</style>
