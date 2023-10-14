// controllers/userController.js
const bcrypt = require('bcrypt')

const User = require("../models/user_test");

class UserController {

    async register(req, res) {
        try {
          const { username, password } = req.body;
    
          // Hash the password before storing it
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new User({ username, password: hashedPassword });
          await user.save();
    
          res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
          res.status(500).json({ error: 'Registration failed' });
          console.error(error);
        }
      }
 
    async login(req, res) {
        try {
          const { username, password } = req.body;
          const user = await User.findOne({ username });
    
          if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
          }
    
          // Compare the provided password with the stored hashed password
          const passwordMatch = await bcrypt.compare(password, user.password);
    
          if (passwordMatch) {
            return res.status(200).json({ message: 'Login successful' });
          }
    
          return res.status(401).json({ error: 'Invalid credentials' });
        } catch (error) {
          res.status(500).json({ error: 'Login failed' });
        }
      }
    }

module.exports = new UserController();
