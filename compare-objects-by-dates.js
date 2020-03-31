import {
  parseISO,
  isSameDay,
  format,
  sub,
  set,
  add,
  getSeconds,
  getMinutes,
  getHours,
  differenceInMilliseconds,
  compareAsc
} from "date-fns";

let remote = [
  {
    active: true,
    closingStockId: "66d33870-65c6-11ea-8329-f946dbedda34",
    created_at: "2020-03-13T21:00:00.000Z",
    id: 0,
    kiosk_id: 1112,
    notDispatched: 80,
    product_id: "20L tap",
    quantity: 54,
    updated_at: "2020-03-14T07:45:05.000Z"
  },

  {
    active: true,
    closingStockId: "0a535d20-7343-11ea-95a3-ed53d12864b4",
    created_at: "2020-03-31T11:30:36.000Z",
    id: 19,
    kiosk_id: 1112,
    notDispatched: null,
    product_id: "20L tap",
    quantity: 45,
    updated_at: null
  },
  {
    active: true,
    closingStockId: "9b7aaa60-72c6-11ea-b7cf-3595ef4752b0",
    created_at: "2020-03-30T20:39:52.000Z",
    id: 16,
    kiosk_id: 1112,
    notDispatched: null,
    product_id: "20L tap",
    quantity: 82,
    updated_at: "2020-03-30T21:03:23.000Z"
  },
  {
    active: true,
    closingStockId: "5d3a8d20-72ca-11ea-9a8f-0bde6d5a5d4a",
    created_at: "2020-03-29T21:06:46.000Z",
    id: 17,
    kiosk_id: 1112,
    notDispatched: null,
    product_id: "20L tap",
    quantity: 85,
    updated_at: null
  }
];

let local = [
  {
    active: false,
    closingStockId: "fe65bad0-734c-11ea-a347-03f6b0ee72bb",
    created_at: "2020-03-29T12:41:51.050Z",
    id: null,
    inventory: 78,
    kiosk_id: 1112,
    notDispatched: null,
    product_id: "20L tap",
    quantity: 78,
    syncAction: "create",
    updated_at: null,
    wastageName: "20L tap"
  },
  {
    active: true,
    closingStockId: "66d33870-65c6-11ea-8329-f946dbedda34",
    created_at: "2020-03-13T21:00:00.000Z",
    id: 0,
    inventory: 54,
    kiosk_id: 1112,
    notDispatched: 80,
    product_id: "20L tap",
    quantity: 54,
    syncAction: null,
    updated_at: "2020-03-14T07:45:05.000Z",
    wastageName: "20L tap"
  },
  {
    active: true,
    closingStockId: "9b7aaa60-72c6-11ea-b7cf-3595ef4752b0",
    created_at: "2020-03-30T20:39:52.000Z",
    id: 16,
    inventory: 82,
    kiosk_id: 1112,
    notDispatched: null,
    product_id: "20L tap",
    quantity: 82,
    syncAction: null,
    updated_at: "2020-03-30T21:03:23.000Z",
    wastageName: "20L tap"
  },
  {
    active: true,
    closingStockId: "0a535d20-7343-11ea-95a3-ed53d12864b4",
    created_at: "2020-03-31T11:30:36.000Z",
    id: 19,
    inventory: 45,
    kiosk_id: 1112,
    notDispatched: null,
    product_id: "20L tap",
    quantity: 45,
    syncAction: null,
    updated_at: null,
    wastageName: "20L tap"
  }
];

function compareRemoteAndLocal(otherArray) {
  return function(current) {
    return (
      otherArray.filter(function(other) {
        let currentDatediff = differenceInMilliseconds(
          new Date(current.created_at),
          new Date(other.created_at)
        );

        let isSameCurrentDay = isSameDay(
          new Date(current.created_at),
          new Date(other.created_at)
        );

        let updateDatediff = differenceInMilliseconds(
          new Date(current.updated_at),
          new Date(other.updated_at)
        );

        let isSameUpdateDay = isSameDay(
          new Date(current.updated_at),
          new Date(other.updated_at)
        );

        return (
          (currentDatediff > 0 || isSameCurrentDay) &&
          (updateDatediff > 0 || isSameUpdateDay)
        );
        //}
      }).length == 0
    );
  };
}

let onlyInLocal = local.filter(compareRemoteAndLocal(remote));
let onlyInRemote = remote.filter(compareRemoteAndLocal(local));

// const onlyInLocal = local.filter(c => {
//   const result = remote.filter(p => {
//     let currentDatediff = differenceInMilliseconds(
//       new Date(c.created_at),
//       new Date(p.created_at)
//     );

//     let isSameCurrentDay = isSameDay(
//       new Date(c.created_at),
//       new Date(p.created_at)
//     );

//     if (currentDatediff > 0 && isSameCurrentDay) {
//       return true;
//     }
//   });
//   //console.log(result)
//  // console.log(c)
//   if (result.length > 0) {
//     return true;
//   }
// });

// const onlyInRemote = remote.filter(c => {
//   const result = local.filter(p => {
//     let currentDatediff = differenceInMilliseconds(
//       new Date(c.created_at),
//       new Date(p.created_at)
//     );

//     let isSameCurrentDay = isSameDay(
//       new Date(c.created_at),
//       new Date(p.created_at)
//     );

//     if (currentDatediff > 0 && isSameCurrentDay) {
//       return true;
//     }
//   });
// //console.log(result)
//   if (result.length > 0) {
//     return true;
//   }
// });

console.log("onlyInLocal", onlyInLocal);
console.log("onlyInRemote", onlyInRemote);

var resulte = differenceInMilliseconds(
  new Date(2014, 6, 2, 12, 30, 21, 700),
  new Date(2014, 6, 2, 12, 30, 20, 600)
);
console.log("resulte", resulte);
console.log(
  "equal",
  differenceInMilliseconds(
    new Date("2020-03-30T20:39:52.000Z"),
    new Date("2020-03-30T20:39:52.000Z")
  )
);

console.log(
  "less",
  differenceInMilliseconds(
    new Date("2020-03-31T11:30:36.000Z"),
    new Date("2020-03-31T12:30:36.000Z")
  )
);

console.log(
  "higher",
  differenceInMilliseconds(
    new Date("2020-03-31T11:30:36.000Z"),
    new Date("2020-03-31T12:30:36.000Z")
  )
);

const loca = [
  { name: "spray", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "limit", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "elite", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "exuberant", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "destruction", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "present", created_at: "2020-03-31T11:30:36.000Z" }
];
const remo = [
  { name: "sprayw", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "limits", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "limit", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "elite", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "exuberant", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "destruction", created_at: "2020-03-31T11:30:36.000Z" },
  { name: "present", created_at: "2020-03-31T11:30:36.000Z" }
];
const onlyloca = loca.filter(c => {
  const result = remo.filter(p => {
    return p.name === c.name;
  });
  if (result.length === 0) {
    return true;
  }
});

const onlyRemo = remo.filter(c => {
  const result = loca.filter(p => {
    return p.name === c.name && p.created_at < c.created_at;
  });
  if (result.length === 0) {
    return true;
  }
});

console.log("onlyloca", onlyloca);
console.log("onlyRemo", onlyRemo);

var array1 = ["A", "B", "C", "D", "D", "E"];
var array2 = ["D", "E"];
var index;

for (var i = 0; i < array2.length; i++) {
  index = array1.indexOf(array2[i]);
  //console.log(index);
  if (index > -1) {
    array1.splice(index, 1);
  }
}

//console.log(array1);
