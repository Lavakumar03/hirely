const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const clientSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
    unique: true,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  companyName: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
    required: true,
  },
  employeeId: {
    type: Number,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type: Buffer, // Store the image as binary data
    required: false
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  isVerified: {
    type: String,
    enum: ['Verified', 'Not Verified'],
    default: 'Not Verified',
  },
}, { timestamps: true });

clientSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  if (this.password !== this.confirmPassword) {
    const error = new Error('Password and confirm password do not match');
    return next(error);
  }

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Client', clientSchema);
