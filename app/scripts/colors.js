const Colors = function() {
  const colorMap = {
    "1c enterprise"            : "#814ccc",
    "abap"                     : "#e8274b",
    "actionscript"             : "#882b0f",
    "ada"                      : "#02f88c",
    "agda"                     : "#315665",
    "ags script"               : "#b9d9ff",
    "alloy"                    : "#64c800",
    "ampl"                     : "#e6efbb",
    "antlr"                    : "#9dc3ff",
    "api blueprint"            : "#2acca8",
    "apl"                      : "#5a8164",
    "apollo guidance computer" : "#0b3d91",
    "applescript"              : "#101f1f",
    "arc"                      : "#aa2afe",
    "arduino"                  : "#bd79d1",
    "asn.1"                    : "#aeead0",
    "asp"                      : "#6a40fd",
    "aspectj"                  : "#a957b0",
    "assembly"                 : "#6e4c13",
    "ats"                      : "#1ac620",
    "autohotkey"               : "#6594b9",
    "autoit"                   : "#1c3552",
    "batchfile"                : "#c1f12e",
    "bison"                    : "#6a463f",
    "blitzmax"                 : "#cd6400",
    "boo"                      : "#d4bec1",
    "brainfuck"                : "#2f2530",
    "c"                        : "#555555",
    "c#"                       : "#178600",
    "c++"                      : "#f34b7d",
    "chapel"                   : "#8dc63f",
    "cirru"                    : "#ccccff",
    "clarion"                  : "#db901e",
    "clean"                    : "#3f85af",
    "click"                    : "#e4e6f3",
    "clojure"                  : "#db5855",
    "coffeescript"             : "#244776",
    "coldfusion cfc"           : "#ed2cd6",
    "coldfusion"               : "#ed2cd6",
    "common lisp"              : "#3fb68b",
    "component pascal"         : "#b0ce4e",
    "crystal"                  : "#776791",
    "css"                      : "#563d7c",
    "cucumber"                 : "#5b2063",
    "cuda"                     : "#3a4e3a",
    "d"                        : "#ba595e",
    "dart"                     : "#00b4ab",
    "dm"                       : "#447265",
    "dogescript"               : "#cca760",
    "dylan"                    : "#6c616e",
    "e"                        : "#ccce35",
    "eagle"                    : "#814c05",
    "ec"                       : "#913960",
    "ecl"                      : "#8a1267",
    "eiffel"                   : "#946d57",
    "ejs"                      : "#a91e50",
    "elixir"                   : "#6e4a7e",
    "elm"                      : "#60b5cc",
    "emacs lisp"               : "#c065db",
    "emberscript"              : "#fff4f3",
    "eq"                       : "#a78649",
    "erlang"                   : "#b83998",
    "f#"                       : "#b845fc",
    "factor"                   : "#636746",
    "fancy"                    : "#7b9db4",
    "fantom"                   : "#dbded5",
    "flux"                     : "#88ccff",
    "forth"                    : "#341708",
    "fortran"                  : "#4d41b1",
    "freemarker"               : "#0050b2",
    "frege"                    : "#00cafe",
    "game maker language"      : "#8fb200",
    "glyph"                    : "#e4cc98",
    "gnuplot"                  : "#f0a9f0",
    "go"                       : "#375eab",
    "golo"                     : "#88562a",
    "gosu"                     : "#82937f",
    "grammatical framework"    : "#79aa7a",
    "groff"                    : "#ecdebe",
    "groovy"                   : "#e69f56",
    "hack"                     : "#878787",
    "haml"                     : "#ece2a9",
    "handlebars"               : "#01a9d6",
    "harbour"                  : "#0e60e3",
    "haskell"                  : "#29b544",
    "haxe"                     : "#df7900",
    "html"                     : "#e44b23",
    "hy"                       : "#7790b2",
    "idl"                      : "#a3522f",
    "io"                       : "#a9188d",
    "ioke"                     : "#078193",
    "isabelle"                 : "#fefe00",
    "j"                        : "#9eedff",
    "java"                     : "#b07219",
    "javascript"               : "#f1e05a",
    "jflex"                    : "#dbca00",
    "jsoniq"                   : "#40d47e",
    "julia"                    : "#a270ba",
    "jupyter notebook"         : "#da5b0b",
    "kotlin"                   : "#f18e33",
    "krl"                      : "#28431f",
    "lasso"                    : "#999999",
    "latte"                    : "#a8ff97",
    "less"                     : "#a1d9a1",
    "lex"                      : "#dbca00",
    "lfe"                      : "#004200",
    "livescript"               : "#499886",
    "llvm"                     : "#185619",
    "lolcode"                  : "#cc9900",
    "lookml"                   : "#652b81",
    "lsl"                      : "#3d9970",
    "lua"                      : "#000080",
    "makefile"                 : "#427819",
    "mask"                     : "#f97732",
    "matlab"                   : "#bb92ac",
    "max"                      : "#c4a79c",
    "maxscript"                : "#00a6a6",
    "mercury"                  : "#ff2b2b",
    "metal"                    : "#8f14e9",
    "mirah"                    : "#c7a938",
    "mtml"                     : "#b7e1f4",
    "ncl"                      : "#28431f",
    "nemerle"                  : "#3d3c6e",
    "nesc"                     : "#94b0c7",
    "netlinx"                  : "#0aa0ff",
    "netlinx+erb"              : "#747faa",
    "netlogo"                  : "#ff6375",
    "newlisp"                  : "#87aed7",
    "nginx"                    : "#9469e9",
    "nimrod"                   : "#37775b",
    "nit"                      : "#009917",
    "nix"                      : "#7e7eff",
    "nu"                       : "#c9df40",
    "numpy"                    : "#9c8af9",
    "objective-c"              : "#438eff",
    "objective-c++"            : "#6866fb",
    "objective-j"              : "#ff0c5a",
    "ocaml"                    : "#3be133",
    "omgrofl"                  : "#cabbff",
    "ooc"                      : "#b0b77e",
    "opal"                     : "#f7ede0",
    "oxygene"                  : "#cdd0e3",
    "oz"                       : "#fab738",
    "pan"                      : "#cc0000",
    "papyrus"                  : "#6600cc",
    "parrot"                   : "#f3ca0a",
    "pascal"                   : "#e3f171",
    "pawn"                     : "#dbb284",
    "perl"                     : "#0298c3",
    "perl6"                    : "#0000fb",
    "php"                      : "#4f5d95",
    "piglatin"                 : "#fcd7de",
    "pike"                     : "#005390",
    "plsql"                    : "#dad8d8",
    "pogoscript"               : "#d80074",
    "postscript"               : "#da291c",
    "powerbuilder"             : "#8f0f8d",
    "processing"               : "#0096d8",
    "prolog"                   : "#74283c",
    "propeller spin"           : "#7fa2a7",
    "puppet"                   : "#302b6d",
    "pure data"                : "#91de79",
    "purebasic"                : "#5a6986",
    "purescript"               : "#1d222d",
    "python"                   : "#3572a5",
    "qml"                      : "#44a51c",
    "r"                        : "#198ce7",
    "racket"                   : "#22228f",
    "ragel in ruby host"       : "#9d5200",
    "raml"                     : "#77d9fb",
    "rebol"                    : "#358a5b",
    "red"                      : "#f50000",
    "ren'py"                   : "#ff7f7f",
    "rouge"                    : "#cc0088",
    "ruby"                     : "#701516",
    "runoff"                   : "#665a4e",
    "rust"                     : "#dea584",
    "saltstack"                : "#646464",
    "sas"                      : "#b34936",
    "sass"                     : "#cf649a",
    "scala"                    : "#c22d40",
    "scheme"                   : "#1e4aec",
    "scss"                     : "#cf649a",
    "self"                     : "#0579aa",
    "shell"                    : "#89e051",
    "shen"                     : "#120f14",
    "slash"                    : "#007eff",
    "slim"                     : "#ff8f77",
    "smalltalk"                : "#596706",
    "sourcepawn"               : "#5c7611",
    "sqf"                      : "#3f3f3f",
    "squirrel"                 : "#800000",
    "srecode template"         : "#348a34",
    "stan"                     : "#b2011d",
    "standard ml"              : "#dc566d",
    "supercollider"            : "#46390b",
    "swift"                    : "#ffac45",
    "systemverilog"            : "#dae1c2",
    "tcl"                      : "#e4cc98",
    "terra"                    : "#00004c",
    "tex"                      : "#3d6117",
    "turing"                   : "#cf142b",
    "typescript"               : "#2b7489",
    "unified parallel c"       : "#4e3617",
    "unrealscript"             : "#a54c4d",
    "vala"                     : "#fbe5cd",
    "verilog"                  : "#b2b7f8",
    "vhdl"                     : "#adb2cb",
    "viml"                     : "#199f4b",
    "visual basic"             : "#945db7",
    "volt"                     : "#1f1f1f",
    "vue"                      : "#2c3e50",
    "web ontology language"    : "#9cc9dd",
    "wisp"                     : "#7582d1",
    "x10"                      : "#4b6bef",
    "xbase"                    : "#403a40",
    "xc"                       : "#99da07",
    "xquery"                   : "#5232e7",
    "xslt"                     : "#eb8ceb",
    "yacc"                     : "#4b6c4b",
    "zephir"                   : "#118f9e",
  };
  return {
    getColor : function(language){
      return colorMap[language.toLowerCase()] || '#ddd';
    }
  };
}();

module.exports = Colors;
