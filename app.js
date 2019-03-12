Ext.onReady(function(){ 
	Ext.define('Name', {
    extend: 'Ext.data.Model',
    idProperty: 'id', 
    fields: [{
        name: 'firstName'
    }, {
        name: 'lastName'
    }]
	});

	Ext.define('User', { 
		extend: 'Ext.data.Model', 
		idProperty: 'id', 
		fields: [{ 
			name: 'id', 
			type: 'string' 
		}, 
		{ 
			name: 'phone', 
			type: 'string' 
		}, 
		{ 
			name: 'about', 
			type: 'string' 
		}, 
		{ 
			name: 'eyeColor', 
			type: 'string' 
		}],
		 hasMany: [{
        model: 'Name',
        name: 'name',
        associationKey: 'name'
    }] 
	}); 

	var store = Ext.create('Ext.data.Store', { 
		model: 'User', 
		autoLoad: true, 
		pageSize: 10, 
		proxy: { 
			type: 'ajax', 
			url: 'info.json', 
			reader: { 
				type: 'json', 
				root: 'users' 
			} 
		} 

	}); 

	Ext.create('Ext.grid.Panel', { 
		title: 'Пользователи', 
		height: 500, 
		width: 550, 
		margin:5, 
		store: store, 
		dockedItems: [{ 
			xtype: 'pagingtoolbar', 
			store:store, 
			dock: 'bottom', 
			displayInfo: true, 
			beforePageText: 'Страница', 
			afterPageText: 'из {0}', 
			displayMsg: 'Пользователи {0} - {1} из {2}' 
		}], 
		columns: [{ 
			xtype:'rownumberer' 
		},
		{ 
			header: 'Имя', 
			renderer: function(value, meta, record, colIndex, rowIndex, store, view) {
		        return record.name().first().get( 'firstName' );
		    }
		}, 
		{ 
			header: 'Фамилия',
			id : 'id',    
      flex:  1,   
			// sortable: true,
			hideable: true ,
			renderer: function(value, meta, record, colIndex, rowIndex, store, view) {
        return record.name().first().get( 'lastName' );
	    }

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
		renderTo: Ext.getBody() 
	}); 
});