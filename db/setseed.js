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

const setThumb2 = new Thumbnail({
  title: "Alleged",
  source: setThumbSource + "alleged.jpg",
  year: 2010,
  setDec: true
})

const setThumb3 = new Thumbnail({
  title: "Alpha House",
  source: setThumbSource + "alpha-house.jpg",
  year: 2014,
  setDec: true
})

const setThumb4 = new Thumbnail({
  title: "Feud",
  source: setThumbSource + "feud.jpg",
  year: 2017,
  setDec: true
})

const setThumb5 = new Thumbnail({
  title: "Red Oaks",
  source: setThumbSource + "red-oaks.jpg",
  year: 2014,
  setDec: true
})

const setThumb6 = new Thumbnail({
  title: "A Simple Favor",
  source: setThumbSource + "a-simple-favor.jpg",
  year: 2018,
  setDec: true
})

const setThumb7 = new Thumbnail({
  title: "American Hustle",
  source: setThumbSource + "american-hustle.jpg",
  year: 2013,
  setDec: true
})

const setThumb8 = new Thumbnail({
  title: "The Extra Man",
  source: setThumbSource + "extra-man.jpg",
  year: 2010,
  setDec: true
})

const setThumb9 = new Thumbnail({
  title: "Step Up Highwater",
  source: setThumbSource + "step-up-basquiat.jpg",
  year: 2018,
  setDec: true
})

const setThumb10 = new Thumbnail({
  title: "Step Up Highwater",
  source: setThumbSource + "step-up.jpg",
  year: 2018,
  setDec: true
})

const setThumb11 = new Thumbnail({
  title: "What Men Want",
  source: setThumbSource + "what-men-want-various.jpg",
  year: 2019,
  setDec: true
})

const setThumb12 = new Thumbnail({
  title: "What Men Want",
  source: setThumbSource + "what-men-want.jpg",
  year: 2019,
  setDec: true
})

const setThumb13 = new Thumbnail({
  title: "Other Works",
  source: setThumbSource + "montage.jpg",
  year: null,
  setDec: true
})

setThumb1.save(err => {
  if(err) return handleError(err)

  const set1 = new SetDec({
    title: setThumb1.title,
    creditsOne: "Jefferson Sage, Production Designer",
    source: setSource + "a-simple-favor-nudes.jpg",
    year: 2018,
    thumbnail: setThumb1._id
  })

  set1.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb2.save(err => {
  if(err) return handleError(err)

  const set2 = new SetDec({
    title: setThumb2.title,
    creditsOne: "Marthe Pineau, Production Designer",
    creditsTwo: "Elliot Glick, Art Director",
    source: setSource + "alleged.jpg",
    year: 2010,
    thumbnail: setThumb2._id
  })

  set2.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb3.save(err => {
  if(err) return handleError(err)

  const set3 = new SetDec({
    title: setThumb3.title,
    creditsOne: "Judy Rhee, Production Designer",
    creditsTwo: "Heather Loeffler, Set Decorator",
    source: setSource + "alpha-house.jpg",
    year: 2014,
    thumbnail: setThumb3._id
  })

  set3.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb4.save(err => {
  if(err) return handleError(err)

  const set4 = new SetDec({
    title: setThumb4.title,
    creditsOne: "Judy Becker, Production Designer",
    creditsTwo: "Florencia Martin, Set Decorator",
    source: setSource + "feud.jpg",
    year: 2017,
    thumbnail: setThumb4._id
  })

  set4.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb5.save(err => {
  if(err) return handleError(err)

  const set5 = new SetDec({
    title: setThumb5.title,
    creditsOne: "Chris Spellman, Production Designer",
    creditsTwo: "Heather Loeffler, Set Decorator",
    source: setSource + "red-oaks.jpg",
    year: 2014,
    thumbnail: setThumb5._id
  })

  set5.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb6.save(err => {
  if(err) return handleError(err)

  const set6 = new SetDec({
    title: setThumb6.title,
    creditsOne: "Jefferson Sage, Production Designer",
    source: setSource + "a-simple-favor.jpg",
    year: 2018,
    thumbnail: setThumb6._id
  })

  set6.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb7.save(err => {
  if(err) return handleError(err)

  const set7 = new SetDec({
    title: setThumb7.title,
    creditsOne: "Judy Becker, Production Designer",
    creditsTwo: "Heather Loeffler, Set Decorator",
    source: setSource + "american-hustle.jpg",
    year: 2013,
    thumbnail: setThumb7._id
  })

  set7.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb8.save(err => {
  if(err) return handleError(err)

  const set8 = new SetDec({
    title: setThumb8.title,
    creditsOne: "Judy Becker, Production Designer",
    creditsTwo: "Carrie Stewart, Set Decorator",
    source: setSource + "extra-man.jpg",
    year: 2010,
    thumbnail: setThumb8._id
  })

  set8.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb9.save(err => {
  if(err) return handleError(err)

  const set9 = new SetDec({
    title: setThumb9.title,
    creditsOne: "Mark Hutman, Production Designer",
    source: setSource + "step-up-basquiat.jpg",
    year: 2018,
    thumbnail: setThumb9._id
  })

  set9.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb10.save(err => {
  if(err) return handleError(err)

  const set10 = new SetDec({
    title: setThumb10.title,
    description: "Portrait of Jaqueline Kochka",
    creditsOne: "Mark Hutman, Production Designer",
    source: setSource + "step-up.jpg",
    year: 2018,
    thumbnail: setThumb10._id
  })

  set10.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb11.save(err => {
  if(err) return handleError(err)

  const set11 = new SetDec({
    title: setThumb11.title,
    creditsOne: "Mark Hutman, Production Designer",
    source: setSource + "what-men-want-various.jpg",
    year: 2019,
    thumbnail: setThumb11._id
  })

  set11.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb12.save(err => {
  if(err) return handleError(err)

  const set12 = new SetDec({
    title: setThumb12.title,
    creditsOne: "Mark Hutman, Production Designer",
    source: setSource + "what-men-want.jpg",
    year: 2019,
    thumbnail: setThumb12._id
  })

  set12.save(function(err) {
    if (err) return handleError(err);
  });
})

setThumb13.save(err => {
  if(err) return handleError(err)

  const set13 = new SetDec({
    title: setThumb13.title,
    description: "Assorted Art Work for Film and TV, 2007-2019",
    source: setSource + "montage.jpg",
    year: null,
    thumbnail: setThumb13._id
  })

  set13.save(function(err) {
    if (err) return handleError(err);
  });
})