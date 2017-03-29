FlowRouter.route '/steedos/sign-out', 
	action: (params, queryParams)->
		Meteor.logout ()->
			#Setup.logout();
			Session.set("spaceId", null);
			FlowRouter.go("/");
