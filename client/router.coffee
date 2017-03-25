FlowRouter.route '/',
	action: (params, queryParams)->
		BlazeLayout.render 'platformLayout',
			main: ""

