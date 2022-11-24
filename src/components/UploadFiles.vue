<template>
  <LoadingOverlay :open=loadingOverlay></LoadingOverlay>
  <v-app-bar
      color="primary"
      flat
  >
    <v-file-input
        class="pt-3 pl-3 mt-2 align-center justify-center"
        density="compact"
        label="Select your contract(-s)"
        multiple
        prepend-icon="mdi-file-pdf-box"
        variant="solo"
        @change="handleFileUpload($event)"
    ></v-file-input>

    <template v-slot:append>
      <v-btn class="ml-2" flat v-on:click="submitFile()">Find dates</v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import axios from 'axios';
import LoadingOverlay from "@/components/LoadingOverlay";

export default {
  name: 'UploadFiles',
  data() {
    return {
      files: [],
      loadingOverlay: false
    }
  },
  components: {
    LoadingOverlay
  },
  emits: ['updateEvents'],
  methods: {
    handleFileUpload(event) {
      this.files = event.target.files;
    },

    // calling emit method to pass events(dates) and contract_list(resources) to the Calendar UI
    updateCalendar(response) {
      this.$emit('updateEvents', response.data['contracts'], response.data['contracts_dates'])
      console.log('your dates here:', response.data['contracts_dates'])
    },

    // submitting files function. In case of success - updates UI, if error - console print out
    submitFile() {
      let formData = new FormData();
      if (this.files.length <= 0) {
        alert('Please select at least one pdf')
        return
      }

      for (let i = 0; i < this.files.length; i++) {
        formData.append('files', this.files[i])
      }

      this.loadingOverlay = true
      axios.post(`${process.env.VUE_APP_API_ENDPOINT}/contracts`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(response => {
        this.updateCalendar(response)
      }).catch(function () {
        console.log('oops, error on the backend side!');
      }).finally(() => {
            this.loadingOverlay = false
          }
      );
    }
  }
}
</script>