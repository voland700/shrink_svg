'use_strict'; 
const gulp = require('gulp'); 
const svgSprite = require("gulp-svg-sprites");
 
gulp.task('svg', function () { 
	return gulp.src('svg/*.svg') 
	.pipe(svgSprite({ 
	selector: "i-sp-%f", 
	svg: { 
	sprite: "sprite.svg" 
	}, 
	svgPath: "%f", 
	cssFile: "svg_sprite.css", 
	common: "ic" 
	} 
))
.pipe(gulp.dest("media")); 
});