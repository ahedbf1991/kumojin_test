const moment = require("moment-timezone");

class Event {
  constructor(name, description, startDate, endDate, timezone) {
    this.name = name;
    this.description = description;
    this.startDate = moment.tz(startDate, timezone);
    this.endDate = moment.tz(endDate, timezone);
  }
}

module.exports = Event;
