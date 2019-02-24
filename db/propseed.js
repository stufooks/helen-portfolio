const Thumbnail = require("../models/Thumbnail");
const Prop = require("../models/Prop");

const propThumbSource = "/images/thumbnails/prop-thumbs/prop-thumb-";
const propSource = "/images/props/prop-";

//create prop dec thumbnails and prop decs
const propThumb1 = new Thumbnail({
  title: "Mercy Street",
  source: "#",
  year: 2017,
  prop: true
})

propThumb1.save(err => {
  if(err) return handleError(err)

  const prop1 = new Prop({
    title: propThumb1.title,
    description: "Description",
    credits: "credits",
    source: propSource + "mercy-street.jpg",
    year: propThumb1.year,
    thumbnail: propThumb1._id
  })

  prop1.save(function(err) {
    if (err) return handleError(err);
  });
})