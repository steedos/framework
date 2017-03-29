import './core.coffee'
import './api.coffee'

Template.registerHelpers = (dict) ->
	_.each dict, (v, k)->
		Template.registerHelper k, v

Steedos.Helpers = 
	steedosAppTitle: ()->
		return Session.get("app_title")

	steedosUserId: ()->
		return Meteor.userId()

	steedosLocale: ()->
		if Meteor.user()?.locale
			locale = Meteor.user().locale
		else
			l = window.navigator.userLanguage || window.navigator.language || 'en'
			if l.indexOf("zh") >=0
				locale = "zh-cn"
			else
				locale = "en-us"
				
Template.registerHelpers Steedos.Helpers
