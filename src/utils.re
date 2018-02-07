type config;

type config2;

type envVariables;

[@bs.module]
external getCommandLineArgsFromConfig : config => envVariables =
  "command-line-args";

[@bs.module "./config"]
external cmdLineOptions : 'something = "cmdLineOptions";

let getCommandLineArgs: unit => envVariables =
  () => getCommandLineArgsFromConfig(cmdLineOptions);

let filterFormats: string => Js.boolean =
  path => {
    let str = Js.String.make(path);
    Js.Boolean.to_js_boolean(
      Js.String.includes(str, "docx") || Js.String.includes(str, "pdf")
    );
  };

let getFileNameFromPath: string => string =
  path => {
    let components = Js.String.split("/", path);
    components[components |> Array.length];
  };
