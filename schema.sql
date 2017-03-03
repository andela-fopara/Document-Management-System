var User = sequelize.define('user', {
  timestamps: true,
  paranoid: true,
  underscored: true,
  tableName: 'user',
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    email: {
    type: Sequelize.STRING, 
    unique: true, 
    validation: {isEmail: true, notEmpty: true, notNull: true}
   },
  user_name: {
    type: Sequelize.STRING, 
    unique: true,
    validation: {notEmpty: true, notNull: true}
  },
  password: {
    type: Sequelize.STRING, 
    unique: true,
    validation: {notEmpty: true, notNull: true}
  },
  role_id: {
    type: Sequelize.INTEGER,
    validation: {isEmail: true, notEmpty: true, notNull: true},
    references: {
       model: Role,
       key: 'id',
       deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
     }
   },
  {
   getterMethods   : {
      getEmail: function()  { return this.getDataValue('email'); },
      getUserName: function()  { return this.getDataValue('user_name'); },
      getPassword: function()  { return this.getDataValue('password'); },
      getRole: function()  { return this.getDataValue('role_id'); },
      getUserDetails: function()  { 
        var email = this.getDataValue('email');
        var user_name = this.getDataValue('user_name');
        var password = this.getDataValue('password');
        var role = getRole();
        return email+' '+user_name+' '+password+' '+role; }
   },
   setterMethods: {
      setUserDetails: function(value) {
         var userDetails = value.split(' ');
         this.setDataValue('email', userDetails.slice(0, -1).join(' '));
         this.setDataValue('user_name', userDetails.slice(-1).join(' '));
         this.setDataValue('password', userDetails.slice(-1,-2).join(' '));
         this.setDataValue('role', userDetails.slice(-2).join(' '));
    }
  }
})
