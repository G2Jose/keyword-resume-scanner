[%bs.raw {|require('colors')|}];

[@bs.module "./utils.bs"] external regex : 'someType = "regex";

let printResumeResults = data => Js.log(data#fileName#underline#bold);