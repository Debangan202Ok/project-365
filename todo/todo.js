function boysRoutine(name, time) {
  return new Promise((res, rej) => {
    if (time <= 7) {
      res({ name, time });
    } else {
      rej("You are to late");
    }
  });
}

boysRoutine("jhon", 7)
  .then((data) => {
    console.log(`${data.name}!! Woke up at ${data.time++}`);
    return data;
  })
  .then((data) => {
    console.log(`${data.name}!! Go Fresh up. time is now ${data.time++}`);
    return data;
  })
  .then((data) => {
    console.log(
      `${data.name}!! Do your Break First. time is now ${data.time++}`
    );
    return data;
  })
  .then((data) => {
    console.log(`${data.name}!! Out For office. Time is now ${data.time++}`);
    return data;
  })
  .then((data) => {
    console.log(`${data.name}!! Reeached office at ${data.time}`);
  })
  .catch((err) => {
    console.log(err);
  });
