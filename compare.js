import { parseISO, isSameDay, format, sub, set, add, getSeconds, getMinutes, getHours, compareAsc } from 'date-fns';

remote = [
  {
    active: true,
    created_at: "2020-03-26T08:31:50.000Z",
    id: 3,
    kiosk_id: 1112,
    meter_reading_id: "3d344ca0-6f3c-11ea-8a73-9db5b21888a3",
    meter_value: 50000,
    syncAction: null,
    updated_at: null
  },
  {
    active: true,
    created_at: "2020-03-29T14:48:03.000Z",
    id: 6,
    kiosk_id: 1112,
    meter_reading_id: "4b4bd730-71cc-11ea-b874-510b07a89ef5",
    meter_value: 87,
    syncAction: null,
    updated_at: null
  }
];

local = [
  {
    active: true,
    created_at: "2020-03-26T08:31:50.000Z",
    id: 3,
    kiosk_id: 1112,
    meter_reading_id: "3d344ca0-6f3c-11ea-8a73-9db5b21888a3",
    meter_value: 50000,
    updated_at: null
  },
  {
    active: true,
    created_at: "2020-03-29T15:48:03.000Z",
    id: 6,
    kiosk_id: 1112,
    meter_reading_id: "4b4bd730-71cc-11ea-b874-510b07a89ef5",
    meter_value: 87,
    updated_at: null
  }
];

function compareRemoteAndLocal(otherArray) {
  return function(current) {
    return (
      otherArray.filter(function(other) {
        //console.log('o',other)
        //console.log('c',current)
       // if (!other.created_at === current.created_at) {
          return ((other.created_at > current.created_at || other.created_at === current.created_at) &&
          (other.updated_at > current.updated_at || 
          other.updated_at === current.updated_at)) 
          ;
        //}
      }).length == 0
    );
  };
}

let onlyInLocal = local.filter(compareRemoteAndLocal(remote));
let onlyInRemote = remote.filter(compareRemoteAndLocal(local));

let syncResponseArray = [];
console.log("onlyInLocal", onlyInLocal);
console.log("onlyInRemote", onlyInRemote);
