const Thumbnail = require("../models/Thumbnail");
const SetDec = require("../models/SetDec");

const setThumbSource = "/images/thumbnails/set-thumbs/set-thumb-";
const setSource = "/images/set-dec/set-dec-";

//create set dec thumbnails and set decs
const setThumb1 = new Thumbnail({
  title: "A Simple Favor",
  source: setThumbSource + "a-simple-favor-nudes.jpg",
  year: 2018,
  setDec: true
})

setThumb1.save(err => {
  if(err) return handleError(err)

  const set1 = new SetDec({
    title: setThumb1.title,
    description: "Description",
    source: setSource + "a-simple-favor-nudes.jpg",
    year: 2018,
    thumbnail: setThumb1._id
  })

  set1.save(function(err) {
    if (err) return handleError(err);
  });
})