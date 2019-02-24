//require models
const Thumbnail = require("../models/Thumbnail");
const Portrait = require("../models/Portrait");

//image path constants for portraits
const thumbSource = "/images/thumbnails/port-thumbs/thumbnail-";
const portSource = "/images/portraits/portrait-";

//create portrait thumbnails and portraits
const thumb1 = new Thumbnail({
  title: "A Simple Favor",
  source: thumbSource + "a-simple-favor.jpg",
  year: 2018
});
const thumb2 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "abigail-john-adams.jpg",
  year: 2008
});
const thumb3 = new Thumbnail({
  title: "Battle of the Sexes",
  source: thumbSource + "battle-of-the-sexes.jpg",
  year: 2017
});
const thumb4 = new Thumbnail({
  title: "Come Sunday",
  source: thumbSource + "come-sunday.jpg",
  year: 2018
});
const thumb5 = new Thumbnail({
  title: "Feud",
  source: thumbSource + "feud.jpg",
  year: 2017
});
const thumb6 = new Thumbnail({
  title: "Ghostbusters 3",
  source: thumbSource + "ghost-busters.jpg",
  year: 2016
});
const thumb7 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "john-adams-franklin.jpg",
  year: 2008
});
const thumb8 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "john-adams-jefferson.jpg",
  year: 2008
});
const thumb9 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "john-adams.jpg",
  year: 2008
});
const thumb10 = new Thumbnail({
  title: "Mercy Street",
  source: thumbSource + "mercy-street.jpg",
  year: 2017
});
const thumb12 = new Thumbnail({
  title: "Other Works",
  source: thumbSource + "montage.jpg",
  year: null
});
const thumb11 = new Thumbnail({
  title: "Why Him",
  source: thumbSource + "why-him.jpg",
  year: 2016
});

thumb1.save(function(err) {
  if (err) return handleError(err);

  const port1 = new Portrait({
    title: thumb1.title,
    description: "Portrait of Jean Smart as a younger Margaret MacLanden.",
    credits: "Jefferson Sage, Production Designer",
    source: portSource + "a-simple-favor.jpg",
    year: 2018,
    thumbnail: thumb1._id
  });

  port1.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb2.save(function(err) {
  if (err) return handleError(err);

  const port2 = new Portrait({
    title: thumb2.title,
    description: "Portrait of Laura Linney as Abigail Adams",
    credits: "Gemma Jackson, Production Designer and Kathy Lucas, Set Decorator",
    source: portSource + "john-adams-abigail.jpg",
    year: 2008,
    thumbnail: thumb2._id
  });

  port2.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb3.save(function(err) {
  if (err) return handleError(err);

  const port3 = new Portrait({
    title: thumb3.title,
    description: "Portrait of Elisabeth Shue as Priscilla Riggs",
    credits: "Judy Becker, Production Designer and Mathew Flood Ferguson, Set Decorator",
    source: portSource + "battle-of-the-sexes.jpg",
    year: 2017,
    thumbnail: thumb3._id
  });

  port3.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb4.save(function(err) {
  if (err) return handleError(err);

  const port4 = new Portrait({
    title: thumb4.title,
    description: "Portrait of Martin Sheen as Oral Roberts.",
    credits: "Richard Sherman, Production Designer and Michael H Ward, Art Director",
    source: portSource + "come-sunday.jpg",
    year: 2018,
    thumbnail: thumb4._id
  });

  port4.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb5.save(function(err) {
  if (err) return handleError(err);

  const port5 = new Portrait({
    title: thumb5.title,
    description: "Portrait of Jessica Lange as Jan Crawford",
    credits: "Judy Becker, Production Designer and Florencia Martin, Set Decorator",
    source: portSource + "feud.jpg",
    year: 2017,
    thumbnail: thumb5._id
  });

  port5.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb6.save(function(err) {
  if (err) return handleError(err);

  const port6 = new Portrait({
    title: thumb6.title,
    description: "Portrait of Bess Rous as Gertrude Aldridge",
    credits: "Jefferson Sage, Production Designer",
    source: portSource + "ghost-busters.jpg",
    year: 2016,
    thumbnail: thumb6._id
  });

  port6.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb7.save(function(err) {
  if (err) return handleError(err);

  const port7 = new Portrait({
    title: thumb7.title,
    description: "Portrait of Tom Wilkinson as Benjamin Franklin",
    credits: "Gemma Jackson, Production Designer and Kathy Lucas, Set Decorator",
    source: portSource + "john-adams-franklin.jpg",
    year: 2008,
    thumbnail: thumb7._id
  });

  port7.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb8.save(function(err) {
  if (err) return handleError(err);

  const port8 = new Portrait({
    title: thumb8.title,
    description: "Portrait of Stephen Dillane as Thomas Jefferson",
    credits: "Gemma Jackson, Production Designer and Kathy Lucas, Set Decorator",
    source: portSource + "john-adams-jefferson.jpg",
    year: 2008,
    thumbnail: thumb8._id
  });

  port8.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb9.save(function(err) {
  if (err) return handleError(err);

  const port9 = new Portrait({
    title: thumb9.title,
    description: "Portrait of Paul Giamatti as John Adams",
    credits: "Gemma Jackson, Production Designer and Kathy Lucas, Set Decorator",
    source: portSource + "john-adams.jpg",
    year: 2008,
    thumbnail: thumb9._id
  });

  port9.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb10.save(function(err) {
  if (err) return handleError(err);

  const port10 = new Portrait({
    title: thumb10.title,
    description: "Portrait of Josh Radnor as father of Dr. Jedediah Foster",
    credits: "Stephen Marsh, Production Designer and Marthe Pineau, Set Decorator",
    source: portSource + "mercy-street.jpg",
    year: 2017,
    thumbnail: thumb10._id
  });

  port10.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb11.save(function(err) {
  if (err) return handleError(err);

  const port11 = new Portrait({
    title: thumb11.title,
    description: "Portrait of Bryan Cranston as Ned Fleming",
    credits: "Clayton Hartley, Production Designer and Elliot Glick, Set Decorator",
    source: portSource + "why-him.jpg",
    year: 2016,
    thumbnail: thumb11._id
  });

  port11.save(function(err) {
    if (err) return handleError(err);
  });
});

thumb12.save(function(err) {
  if (err) return handleError(err);

  const port12 = new Portrait({
    title: thumb12.title,
    description: "Various Portraits for Film and TV 2008-2019",
    source: portSource + "montage.jpg",
    year: null,
    thumbnail: thumb12._id
  });

  port12.save(function(err) {
    if (err) return handleError(err);
  });
});