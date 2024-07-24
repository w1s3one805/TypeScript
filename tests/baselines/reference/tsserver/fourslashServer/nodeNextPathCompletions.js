currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
//// [/lib.d.ts]
lib.d.ts-Text

//// [/lib.decorators.d.ts]
lib.decorators.d.ts-Text

//// [/lib.decorators.legacy.d.ts]
lib.decorators.legacy.d.ts-Text

//// [/node_modules/dependency/lib/index.d.ts]
export function fooFromIndex(): void;

//// [/node_modules/dependency/lib/lol.d.ts]
export function fooFromLol(): void;

//// [/node_modules/dependency/package.json]
{
    "type": "module",
    "name": "dependency",
    "version": "1.0.0",
    "exports": {
        ".": {
            "types": "./lib/index.d.ts"
        },
        "./lol": {
            "types": "./lib/lol.d.ts"
        },
       "./dir/*": "./lib/*"
    }
}

//// [/package.json]
{
    "type": "module",
    "dependencies": {
        "dependency": "^1.0.0"
    }
}

//// [/src/foo.ts]
import { fooFromIndex } from "";

//// [/tsconfig.json]
{ "compilerOptions": { "module": "nodenext" }, "files": ["./src/foo.ts"] }


Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 0,
      "type": "request",
      "arguments": {
        "file": "/node_modules/dependency/package.json"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /node_modules/dependency/package.json ProjectRootPath: undefined:: Result: undefined
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.decorators.legacy.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)
	/lib.d.ts Text-1 lib.d.ts-Text
	/lib.decorators.d.ts Text-1 lib.decorators.d.ts-Text
	/lib.decorators.legacy.d.ts Text-1 lib.decorators.legacy.d.ts-Text
	/node_modules/dependency/package.json SVC-1-0 "{\n    \"type\": \"module\",\n    \"name\": \"dependency\",\n    \"version\": \"1.0.0\",\n    \"exports\": {\n        \".\": {\n            \"types\": \"./lib/index.d.ts\"\n        },\n        \"./lol\": {\n            \"types\": \"./lib/lol.d.ts\"\n        },\n       \"./dir/*\": \"./lib/*\"\n    }\n}"


	../../lib.d.ts
	  Default library for target 'es5'
	../../lib.decorators.d.ts
	  Library referenced via 'decorators' from file '../../lib.d.ts'
	../../lib.decorators.legacy.d.ts
	  Library referenced via 'decorators.legacy' from file '../../lib.d.ts'
	package.json
	  Root file specified for compilation

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /node_modules/dependency/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 0,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After Request
watchedFiles::
/lib.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.d.ts: *new*
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts: *new*
  {"pollingInterval":500}

Projects::
/dev/null/inferredProject1* (Inferred) *new*
    projectStateVersion: 1
    projectProgramVersion: 1

