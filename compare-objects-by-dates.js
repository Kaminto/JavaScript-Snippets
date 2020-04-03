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
  compareAsc,
  ug
} from "date-fns";

let remote = [{"active": true, "created_at": "2018-08-02T01:05:21.000Z", "description": "Pricing for direct customers", "id": 2, "name": "direct", "updated_at": "2018-10-08T09:39:53.000Z"}, {"active": true, "created_at": "2018-08-02T01:05:22.000Z", "description": "Pricing for resellers and microfranchisees", "id": 3, "name": "reseller", "updated_at": "2018-10-08T09:40:42.000Z"}, {"active": false, "created_at": "2018-10-08T09:39:03.000Z", "description": "Water Club", "id": 4, "name": "water club", "updated_at": "2019-08-08T06:44:21.000Z"}, {"active": false, "created_at": "2020-01-16T08:35:45.000Z", "description": "Outlet Franchise", "id": 5, "name": "outlet franchise", "updated_at": "2020-04-01T13:21:19.000Z"}];

let local = [{"active": true, "created_at": "2018-08-02T01:05:21.000Z", "description": "Pricing for direct customers", "id": 2, "name": "direct", "syncAction": null, "updated_at": "2018-10-08T09:39:53.000Z"}, {"active": true, "created_at": "2018-08-02T01:05:22.000Z", "description": "Pricing for resellers and microfranchisees", "id": 3, "name": "reseller", "syncAction": null, "updated_at": "2018-10-08T09:40:42.000Z"}, {"active": true, "created_at": "2018-10-08T09:39:03.000Z", "description": "Water Club", "id": 4, "name": "water club", "syncAction": null, "updated_at": "2019-08-08T06:44:21.000Z"}, {"active": true, "created_at": "2019-11-26T08:35:45.000Z", "description": "Outlet Franchise", "id": 5, "name": "outlet franchise", "syncAction": null, "updated_at": "2019-11-26T08:35:45.000Z"}];
var uniquefiled = "id";

function compareRemoteAndLocal2(option1, option2, property) {
  let newArray = [];
  for (var i in option1) {
    let result = option2.filter(e => {
      return (
        e[property] === option1[i][property] &&
        (isSimilarDay(e.created_at, option1[i].created_at) ||
          isSimilarDay(e.updated_at, option1[i].updated_at))
      );
    });

    if (result.length === 0) {
      newArray.push(option1[i]);
    }

    //console.log(result);

    for (var b in result) {
      //console.log(result[b]);
      let currentDatediff = differenceInMilliseconds(
        new Date(option1[i].created_at),
        new Date(result[b].created_at)
      );

      let updateDatediff = differenceInMilliseconds(
        new Date(option1[i].updated_at),
        new Date(result[b].updated_at)
      );
      if (currentDatediff > 0 || updateDatediff > 0) {
        newArray.push(option1[i]);
      }
    }
  }
  return newArray;
}

console.log("remote", compareRemoteAndLocal2(remote, local, "id"));
console.log("local", compareRemoteAndLocal2(local,remote, "id"));


function compareRemoteAndLocal(otherArray,field) {
  return function(current) {
    
    return (
     otherArray.filter(function(other) {
        let currentDatediff = differenceInMilliseconds(
          new Date(other.created_at),
          new Date(current.created_at)
        );

        let updateDatediff = differenceInMilliseconds(
          new Date(other.updated_at),
          new Date(current.updated_at)
        );

        let isSameUpdateDay = isSameDay(
          new Date(current.updated_at),
          new Date(other.updated_at)
        );

        let isSameCurrentDay = isSameDay(
          new Date(current.created_at),
          new Date(other.created_at)
        );

        // if ((other.id == current.id) && (isSameCurrentDay || isSameUpdateDay)) {
        //   if (currentDatediff > 0 || updateDatediff > 0) {
        //     return true;
        //   }
        // }

        if (
        (other[field] == current[field]) && ( (currentDatediff > 0 || isSameCurrentDay) &&
          (updateDatediff > 0 || isSameUpdateDay))
        ) {
          return true;
        }


       // return true;

        //  return (
        //   (currentDatediff > 0 || isSameCurrentDay) &&
        //   (updateDatediff > 0 || isSameUpdateDay)
        // );

        //}
      }).length === 0



//console.log(current)
//console.log(rte)
// if(rte.length === 0){
// return true
// }
  



   );
  };
}

let onlyInLocal = local.filter(compareRemoteAndLocal(remote,'id'));
let onlyInRemote = remote.filter(compareRemoteAndLocal(local,'id'));
console.log("onlyInLocal", onlyInLocal);
console.log("onlyInRemote", onlyInRemote);

const onlyInRemote2 = remote.filter(c => {
  const result = local.filter(p => {
    let currentDatediff = differenceInMilliseconds(
      parseISO(p.created_at),
      parseISO(c.created_at)
    );

    let updateDatediff = differenceInMilliseconds(
      parseISO(p.updated_at),
      parseISO(c.updated_at)
    );

    let isSameUpdateDay = isSimilarDay(c.updated_at, p.updated_at);

    let isSameCurrentDay = isSimilarDay(c.created_at, p.created_at);

    if (currentDatediff > 0 && updateDatediff > 0) {
      // console.log('1-',currentDatediff)
      // console.log('2-',isSameCurrentDay)
      return true;
    }
  });
  // console.log(result);
  if (result.length > 0) {
    return true;
  }
});

//console.log("onlyInRemote2", onlyInRemote2);

function isSimilarDay(dayRight, dateLeft) {
  dayRight =
    typeof dayRight === "string"
      ? dayRight.split("T")[0]
      : dayRight.toISOString().split("T")[0];
  dateLeft =
    typeof dateLeft === "string"
      ? dateLeft.split("T")[0]
      : dateLeft.toISOString().split("T")[0];
  return isSameDay(parseISO(dayRight), parseISO(dateLeft));
}

let date = new Date("2020-03-29T20:38:35.155Z");
// console.log(isSimilarDay(date, new Date("2020-03-29T00:06:46.000Z")));

// console.log(
//   "isSameDay",
//   isSameDay(
//     parseISO("2019-11-27T08:35:45.000Z"),
//     parseISO("2020-01-16T08:35:45.000Z")
//   )
// );

// console.log(
//   "less",
//   differenceInMilliseconds(
//     new Date("2020-01-16T08:35:45.000Z"),
//     new Date("2019-11-27T08:35:45.000Z")
//   )
// );

// console.log(
//   "higher",
//   differenceInMilliseconds(
//     new Date("2020-03-31T11:30:36.000Z"),
//     new Date("2020-03-31T12:30:36.000Z")
//   )
// );
