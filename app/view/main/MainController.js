Ext.define('Grid.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    control:{
      'mygrid':{
        rowclick: 'onGetIndexCellClick',
      }
    },

    onGetIndexCellClick: function (view, cell, cellIndex,record, row, rowIndex, e, record) {
      console.log(cellIndex);
    },
    onSetFooValueButtonClick(button, e) {
      const view = this.getView();
      Ext.Msg.prompt('', '', (btn, v) => {
        if (btn === 'ok') {
          view.setFoo(v);
          console.log(view.getFoo());
        }
      });
    },
});
