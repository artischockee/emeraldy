const mongoose = require('mongoose');

  // const newshit = new Shit({ name: 'shitty fuck tucsr' });

  // newshit.save((err, obj) => {
  //   if (err) return console.error(err);
  //
  //   obj.stink();
  // })

  // Shit.find((err, objs) => {
  //   if (err) return console.error(err);
  //
  //   console.log(objs);
  // });
  // Shit.find({ name: /^shit/ }, (err, objs) => {
  //   if (err) return console.error(err);
  //
  //   console.log(objs);
  // });


const ScholasticSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  hours: Number,
  minutes: Number,
  project_id: { type: String, required: true }
});

// ScholasticSchema.methods.smth = function () {
//   let greeting = this.name
//     ? `My name is ${this.name}`
//     : 'I dont even have the name!';
//
//   console.log(greeting);
// };

module.exports = mongoose.model('Scholastic', ScholasticSchema);