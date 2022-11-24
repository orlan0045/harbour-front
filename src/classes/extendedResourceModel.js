import { ResourceModel } from "@bryntum/calendar";

// extending default ResourceModel to redefine fields names, so we can use them immediately from the response
class ExtendedResourceModel extends ResourceModel {
  static get fields() {
    return [
      { name: "id", dataSource: "title" },
      { name: "name", dataSource: "title" },
    ];
  }
}

export default ExtendedResourceModel;
