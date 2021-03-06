load('./spec/lib/jspec.js')
load('./spec/lib/jspec.xhr.js')
load('./spec/unit/proton.db.rhino.spec.helper.js')
load('./spec/unit/proton.db.spec.helper.js')
load('./dist/proton.js')

JSpec
	.exec('./spec/unit/proton.db.spec.js')
	.exec('./spec/unit/proton.db.save.spec.js')
	.exec('./spec/unit/proton.db.find.spec.js')
	.exec('./spec/unit/proton.db.update.spec.js')
	.exec('./spec/unit/proton.db.remove.spec.js')
	.exec('./spec/unit/proton.match.spec.js')
	.exec('./spec/unit/proton.comparators.spec.js')
	.exec('./spec/unit/proton.sorters.spec.js')
	.exec('./spec/unit/proton.array.spec.js')
	.run( {reporter : JSpec.reporters.Terminal, fixturePath : 'test/fixtures'})
	.report()