ScriptInfos::
/lib.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/package.json (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 1,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts"
      },
      "command": "open"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /src/foo.ts ProjectRootPath: undefined:: Result: /tsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /tsconfig.json 2000 undefined Project: /tsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/tsconfig.json",
        "reason": "Creating possible configured project for /src/foo.ts to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /tsconfig.json : {
 "rootNames": [
  "/src/foo.ts"
 ],
 "options": {
  "module": 199,
  "configFilePath": "/tsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /lib.esnext.full.d.ts 500 undefined Project: /tsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/src/foo.ts SVC-1-0 "import { fooFromIndex } from \"\";"


	src/foo.ts
	  Part of 'files' list in tsconfig.json
	  File is ECMAScript module because 'package.json' has field "type" with value "module"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /package.json 250 undefined WatchType: package.json file
Info seq  [hh:mm:ss:mss] AutoImportProviderProject: found 2 root files in 1 dependencies 0 referenced projects in * ms
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /node_modules/dependency/lib/index.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /node_modules/dependency/lib/lol.d.ts 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /dev/null/autoImportProviderProject1*
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /node_modules/dependency/lib/package.json 2000 undefined Project: /dev/null/autoImportProviderProject1* WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /dev/null/autoImportProviderProject1* projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/node_modules/dependency/lib/index.d.ts Text-1 "export function fooFromIndex(): void;"
	/node_modules/dependency/lib/lol.d.ts Text-1 "export function fooFromLol(): void;"


	node_modules/dependency/lib/index.d.ts
	  Root file specified for compilation
	  File is ECMAScript module because 'node_modules/dependency/package.json' has field "type" with value "module"
	node_modules/dependency/lib/lol.d.ts
	  Root file specified for compilation
	  File is ECMAScript module because 'node_modules/dependency/package.json' has field "type" with value "module"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/tsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/src/foo.ts",
        "configFile": "/tsconfig.json",
        "diagnostics": [
          {
            "text": "File '/lib.esnext.full.d.ts' not found.\n  The file is in the program because:\n    Default library for target 'esnext'",
            "code": 6053,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Array'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Boolean'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Function'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'IArguments'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Number'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Object'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'RegExp'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'String'.",
            "code": 2318,
            "category": "error"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/inferredProject1*' (Inferred)
Info seq  [hh:mm:ss:mss] 	Files (4)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /node_modules/dependency/package.json ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /dev/null/inferredProject1*
Info seq  [hh:mm:ss:mss] 	FileName: /src/foo.ts ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /tsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *,
        "createAutoImportProviderProgramDurationMs": *
      }
    }
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/lib.esnext.full.d.ts: *new*
  {"pollingInterval":500}
/node_modules/dependency/lib/index.d.ts: *new*
  {"pollingInterval":500}
/node_modules/dependency/lib/lol.d.ts: *new*
  {"pollingInterval":500}
/node_modules/dependency/lib/package.json: *new*
  {"pollingInterval":2000}
/package.json: *new*
  {"pollingInterval":250}
/tsconfig.json: *new*
  {"pollingInterval":2000}

Projects::
/dev/null/autoImportProviderProject1* (AutoImportProvider) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 1
    autoImportProviderHost: /dev/null/autoImportProviderProject1*

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts *new*
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 2,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 31
      },
      "command": "completionInfo"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "completionInfo",
      "request_seq": 2,
      "success": true,
      "body": {
        "isGlobalCompletion": false,
        "isMemberCompletion": false,
        "isNewIdentifierLocation": true,
        "entries": [
          {
            "name": "dependency",
            "kind": "external module name",
            "kindModifiers": "",
            "sortText": "11"
          }
        ],
        "defaultCommitCharacters": []
      }
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 3,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 31,
        "entryNames": [
          {
            "name": "dependency"
          }
        ]
      },
      "command": "completionEntryDetails-full"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "completionEntryDetails-full",
      "request_seq": 3,
      "success": true,
      "body": [
        {
          "name": "dependency",
          "kindModifiers": "",
          "kind": "external module name",
          "displayParts": [
            {
              "text": "dependency",
              "kind": "text"
            }
          ],
          "tags": []
        }
      ]
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 4,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 31,
        "endLine": 1,
        "endOffset": 31,
        "insertString": ""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 4,
      "success": true
    }
