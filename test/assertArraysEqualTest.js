const _ = require('../index');
_.assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);//true
_.assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);//false