Ext.define('Name', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'firstName',
  },
  {
    name: 'lastName',
  }],
});

Ext.define('Grid.view.main.UserModel', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [{
    name: 'id',
    type: 'string',
  },
  {
    name: 'phone',
    type: 'string',
  },
  {
    name: 'about',
    type: 'string',
  },
  {
    name: 'eyeColor',
    type: 'string',
  }],
  associations: [{
    type: 'hasMany',
    model: 'Name',
    name: 'name',
  }],
});