import React from 'react';
import directories from './directories';

const commands = {
  cd: {
    possibleArgs: 1,
    help: (
      <div>
        cd
        {' '}
        <i>directory</i>
      </div>
    ),
    error: 'cd: no such file or directory',
    successHandler: (event) => {
      const { args: [directory], setCurrentDirectory, setOutput } = event;

      switch (directory) {
        case undefined:
        case null:
          setCurrentDirectory('~');
          break;
        case '..': {
          setCurrentDirectory((currentDirectory) => {
            if (currentDirectory === '~') return currentDirectory;

            const dirs = `${currentDirectory}/${directory}`.split('/');
            const newDir = dirs.splice(0, dirs.length - 2).join('/');

            return newDir;
          });

          return;
        }
        case '.': return;
        default: {
          // TODO: Figure out how to go up a directory using ..
          setCurrentDirectory((currentDirectory) => {
            const [root, ...paths] = `${currentDirectory}/${directory}`.split('/');

            let currentDir = directories[root];
            let dirDNE = false;

            paths.forEach((path) => {
              if (!dirDNE) {
                if (!currentDir || !currentDir[path]) {
                  dirDNE = true;
                  currentDir = path;
                } else {
                  currentDir = currentDir[path];
                }
              }
            });

            if (dirDNE) {
              setOutput((output) => [...output, `${commands.cd.error}: ${currentDir}`]);
            } else {
              return `${currentDirectory}/${directory}`;
            }

            return currentDirectory;
          });
        }
      }
    },
  },
  clear: {
    possibleArgs: 0,
    help: (
      <div>
        Usage: clear
        <br />
        <i style={{ paddingLeft: '10px' }}>
          This is used to clear the screen of all text
        </i>
      </div>
    ),
    error: 'No arguments allowed with clear',
    successHandler: ({ setOutput }) => setOutput([]),
  },
  echo: {
    possibleArgs: -1,
    help: (
      <div>

        echo [what you want to print]
        {' '}
        <i>
          Use with any number of args to print what
          you type on the next line
        </i>
      </div>
    ),
    error: '',
    successHandler: ({ args, setOutput }) => {
      setOutput((output) => [...output, `${args.join(' ')}`]);
    },
  },
  help: {
    possibleArgs: 1,
    successHandler: ({ args, setOutput }) => {
      if (args.length) {
        const command = args[0];

        if (commands[command]) {
          setOutput((output) => [...output, commands[command].help]);
        } else {
          setOutput((output) => [...output, 'That command does not exist, try \'help\' to see all possible commands']);
        }
      } else {
        setOutput((output) => [...output, ...Object.keys(commands).map((command) => {
          const { help } = commands[command];

          return help;
        })]);
      }
    },
  },
  ls: {
    possibleArgs: 0,
    help: (
      <div>
        ls
        {' '}
        <i>
          This command is used to print everything
          in your current directory
        </i>
      </div>
    ),
    error: '',
    successHandler: (event) => {
      const { currentDirectory, setOutput } = event;

      const [root, ...dirs] = currentDirectory.split('/');
      let current = directories[root];

      dirs.forEach((dir) => {
        current = current[dir];
      });

      if (!React.isValidElement(current)) {
        // If each of the children of the current dir are react elements, we show them
        let isReact = false;
        const out = Object.keys(current).map((key) => {
          if (React.isValidElement(current[key])) {
            isReact = true;
            return current[key];
          }
          return key;
        });

        setOutput((output) => [
          ...output, (
            <div>
              {isReact && (
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
                >
                  {out}
                </div>
              )}
              {!isReact && (
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
                >
                  {out.map((file) => (
                    <p
                      key={file}
                      style={{
                        color: '#0537c1',
                        margin: 0,
                      }}
                    >
                      {` ${file} `}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )]);
      } else {
        setOutput((o) => [...o, <div>{current}</div>]);
      }
    },
  },
  sl: {
    help: 'L + ratio simulator',
    error: '',

  },
  default: {
    help: null,
    error: null,
    successHandler: (({ command, setOutput }) => {
      setOutput((output) => [
        ...output,
        `zsh: ${command}: command not found...`,
      ]);
    }),
  },
};

export default commands;
