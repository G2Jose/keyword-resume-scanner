type config;

type envVariables;

[@bs.module]
external getCommandLineArgsFromConfig : config => envVariables =
  "command-line-args";

[@bs.module "./config"] external cmdLineOptions : 'someType = "cmdLineOptions";

let isTruthy: 'someType => bool =
  value => Js.to_bool([%bs.raw {|arg => !!arg|}](value));

let getCommandLineArgs: unit => envVariables =
  () => getCommandLineArgsFromConfig(cmdLineOptions);

let filterFormats: Js.String.t => Js.boolean =
  path =>
    (Js.String.includes("docx", path) || Js.String.includes("pdf", path))
    |> Js.Boolean.to_js_boolean;

let getFileNameFromPath = path => {
  let components = path |> Js.String.split("/");
  components[Js.Array.length(components) - 1];
};

let getNonEmptyLines = text =>
  text
  |> Js.String.split("\n")
  |> Array.to_list
  |> List.filter(item => isTruthy(item))
  |> Array.of_list;

let regex: Js.String.t => Js.Re.t =
  keyword =>
    [%bs.raw {|keyword =>new RegExp(`\\b${keyword}\\b`, 'i')|}](keyword);

let getLinesMatchingKeyword = (keyword, lines) =>
  lines
  |> Array.to_list
  |> List.filter(line => Js.String.match(regex(keyword), line) !== None)
  |> Array.of_list;