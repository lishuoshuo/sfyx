const gulp = require("gulp");//加载gulp模块;
const connect = require("gulp-connect");//加载 gulp-connect 插件;
const babel = require("gulp-babel");//加载gulp-babel 插件；
const sass = require("gulp-sass-china");


gulp.task("html",()=>{
	return gulp
				.src(["*.html","html/*.html"])
			 	.pipe(gulp.dest("dist"))
			 	.pipe(connect.reload());//自动刷新;
})
gulp.task("script",()=>{
	return gulp
				//.src(["src/*.js","model/*.js","libs/*.js","!src/secret.js"])
				.src(["libs/*.js","libs/*.json"])
				.pipe(gulp.dest("dist/scripts"))
})
gulp.task("watch",()=>{
    gulp.watch(["scss/*.scss","*.html","html/**"],["sass","html"]);
    gulp.watch(["images/*","!node_modules/**/*"],["images"]);
	gulp.watch(["*/*.js","*/*.json","!module/**/*","!es6/*"],["script"]);
	gulp.watch(["es6/*.js","!module/**/*"],["es6"]);
})
gulp.task('server',function(){
    connect.server({
        root:'dist',  //以谁为服务器根目录
        port:8888,  // 端口号 
        livereload:true //开启自动刷新;
    });
});
gulp.task("images",()=>{
	return gulp
				.src(["images/*"]) 
				.pipe(gulp.dest("dist/images")) ;
});
gulp.task("sass",()=>{
	 return gulp.src('scss/**')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
})

gulp.task("default",["watch","server"]);

// gulp.task('es6',() =>{
// 	   return gulp.src('es6/*.js')
// 	        .pipe(babel({
// 	            presets: ['env']
// 	        }))
// 	        .pipe(gulp.dest('dist/scripts/'))
// });

