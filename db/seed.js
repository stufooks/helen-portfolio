const Thumbnail = require("../models/Thumbnail");
const Portrait = require("../models/Portrait");
const thumbSource = "/images/thumbnails/thumbnail-";
const portSource = "/images/portraits/portrait-";

const thumb1 = new Thumbnail({
  title: "A Simple Favor",
  source: thumbSource + "a-simple-favor.jpg",
  year: 2018
});
const thumb2 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "abigail-john-adams.jpg",
  year: 2018
});
const thumb3 = new Thumbnail({
  title: "Battle of the Sexes",
  source: thumbSource + "battle-of-the-sexes.jpg",
  year: 2018
});
const thumb4 = new Thumbnail({
  title: "Come Sunday",
  source: thumbSource + "come-sunday.jpg",
  year: 2018
});
const thumb5 = new Thumbnail({
  title: "Feud",
  source: thumbSource + "feud.jpg",
  year: 2018
});
const thumb6 = new Thumbnail({
  title: "Ghost Busters",
  source: thumbSource + "ghost-busters.jpg",
  year: 2018
});
const thumb7 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "john-adams-franklin.jpg",
  year: 2018
});
const thumb8 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "john-adams-jefferson.jpg",
  year: 2018
});
const thumb9 = new Thumbnail({
  title: "John Adams",
  source: thumbSource + "john-adams.jpg",
  year: 2018
});
const thumb10 = new Thumbnail({
  title: "Mercy Street",
  source: thumbSource + "mercy-street.jpg",
  year: 2018
});
const thumb11 = new Thumbnail({
  title: "Montage",
  source: thumbSource + "montage.jpg",
  year: 2018
});
const thumb12 = new Thumbnail({
  title: "Why Him",
  source: thumbSource + "why-him.jpg",
  year: 2018
});

thumb1.save(function(err) {
  if (err) return handleError(err);

  const port1 = new Portrait({
    title: thumb1.title,
    description: "Portrait of Jean Smart as a younger Margaret MacLanden.",
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
    description: "Description",
    source: portSource + "john-adams-abigail.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "battle-of-the-sexes.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "feud.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "ghost-busters.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "john-adams-franklin.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "john-adams-jefferson.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "john-adams.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "mercy-street.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "montage.jpg",
    year: 2018,
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
    description: "Description",
    source: portSource + "why-him.jpg",
    year: 2018,
    thumbnail: thumb12._id
  });

  port12.save(function(err) {
    if (err) return handleError(err);
  });
});
