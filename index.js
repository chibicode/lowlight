/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module lowlight
 * @fileoverview Virtual syntax highlighting for virtual
 *   DOMs and non-HTML things.
 */

'use strict';

/* eslint-env commonjs */

var low = require('./lib/core.js');

/* jscs:disable maximumLineLength */

low.registerLanguage('1c', require('highlight.js/lib/languages/1c'));
low.registerLanguage('accesslog', require('highlight.js/lib/languages/accesslog'));
low.registerLanguage('actionscript', require('highlight.js/lib/languages/actionscript'));
low.registerLanguage('apache', require('highlight.js/lib/languages/apache'));
low.registerLanguage('applescript', require('highlight.js/lib/languages/applescript'));
low.registerLanguage('arduino', require('highlight.js/lib/languages/arduino'));
low.registerLanguage('armasm', require('highlight.js/lib/languages/armasm'));
low.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
low.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'));
low.registerLanguage('aspectj', require('highlight.js/lib/languages/aspectj'));
low.registerLanguage('autohotkey', require('highlight.js/lib/languages/autohotkey'));
low.registerLanguage('autoit', require('highlight.js/lib/languages/autoit'));
low.registerLanguage('avrasm', require('highlight.js/lib/languages/avrasm'));
low.registerLanguage('axapta', require('highlight.js/lib/languages/axapta'));
low.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
low.registerLanguage('basic', require('highlight.js/lib/languages/basic'));
low.registerLanguage('brainfuck', require('highlight.js/lib/languages/brainfuck'));
low.registerLanguage('cal', require('highlight.js/lib/languages/cal'));
low.registerLanguage('capnproto', require('highlight.js/lib/languages/capnproto'));
low.registerLanguage('ceylon', require('highlight.js/lib/languages/ceylon'));
low.registerLanguage('clojure', require('highlight.js/lib/languages/clojure'));
low.registerLanguage('clojure-repl', require('highlight.js/lib/languages/clojure-repl'));
low.registerLanguage('cmake', require('highlight.js/lib/languages/cmake'));
low.registerLanguage('coffeescript', require('highlight.js/lib/languages/coffeescript'));
low.registerLanguage('cos', require('highlight.js/lib/languages/cos'));
low.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
low.registerLanguage('crmsh', require('highlight.js/lib/languages/crmsh'));
low.registerLanguage('crystal', require('highlight.js/lib/languages/crystal'));
low.registerLanguage('cs', require('highlight.js/lib/languages/cs'));
low.registerLanguage('css', require('highlight.js/lib/languages/css'));
low.registerLanguage('d', require('highlight.js/lib/languages/d'));
low.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
low.registerLanguage('dart', require('highlight.js/lib/languages/dart'));
low.registerLanguage('delphi', require('highlight.js/lib/languages/delphi'));
low.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
low.registerLanguage('django', require('highlight.js/lib/languages/django'));
low.registerLanguage('dns', require('highlight.js/lib/languages/dns'));
low.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'));
low.registerLanguage('dos', require('highlight.js/lib/languages/dos'));
low.registerLanguage('dts', require('highlight.js/lib/languages/dts'));
low.registerLanguage('dust', require('highlight.js/lib/languages/dust'));
low.registerLanguage('elixir', require('highlight.js/lib/languages/elixir'));
low.registerLanguage('elm', require('highlight.js/lib/languages/elm'));
low.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
low.registerLanguage('erb', require('highlight.js/lib/languages/erb'));
low.registerLanguage('erlang-repl', require('highlight.js/lib/languages/erlang-repl'));
low.registerLanguage('erlang', require('highlight.js/lib/languages/erlang'));
low.registerLanguage('fix', require('highlight.js/lib/languages/fix'));
low.registerLanguage('fortran', require('highlight.js/lib/languages/fortran'));
low.registerLanguage('fsharp', require('highlight.js/lib/languages/fsharp'));
low.registerLanguage('gams', require('highlight.js/lib/languages/gams'));
low.registerLanguage('gauss', require('highlight.js/lib/languages/gauss'));
low.registerLanguage('gcode', require('highlight.js/lib/languages/gcode'));
low.registerLanguage('gherkin', require('highlight.js/lib/languages/gherkin'));
low.registerLanguage('glsl', require('highlight.js/lib/languages/glsl'));
low.registerLanguage('go', require('highlight.js/lib/languages/go'));
low.registerLanguage('golo', require('highlight.js/lib/languages/golo'));
low.registerLanguage('gradle', require('highlight.js/lib/languages/gradle'));
low.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'));
low.registerLanguage('haml', require('highlight.js/lib/languages/haml'));
low.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'));
low.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'));
low.registerLanguage('haxe', require('highlight.js/lib/languages/haxe'));
low.registerLanguage('hsp', require('highlight.js/lib/languages/hsp'));
low.registerLanguage('http', require('highlight.js/lib/languages/http'));
low.registerLanguage('inform7', require('highlight.js/lib/languages/inform7'));
low.registerLanguage('ini', require('highlight.js/lib/languages/ini'));
low.registerLanguage('irpf90', require('highlight.js/lib/languages/irpf90'));
low.registerLanguage('java', require('highlight.js/lib/languages/java'));
low.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
low.registerLanguage('json', require('highlight.js/lib/languages/json'));
low.registerLanguage('julia', require('highlight.js/lib/languages/julia'));
low.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'));
low.registerLanguage('lasso', require('highlight.js/lib/languages/lasso'));
low.registerLanguage('less', require('highlight.js/lib/languages/less'));
low.registerLanguage('lisp', require('highlight.js/lib/languages/lisp'));
low.registerLanguage('livecodeserver', require('highlight.js/lib/languages/livecodeserver'));
low.registerLanguage('livescript', require('highlight.js/lib/languages/livescript'));
low.registerLanguage('lua', require('highlight.js/lib/languages/lua'));
low.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'));
low.registerLanguage('mathematica', require('highlight.js/lib/languages/mathematica'));
low.registerLanguage('matlab', require('highlight.js/lib/languages/matlab'));
low.registerLanguage('mel', require('highlight.js/lib/languages/mel'));
low.registerLanguage('mercury', require('highlight.js/lib/languages/mercury'));
low.registerLanguage('mipsasm', require('highlight.js/lib/languages/mipsasm'));
low.registerLanguage('mizar', require('highlight.js/lib/languages/mizar'));
low.registerLanguage('perl', require('highlight.js/lib/languages/perl'));
low.registerLanguage('mojolicious', require('highlight.js/lib/languages/mojolicious'));
low.registerLanguage('monkey', require('highlight.js/lib/languages/monkey'));
low.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
low.registerLanguage('nimrod', require('highlight.js/lib/languages/nimrod'));
low.registerLanguage('nix', require('highlight.js/lib/languages/nix'));
low.registerLanguage('nsis', require('highlight.js/lib/languages/nsis'));
low.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'));
low.registerLanguage('ocaml', require('highlight.js/lib/languages/ocaml'));
low.registerLanguage('openscad', require('highlight.js/lib/languages/openscad'));
low.registerLanguage('oxygene', require('highlight.js/lib/languages/oxygene'));
low.registerLanguage('parser3', require('highlight.js/lib/languages/parser3'));
low.registerLanguage('pf', require('highlight.js/lib/languages/pf'));
low.registerLanguage('php', require('highlight.js/lib/languages/php'));
low.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'));
low.registerLanguage('processing', require('highlight.js/lib/languages/processing'));
low.registerLanguage('profile', require('highlight.js/lib/languages/profile'));
low.registerLanguage('prolog', require('highlight.js/lib/languages/prolog'));
low.registerLanguage('protobuf', require('highlight.js/lib/languages/protobuf'));
low.registerLanguage('puppet', require('highlight.js/lib/languages/puppet'));
low.registerLanguage('python', require('highlight.js/lib/languages/python'));
low.registerLanguage('q', require('highlight.js/lib/languages/q'));
low.registerLanguage('r', require('highlight.js/lib/languages/r'));
low.registerLanguage('rib', require('highlight.js/lib/languages/rib'));
low.registerLanguage('roboconf', require('highlight.js/lib/languages/roboconf'));
low.registerLanguage('rsl', require('highlight.js/lib/languages/rsl'));
low.registerLanguage('ruleslanguage', require('highlight.js/lib/languages/ruleslanguage'));
low.registerLanguage('rust', require('highlight.js/lib/languages/rust'));
low.registerLanguage('scala', require('highlight.js/lib/languages/scala'));
low.registerLanguage('scheme', require('highlight.js/lib/languages/scheme'));
low.registerLanguage('scilab', require('highlight.js/lib/languages/scilab'));
low.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
low.registerLanguage('smali', require('highlight.js/lib/languages/smali'));
low.registerLanguage('smalltalk', require('highlight.js/lib/languages/smalltalk'));
low.registerLanguage('sml', require('highlight.js/lib/languages/sml'));
low.registerLanguage('sqf', require('highlight.js/lib/languages/sqf'));
low.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
low.registerLanguage('stan', require('highlight.js/lib/languages/stan'));
low.registerLanguage('stata', require('highlight.js/lib/languages/stata'));
low.registerLanguage('step21', require('highlight.js/lib/languages/step21'));
low.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'));
low.registerLanguage('swift', require('highlight.js/lib/languages/swift'));
low.registerLanguage('tcl', require('highlight.js/lib/languages/tcl'));
low.registerLanguage('tex', require('highlight.js/lib/languages/tex'));
low.registerLanguage('thrift', require('highlight.js/lib/languages/thrift'));
low.registerLanguage('tp', require('highlight.js/lib/languages/tp'));
low.registerLanguage('twig', require('highlight.js/lib/languages/twig'));
low.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
low.registerLanguage('vala', require('highlight.js/lib/languages/vala'));
low.registerLanguage('vbnet', require('highlight.js/lib/languages/vbnet'));
low.registerLanguage('vbscript', require('highlight.js/lib/languages/vbscript'));
low.registerLanguage('vbscript-html', require('highlight.js/lib/languages/vbscript-html'));
low.registerLanguage('verilog', require('highlight.js/lib/languages/verilog'));
low.registerLanguage('vhdl', require('highlight.js/lib/languages/vhdl'));
low.registerLanguage('vim', require('highlight.js/lib/languages/vim'));
low.registerLanguage('x86asm', require('highlight.js/lib/languages/x86asm'));
low.registerLanguage('xl', require('highlight.js/lib/languages/xl'));
low.registerLanguage('xquery', require('highlight.js/lib/languages/xquery'));
low.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
low.registerLanguage('zephir', require('highlight.js/lib/languages/zephir'));

/*
 * Expose.
 */

module.exports = low;
