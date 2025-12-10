import mongoose from 'mongoose';

const counterSchema = mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 },
});

const Counter = mongoose.model('Counter', counterSchema);

const userSchema = mongoose.Schema({
  userId: { type: Number, unique: true },
  name: { type: String, unique: true },
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
});

userSchema.pre('save', function (next) {
  const doc = this;
  Counter.findByIdAndUpdate({ _id: 'userId' }, { $inc: { seq: 1 } }, { new: true, upsert: true })
    .then(function (counter) {
      doc.userId = counter.seq;
      next();
    })
    .catch(function (error) {
      return next(error);
    });
});

const postUser = mongoose.model('user', userSchema);

export default postUser;
