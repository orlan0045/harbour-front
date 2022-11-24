import { EventModel } from "@bryntum/calendar";

// extending default EventModel to redefine fields names, so we can use them immediately from the response
class ExtendedEventModel extends EventModel {
  static get fields() {
    return [
      { name: "contract", type: "string" },
      { name: "name", dataSource: "contract" },
      { name: "endDate", dataSource: "date" },
      { name: "startDate", dataSource: "date" },
      { name: "resourceId", dataSource: "contract" },
    ];
  }
}

export default ExtendedEventModel;
