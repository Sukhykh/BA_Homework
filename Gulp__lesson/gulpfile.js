const gulp = require('gulp');
const argv = require('yargs').argv;
const projectConfig = require('./projectConfig.json');
const path = projectConfig.path;
const browserSync = require('browser-sync').create();
const nunjucks = require('gulp-nunjucks');

const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const gcmq = require('gulp-group-css-media-queries');

const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
/*
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
*/
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');

//const del = require('del');

// Dev check
const isDev = function () {
	return !argv.prod;
};
// Prod check
const isProd = function () {
	return !!argv.prod;
};

const webpackConf = {
	mode: isDev() ? 'development' : 'production',
	devtool: isDev() ? 'eval-source-map' : false,
	optimization: {
		minimize: false,
	},
	output: {
		filename: 'app.js',
	},
	module: {
		rules: [],
	},
};

if (isProd()) {
	webpackConf.module.rules.push({
		test: /\.(js)$/,
		exclude: /(node_modules)/,
		loader: 'babel-loader',
	});
}

path.src.html[0] = path.src.srcPath + path.src.html[0];
path.src.html[1] = '!' + path.src.html[0].slice(0, -6) + '_*.html';
path.src.html[2] = '!' + path.src.srcPath + '/assets';
path.src.html[3] = '!' + path.src.srcPath + '/_html';
path.dist.html = path.dist.distPath + path.dist.html;

path.src.style[0] = path.src.srcPath + path.src.style[0];
path.dist.style = path.dist.distPath + path.dist.style;

path.src.script[0] = path.src.srcPath + path.src.script[0];
path.dist.script = path.dist.distPath + path.dist.script;
/*
path.src.image[0] = path.src.srcPath + path.src.image[0];
path.src.image[1] = '!' + path.src.image[0].slice(0, -6) + 'svgIcons/*.svg';
path.dist.image = path.dist.distPath + path.dist.image;
*/
path.src.font[0] = path.src.srcPath + path.src.font[0];
path.src.font[1] = '!' + path.src.font[0].slice(0, -6) + 'src/*.*';
path.dist.font = path.dist.distPath + path.dist.font;

// плагін оновлення браузера
function browsersync() {
	browserSync.init({
		open: true,
		server: path.dist.distPath,
	});
}

// плагін шаблонізатор HTML
function njk() {
	return gulp
		.src(path.src.html)
		.pipe(nunjucks.compile())
		.pipe(gulp.dest(path.dist.html))
		.on('end', browserSync.reload);
}

// плагін препроцессора
function scss() {
	return gulp
		.src(path.src.style)
		.pipe(gulpif(isDev(), sourcemaps.init()))
		.pipe(sass())
		.pipe(
			gulpif(
				isProd(),
				autoprefixer({
					grid: true,
				})
			)
		)
		.pipe(gulpif(isProd(), gcmq()))
		.pipe(gulpif(isDev(), sourcemaps.write()))
		.pipe(gulpif(isProd(), gulp.dest(path.dist.style)))
		.pipe(gulpif(isProd(), csso()))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(path.dist.style))
		.pipe(browserSync.reload({ stream: true }));
}

// плагін для роботи зі скриптами
function script() {
	return gulp
		.src(path.src.script)
		.pipe(plumber())
		.pipe(webpackStream(webpackConf, webpack))
		.pipe(gulpif(isProd(), gulp.dest(path.dist.script)))
		.pipe(gulpif(isProd(), uglify()))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(path.dist.script))
		.pipe(browserSync.reload({ stream: true }));
}
/*
// плагін для зображень
function imageMin() {
	return gulp
		.src(path.src.image)
		.pipe(newer(path.dist.image))
		.pipe(
			imagemin([
				imageminJpegRecompress({
					progressive: true,
					min: 70,
					max: 75,
				}),

				pngquant({
					speed: 5,
					quality: [0.6, 0.8],
				}),

				imagemin.svgo({
					plugins: [
						{ removeViewBox: false },
						{ removeUnusedNS: false },
						{ removeUselessStrokeAndFill: false },
						{ cleanupIDs: false },
						{ removeComments: true },
						{ removeEmptyAttrs: true },
						{ removeEmptyText: true },
						{ collapseGroups: true },
					],
				}),
			])
		)
		.pipe(gulp.dest(path.dist.image));
}
*/
//function webConverter() {
//	return gulp
//		.src(path.dist.image + '**/*.{png,jpg,jpeg}')
//		.pipe(webp())
//		.pipe(gulp.dest(path.dist.image));
//}

//плагін для роботи зі шрифтами
function ttf2woff2Converter() {
	return gulp
		.src(path.src.font[0].slice(0, -6) + 'src/*.ttf')
		.pipe(ttf2woff2())
		.pipe(gulp.dest(path.src.font[0].slice(0, -6)));
}

function ttf2woffConverter() {
	return gulp
		.src(path.src.font[0].slice(0, -6) + 'src/*.ttf')
		.pipe(ttf2woff())
		.pipe(gulp.dest(path.src.font[0].slice(0, -6)));
}

function otf2ttf() {
	return gulp
		.src(path.src.font[0].slice(0, -6) + 'src/*')
		.pipe(
			fonter({
				formats: ['ttf'],
			})
		)
		.pipe(gulp.dest(path.src.font[0].slice(0, -6) + 'src'));
}

function font() {
	return gulp
		.src(path.src.font)
		.pipe(gulp.dest(path.dist.font))
		.on('end', browserSync.reload);
}
/*
// плагін очищення папки dist
function clean() {
	return del([path.dist.distPath]);
}
*/
path.watch = {};
path.watch.html = [];
path.watch.html[0] = path.src.html[0];

path.watch.style = [];
path.watch.style[0] = path.src.style[0].replace(
	path.src.style[0].split('/').pop(),
	'**/*.scss'
);

path.watch.script = [];
path.watch.script[0] = path.src.script[0].replace(
	path.src.script[0].split('/').pop(),
	'**/*.js'
);

//path.watch.image = [];
//path.watch.image[0] = path.src.image[0];
//path.watch.image[1] = '!' + path.src.image[0].slice(0, -6) + 'svgIcons/*.svg';

path.watch.font = [];
path.watch.font[0] = path.src.font[0];
path.watch.font[1] = '!' + path.src.font[0].slice(0, -6) + 'src/*.*';

// відстеження змін
function watch() {
	gulp.watch(path.watch.html, njk);
	gulp.watch(path.watch.style, scss);
	gulp.watch(path.watch.script, script);
	//gulp.watch(path.watch.image, image);
	gulp.watch(path.watch.font, font);
}
/*
const image = gulp.series(imageMin, webConverter, (done) => {
	browserSync.reload();
	done();
});
*/
const fontsConvert = gulp.series(
	otf2ttf,
	ttf2woff2Converter,
	ttf2woffConverter
);
exports.fontsConvert = fontsConvert;

exports.default = gulp.series(
	//gulp.parallel(clean),
	//gulp.parallel(njk, scss, script, image, font),
	gulp.parallel(njk, scss, script, font),
	gulp.parallel(browsersync, watch)
);
