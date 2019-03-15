Ext.onReady(() => {
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

  Ext.define('User', {
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

  const store = Ext.create('Ext.data.Store', {
    model: 'User',
    autoLoad: true,
    pageSize: 10,
    proxy: {
      type: 'ajax',
      url: 'info.json',
      reader: {
        type: 'json',
        root: 'users',
      },
    },

  });
  store.load(() => {
    store.each((record) => {
      console.log(record.get('phone'));
    });
  });

  Ext.create('Ext.grid.Panel', {
    title: 'Пользователи',
    height: 500,
    width: 550,
    margin: 5,
    store,
    dockedItems: [{
      xtype: 'pagingtoolbar',
      store,
      dock: 'bottom',
      displayInfo: true,
      beforePageText: 'Страница',
      afterPageText: 'из {0}',
      displayMsg: 'Пользователи {0} - {1} из {2}',
    }],
    columns: [{
      xtype: 'rownumberer',
    },
    {
      header: 'Имя',
      renderer(value, meta, record, colIndex, rowIndex, store, view) {
        return record.name().first().get('firstName');
      },
      sorter: {
        sorterFn(a, b) {
          const name1 = a.name().first().get('firstName');


          const name2 = b.name().first().get('firstName');
          return name1 > name2 ? 1 : (name1 === name2) ? 0 : -1;
        },
        // direction: 'DESC'
      },
    },
    {
      header: 'Фамилия',
      id: 'id',
      flex: 1,
      hideable: true,
      renderer(value, meta, record, colIndex, rowIndex, store, view) {
        return record.name().first().get('lastName');
      },
      sorter: {
        sorterFn(a, b) {
          const name1 = a.name().first().get('lastName');


          const name2 = b.name().first().get('lastName');
          return name1 > name2 ? 1 : (name1 === name2) ? 0 : -1;
        },
        // direction: 'DESC'
      },
    },
    {
      header: 'Номер телефона',
      dataIndex: 'phone',
    },
    {
      header: 'Описание',
      dataIndex: 'about',
    },
    {
      header: 'Цвет глаз',
      dataIndex: 'eyeColor',
    }],
    renderTo: Ext.getBody(),
  });
});
