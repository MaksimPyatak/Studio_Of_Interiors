export const notfound = () => {
	return app.gulp.src(app.path.src.notfound)
		.pipe(app.gulp.dest(app.path.build.notfound))
}