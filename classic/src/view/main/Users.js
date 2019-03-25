
Ext.define('Grid.view.main.Users', {
  extend: 'Ext.grid.Panel',
  xtype: 'userlist',
  alias: 'widget.mygrid',

  requires: [
    'Grid.store.Userscore',
    'Grid.view.main.MainController',
    'Grid.view.main.MyGridViewModel',
  ],
  controller: 'main',

  title: 'Пользователи',

  store: Ext.create('Grid.store.Userscore'),
  height: 600,
  width: 550,

  viewModel: {
    type: 'mygridvm',
  },
  bind: {
    foo: '{something}',
  },
  config: {
    foo: null,
  },

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
    renderer(value, meta, record, colIndex, rowIndex, store, view) {
      meta.style = `background-color:${value};`;
      // return value;
    },
  }],
  tbar: ['->', {
    text: 'Search',
    handler: 'onSetFooValueButtonClick',
  }],
});
