Ext.define('Grid.store.Userscore', {
  extend: 'Ext.data.Store',

  // alias: 'store.userscore',

  model: 'Grid.view.main.UserModel',

  autoLoad: true,
  pageSize: 10,

  proxy: {
    type: 'ajax',
    url: 'info.json',
    reader: {
      type: 'json',
      rootProperty: 'users',
    },
  },
});
