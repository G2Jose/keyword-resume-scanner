type config;
type config2;
type envVariables;

[@bs.module] external getCommandLineArgsFromConfig: config => envVariables = "command-line-args";
[@bs.module "./config"] external cmdLineOptions: 'something = "cmdLineOptions";

let getCommandLineArgs: unit => envVariables = () => getCommandLineArgsFromConfig(cmdLineOptions);
let filterFormats: string => bool = (path) => path.contains("docx") || path.contains("pdf");

Js.log(getCommandLineArgs());