After Request
Projects::
/dev/null/autoImportProviderProject1* (AutoImportProvider)
    projectStateVersion: 1
    projectProgramVersion: 1
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
    autoImportProviderHost: /dev/null/autoImportProviderProject1*

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-1 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 5,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 31,
        "endLine": 1,
        "endOffset": 31,
        "insertString": "d"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 5,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-2 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 6,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 32,
        "key": "d"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 6,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 7,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 32,
        "endLine": 1,
        "endOffset": 32,
        "insertString": "e"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 7,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-3 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 8,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 33,
        "key": "e"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 8,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 9,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 33,
        "endLine": 1,
        "endOffset": 33,
        "insertString": "p"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 9,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-4 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 10,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 34,
        "key": "p"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 10,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 11,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 34,
        "endLine": 1,
        "endOffset": 34,
        "insertString": "e"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 11,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-5 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 12,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 35,
        "key": "e"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 12,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 13,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 35,
        "endLine": 1,
        "endOffset": 35,
        "insertString": "n"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 13,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-6 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 14,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 36,
        "key": "n"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 14,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 15,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 36,
        "endLine": 1,
        "endOffset": 36,
        "insertString": "d"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 15,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-7 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 16,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 37,
        "key": "d"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 16,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 17,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 37,
        "endLine": 1,
        "endOffset": 37,
        "insertString": "e"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 17,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-8 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 18,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 38,
        "key": "e"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 18,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 19,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 38,
        "endLine": 1,
        "endOffset": 38,
        "insertString": "n"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 19,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-9 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 20,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 39,
        "key": "n"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 20,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 21,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 39,
        "endLine": 1,
        "endOffset": 39,
        "insertString": "c"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 21,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-10 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 22,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 40,
        "key": "c"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 22,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 23,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 40,
        "endLine": 1,
        "endOffset": 40,
        "insertString": "y"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 23,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-11 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 24,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 41,
        "key": "y"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 24,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 25,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 41,
        "endLine": 1,
        "endOffset": 41,
        "insertString": "/"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 25,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-12 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 26,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 42,
        "key": "/"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 26,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 27,
      "type": "request",
      "arguments": {
        "preferences": {}
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 27,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 28,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 42
      },
      "command": "completionInfo"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /node_modules/dependency/lib/package.json 2000 undefined Project: /tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 2 projectProgramVersion: 1 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/node_modules/dependency/lib/index.d.ts Text-1 "export function fooFromIndex(): void;"
	/src/foo.ts SVC-1-12 "import { fooFromIndex } from \"dependency/\";"


	node_modules/dependency/lib/index.d.ts
	  Imported via "dependency/" from file 'src/foo.ts' with packageId 'dependency/ib/index.d.ts@1.0.0'
	  File is ECMAScript module because 'node_modules/dependency/package.json' has field "type" with value "module"
	src/foo.ts
	  Part of 'files' list in tsconfig.json
	  File is ECMAScript module because 'package.json' has field "type" with value "module"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "completionInfo",
      "request_seq": 28,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      },
      "body": {
        "isGlobalCompletion": false,
        "isMemberCompletion": false,
        "isNewIdentifierLocation": true,
        "entries": [
          {
            "name": "lol",
            "kind": "script",
            "kindModifiers": "",
            "sortText": "11"
          },
          {
            "name": "dir",
            "kind": "directory",
            "kindModifiers": "",
            "sortText": "11"
          }
        ],
        "defaultCommitCharacters": []
      }
    }
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/lib.esnext.full.d.ts:
  {"pollingInterval":500}
/node_modules/dependency/lib/index.d.ts:
  {"pollingInterval":500}
/node_modules/dependency/lib/lol.d.ts:
  {"pollingInterval":500}
/node_modules/dependency/lib/package.json:
  {"pollingInterval":2000}
  {"pollingInterval":2000} *new*
/package.json:
  {"pollingInterval":250}
/tsconfig.json:
  {"pollingInterval":2000}

Projects::
/dev/null/autoImportProviderProject1* (AutoImportProvider) *changed*
    projectStateVersion: 2 *changed*
    projectProgramVersion: 1
    dirty: true *changed*
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 2
    projectProgramVersion: 2 *changed*
    dirty: false *changed*
    autoImportProviderHost: /dev/null/autoImportProviderProject1*

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts *changed*
    version: Text-1
    containingProjects: 2 *changed*
        /dev/null/autoImportProviderProject1*
        /tsconfig.json *new*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open)
    version: SVC-1-12
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 29,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 42,
        "endLine": 1,
        "endOffset": 42,
        "insertString": ""
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 29,
      "success": true
    }
After Request
Projects::
/dev/null/autoImportProviderProject1* (AutoImportProvider)
    projectStateVersion: 2
    projectProgramVersion: 1
    dirty: true
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 3 *changed*
    projectProgramVersion: 2
    dirty: true *changed*
    autoImportProviderHost: /dev/null/autoImportProviderProject1*

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/autoImportProviderProject1*
        /tsconfig.json
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-13 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 30,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 42,
        "endLine": 1,
        "endOffset": 42,
        "insertString": "l"
      },
      "command": "change"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "change",
      "request_seq": 30,
      "success": true
    }
