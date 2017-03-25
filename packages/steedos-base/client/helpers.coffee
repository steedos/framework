import './core.coffee'
import './api.coffee'

Template.registerHelpers = (dict) ->
	_.each dict, (v, k)->
		Template.registerHelper k, v

Steedos.Helpers = 
	steedosAppTitle: ()->
		return Session.get("app_title")

Template.registerHelpers Steedos.Helpers
