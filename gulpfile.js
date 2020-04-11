const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSynk = require("browser-sync").create();
const reload = browserSynk.reload;

// compile our SCSS to CSS
function style() {
  // 1. where are SCSS files
  return (
    gulp
      .src("./sass/**/*.scss")
      // 2. pass through SCSS compiler
      .pipe(sass())
      .on("error", sass.logError)
      // 3. where I can save final CSS?
      .pipe(gulp.dest("./css/"))
      // 4. stream changes to all browsers
      .pipe(browserSynk.stream())
  );
}

function watch() {
  browserSynk.init({
    server: {
      baseDir: "./"
    },
    browser: ["chrome", "firefox"]
  });
  gulp.watch("./sass/**/*.scss", style);
  gulp.watch("./*.html").on("change", reload);
  gulp.watch("./js/**/*.js").on("change", reload);
}

exports.style = style;
exports.watch = watch;
