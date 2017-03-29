Meteor.startup ->
	Tracker.autorun ()->
		if Session.get("steedos-locale") == "zh-cn"
			T9n.setLanguage("zh-CN")
		else
			T9n.setLanguage("en")

		