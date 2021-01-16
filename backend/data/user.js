import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('1234', 12),
    isAdmin: true,
  },
  {
    name: 'nana',
    email: 'nana@example.com',
    password: bcrypt.hashSync('1234', 12),
  },
  {
    name: 'bal',
    email: 'bal@example.com',
    password: bcrypt.hashSync('1234', 12),
  },
]

export default users
