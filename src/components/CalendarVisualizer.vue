<template>
  <v-main>
    <bryntum-calendar
        :autoCreate="false"
        :datePicker="datepicker"
        :eventStore="eventStore"
        :events="events"
        :features="features"
        :highlightDate="true"
        :mode="mode"
        :modes="modes"
        :resourceStore="resourceStore"
        :resources="resources"
    />
  </v-main>
</template>

<script>
import {
  BryntumCalendar
} from '@bryntum/calendar-vue-3';
import ExtendedEventModel from "@/classes/extendedEventModel";
import ExtendedResourceModel from "@/classes/extendedResourceModel";


export default {
  name: 'CalendarVisualizer',
  props: {
    resources: {
      type: Array,
      default: () => []
    },
    events: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      mode: 'month',
      modes: {
        day: null,
        week: null,
        agenda: null
      },
      eventStore: {
        modelClass: ExtendedEventModel
      },
      resourceStore: {
        modelClass: ExtendedResourceModel
      },
      datepicker: {
        showEvents: 'count'
      },
      features: {
        eventMenu: false,
        eventEdit: false,
        eventTooltip: {
          // Configuration options are passed on to the tooltip instance.
          // Override the default which is to show on click.
          showOn: 'click',
          renderer: data => `<dl>
                <dt>Text snippet:</dt>
                <dd><b>...${data.eventRecord.snippet}...</b></dd>
                <button type="button" class="v-btn v-btn--elevated v-theme--light v-btn--density-default v-btn--size-default v-btn--variant-elevated"><span class="v-btn__overlay"></span><span class="v-btn__underlay"></span><!----><span class="v-btn__content" data-no-activator="">
                    <a href='${process.env.VUE_APP_API_ENDPOINT}/contracts-files/${data.eventRecord.contract}' target="_blank">View ${data.eventRecord.contract}</a>
                </span><!----><!----></button>
                </dl>
            `,
          tooltip: {
            tools: {
              delete: false,
              edit: false
            }
          }
        }
      }
    }
  },
  components: {
    BryntumCalendar
  }
};
</script>

<style lang="css">
@import "@bryntum/calendar/calendar.stockholm.css";
</style>