After Request
ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts
    version: Text-1
    containingProjects: 2
        /dev/null/autoImportProviderProject1*
        /tsconfig.json
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open) *changed*
    version: SVC-1-14 *changed*
    containingProjects: 1
        /tsconfig.json *default*

Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 31,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 43,
        "key": "l"
      },
      "command": "formatonkey"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "formatonkey",
      "request_seq": 31,
      "success": true,
      "body": []
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 32,
      "type": "request",
      "arguments": {
        "preferences": {}
      },
      "command": "configure"
    }
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "configure",
      "request_seq": 32,
      "success": true
    }
Info seq  [hh:mm:ss:mss] request:
    {
      "seq": 33,
      "type": "request",
      "arguments": {
        "file": "/src/foo.ts",
        "line": 1,
        "offset": 43
      },
      "command": "completionInfo"
    }
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /tsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Close:: WatchInfo: /node_modules/dependency/lib/package.json 2000 undefined Project: /tsconfig.json WatchType: File location affecting resolution
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /tsconfig.json projectStateVersion: 3 projectProgramVersion: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/tsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (1)
	/src/foo.ts SVC-1-14 "import { fooFromIndex } from \"dependency/l\";"


	src/foo.ts
	  Part of 'files' list in tsconfig.json
	  File is ECMAScript module because 'package.json' has field "type" with value "module"

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Project '/dev/null/autoImportProviderProject1*' (AutoImportProvider)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "completionInfo",
      "request_seq": 33,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      },
      "body": {
        "isGlobalCompletion": false,
        "isMemberCompletion": false,
        "isNewIdentifierLocation": true,
        "entries": [
          {
            "name": "lol",
            "kind": "script",
            "kindModifiers": "",
            "sortText": "11"
          }
        ],
        "defaultCommitCharacters": []
      }
    }
After Request
watchedFiles::
/lib.d.ts:
  {"pollingInterval":500}
/lib.decorators.d.ts:
  {"pollingInterval":500}
/lib.decorators.legacy.d.ts:
  {"pollingInterval":500}
/lib.esnext.full.d.ts:
  {"pollingInterval":500}
/node_modules/dependency/lib/index.d.ts:
  {"pollingInterval":500}
/node_modules/dependency/lib/lol.d.ts:
  {"pollingInterval":500}
/node_modules/dependency/lib/package.json:
  {"pollingInterval":2000}
/package.json:
  {"pollingInterval":250}
/tsconfig.json:
  {"pollingInterval":2000}

watchedFiles *deleted*::
/node_modules/dependency/lib/package.json:
  {"pollingInterval":2000}

Projects::
/dev/null/autoImportProviderProject1* (AutoImportProvider)
    projectStateVersion: 2
    projectProgramVersion: 1
    dirty: true
/dev/null/inferredProject1* (Inferred)
    projectStateVersion: 1
    projectProgramVersion: 1
/tsconfig.json (Configured) *changed*
    projectStateVersion: 3
    projectProgramVersion: 3 *changed*
    dirty: false *changed*
    autoImportProviderHost: /dev/null/autoImportProviderProject1*

ScriptInfos::
/lib.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/lib.decorators.legacy.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/inferredProject1*
/node_modules/dependency/lib/index.d.ts *changed*
    version: Text-1
    containingProjects: 1 *changed*
        /dev/null/autoImportProviderProject1*
        /tsconfig.json *deleted*
/node_modules/dependency/lib/lol.d.ts
    version: Text-1
    containingProjects: 1
        /dev/null/autoImportProviderProject1*
/node_modules/dependency/package.json (Open)
    version: SVC-1-0
    containingProjects: 1
        /dev/null/inferredProject1* *default*
/src/foo.ts (Open)
    version: SVC-1-14
    containingProjects: 1
        /tsconfig.json *default*
