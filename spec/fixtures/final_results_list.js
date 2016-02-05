module.exports = [
  [
    {
      command: 'azk agent start --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['agent'], ['start'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Please wait, this process may take several minutes\n\nazk: Loading settings and checking dependencies.\n\nazk: Checking version...\n\nazk: azk 0.17.0 detected\n\nazk: Cleaning 0 lost containers\n\nazk: Settings loaded successfully.\n\nazk: Agent is being started...\n\nazk: Trying to connect to docker (unix:///var/run/docker.sock) (timeout: 20s)...\n\nazk: Starting azk dns service...\n\nazk: Dns service started.\n\nazk: Trying to connect to docker (unix:///var/run/docker.sock) (timeout: 20s)...\n\nazk: Starting azk balancer redirect service...\n\nazk: Check if balancer redirect service is up (tcp://172.17.0.1:80) (timeout: 10000s)...\n\nazk: Balancer redirect started.\n\nazk: Starting memcached service...\n\nazk: Memcached service started.\n\nazk: Starting http balancer service...\n\nazk: Http balancer service started.\n\nazk: Agent has been successfully started.\n'
      },
      azk_version: '0.17.0',
      time: 7101
    },
    {
      command: 'azk version --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['version'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk 0.17.0\n'
      },
      azk_version: '0.17.0',
      time: 2095
    },
    {
      command: 'azk docker --no-color -- version',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['docker'], ['--no-color'], ['--'], ['version']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'Client:\n Version:      1.9.1\n API version:  1.21\n Go version:   \ngo1.4.2\n Git commit:   a34a1d5\n Built:        Fri Nov 20 13:12:04 UTC 2015\n OS/Arch:      linux/amd64\n\nServer:\n Version:      1.9.1\n API version:  1.21\n Go version:   go1.4.2\n Git commit:   a34a1d5\n Built:        Fri Nov 20 13:12:04 UTC 2015\n OS/Arch:      linux/amd64\n'
      },
      azk_version: '0.17.0',
      time: 2234
    },
    {
      command: 'azk docker --no-color -- info',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['docker'], ['--no-color'], ['--'], ['info']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'Containers: 127\nImages: 1171\nServer Version: 1.9.1\nStorage Driver: aufs\n Root Dir: /var/lib/docker/aufs\n Backing Filesystem: extfs\n Dirs: 1434\n Dirperm1 Supported: true\nExecution Driver: native-0.2\nLogging Driver: json-file\nKernel Version: 3.16.0-30-generic\nOperating System: Ubuntu 14.04.3 LTS\nCPUs: 4\n\nTotal Memory: 7.781 GiB\nName: julio-P67A-UD3-B3\nID: XYZ5:IFYM:RTR4:MVNV:YRFU:U2OX:UT63:6NDJ:U5HY:RNZU:IUIP:BIWT\n\nWARNING: No swap limit support\n'
      },
      azk_version: '0.17.0',
      time: 2010
    },
    {
      command: 'azk info --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['info'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'manifest_id:    f4fe0a05e5\nmanifest:       /tmp/azkdemo_benchmark/Azkfile.js\ncache_dir:      /tmp/azkdemo_benchmark/.azk/Azkfile.js\ndefault_system: azkdemo\nsystems: \n  azkdemo: \n    depends: \n      - redis\n    image: \n      docker: azukiapp/node:4.2.1\n    command:  npm start\n    hostname: http://azkdemo.dev.azk.io\n    ports: \n      http: 5000/tcp\n    scalable: \n      default: 1\n      limit:   -1\n    mounts: \n      /azk/azkdemo_benchmark:              /home/julio/.azk/data/sync_folders/f4fe0a05e5/azkdemo/tmp/azkdemo_benchmark\n      /azk/azkdemo_benchmark/node_modules: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/node_modules\n    envs: \n      NODE_ENV: dev\n  redis: \n    hostname: http://dev.azk.io\n    scalable: \n      limit:   1\n      default: 1\n    image: \n      docker: redis:3.0.6\n    command:  ["redis-server","--appendonly","yes"]\n    depends:  no dependencies\n    envs: \n\n    mounts: \n      /data: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/data\n  deploy: \n    hostname: http://dev.azk.io\n    scalable: \n      default: 0\n      limit:   0\n    image: \n      docker: azukiapp/deploy-digitalocean:latest\n    depends:  no dependencies\n    envs: \n      BOX_NAME:                  azkdemo\n      REMOTE_PROJECT_PATH_ID:    azkdemo\n      ENV_FILE:                  .env\n      GIT_REF:                   final\n      DISABLE_ANALYTICS_TRACKER: true\n    mounts: \n      /azk/deploy/src:     /tmp/azkdemo_benchmark\n      /azk/deploy/.config: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/deploy-config\n      /azk/deploy/.ssh:    /home/julio/.ssh\n'
      },
      azk_version: '0.17.0',
      time: 2254
    },
    {
      command: 'azk start --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['start'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Skip starting, system `deploy` does not scale.\n\nazk: ↑ starting `redis` system, 1 new instances...\n\nazk: ✓ checking `library/redis:3.0.6` image...\n\nazk: ◴ waiting for `redis` system to start, trying connection to port 6379/tcp...\n\nazk: ↑ starting `azkdemo` system, 1 new instances...\n\nazk: ✓ checking `azukiapp/node:4.2.1` image...\n\nazk: ⎘ syncing files for `azkdemo` system...\n\nazk: ◴ waiting for `azkdemo` system to start, trying connection to port http/tcp...\n\n\n\n System   Inst.  Hostname/url               Instances-Ports \n deploy   0      dev.azk.io                 -               \n redis    1      dev.azk.io                 1-6379:32812    \n azkdemo  1      http://azkdemo.dev.azk.io  1-http:32813    \n'
      },
      azk_version: '0.17.0',
      time: 7721
    },
    {
      command: 'azk status --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['status'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: ' System   Inst.  Hostname/url               Instances-Ports \n deploy   0      dev.azk.io                 -               \n redis    1      dev.azk.io                 1-6379:32812    \n azkdemo  1      http://azkdemo.dev.azk.io  1-http:32813    \n'
      },
      azk_version: '0.17.0',
      time: 2227
    },
    {
      command: 'azk stop --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['stop'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: ↓ stopping `azkdemo` system, 1 instances...\n\nazk: ↓ stopping `redis` system, 1 instances...\n\nazk: Skip stoping, system `deploy` does not scale.\n\n\n\n System   Inst.  Hostname/url        Instances-Ports \n deploy   0      dev.azk.io          -               \n redis    0      dev.azk.io          -               \n azkdemo  0      azkdemo.dev.azk.io  -               \n'
      },
      azk_version: '0.17.0',
      time: 6394
    },
    {
      command: 'azk agent stop --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['agent'], ['stop'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Agent is running...\n\nazk: Agent is being stopped...\n\nazk: Agent has been successfully stopped.\n'
      },
      azk_version: '0.17.0',
      time: 3227
    }
  ],
  [
    {
      command: 'azk agent start --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['agent'], ['start'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Please wait, this process may take several minutes\n\nazk: Loading settings and checking dependencies.\n\nazk: Checking version...\n\nazk: azk 0.17.0 detected\n\nazk: Cleaning 0 lost containers\n\nazk: Settings loaded successfully.\n\nazk: Agent is being started...\n\nazk: Trying to connect to docker (unix:///var/run/docker.sock) (timeout: 20s)...\n\nazk: Starting azk dns service...\n\nazk: Dns service started.\n\nazk: Trying to connect to docker (unix:///var/run/docker.sock) (timeout: 20s)...\n\nazk: Starting azk balancer redirect service...\n\nazk: Check if balancer redirect service is up (tcp://172.17.0.1:80) (timeout: 10000s)...\n\nazk: Balancer redirect started.\n\nazk: Starting memcached service...\n\nazk: Memcached service started.\n\nazk: Starting http balancer service...\n\nazk: Http balancer service started.\n\nazk: Agent has been successfully started.\n'
      },
      azk_version: '0.17.0',
      time: 7119
    },
    {
      command: 'azk version --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['version'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk 0.17.0\n'
      },
      azk_version: '0.17.0',
      time: 2063
    },
    {
      command: 'azk docker --no-color -- version',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['docker'], ['--no-color'], ['--'], ['version']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'Client:\n Version:      1.9.1\n API version:  1.21\n Go version:   go1.4.2\n Git commit:   a34a1d5\n Built:        Fri Nov 20 13:12:04 UTC 2015\n OS/Arch:      \nlinux/amd64\n\nServer:\n Version:      1.9.1\n API version:  1.21\n Go version:   go1.4.2\n Git commit:   a34a1d5\n Built:        Fri Nov 20 13:12:04 UTC 2015\n OS/Arch:      linux/amd64\n'
      },
      azk_version: '0.17.0',
      time: 2056
    },
    {
      command: 'azk docker --no-color -- info',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['docker'], ['--no-color'], ['--'], ['info']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'Containers: 127\nImages: 1171\nServer Version: 1.9.1\nStorage Driver: aufs\n Root Dir: /var/lib/docker/aufs\n Backing Filesystem: extfs\n Dirs: 1434\n Dirperm1 Supported: true\nExecution Driver: native-0.2\nLogging Driver: json-file\nKernel Version: 3.16.0-30-generic\nOperating System: Ubuntu 14.04.3 LTS\nCPUs: 4\nTotal Memory: 7.781 GiB\nName: julio-P67A-UD3-B3\nID: XYZ5:IFYM:RTR4:MVNV:YRFU:U2OX:UT63:6NDJ:U5HY:RNZU:IUIP:BIWT\n\nWARNING: No swap limit support\n'
      },
      azk_version: '0.17.0',
      time: 1986
    },
    {
      command: 'azk info --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['info'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'manifest_id:    f4fe0a05e5\nmanifest:       /tmp/azkdemo_benchmark/Azkfile.js\ncache_dir:      /tmp/azkdemo_benchmark/.azk/Azkfile.js\ndefault_system: azkdemo\nsystems: \n  azkdemo: \n    depends: \n      - redis\n    image: \n      docker: azukiapp/node:4.2.1\n    command:  npm start\n    hostname: http://azkdemo.dev.azk.io\n    ports: \n      http: 5000/tcp\n    scalable: \n      default: 1\n      limit:   -1\n    mounts: \n      /azk/azkdemo_benchmark/node_modules: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/node_modules\n      /azk/azkdemo_benchmark:              /home/julio/.azk/data/sync_folders/f4fe0a05e5/azkdemo/tmp/azkdemo_benchmark\n    envs: \n      NODE_ENV: dev\n  redis: \n    mounts: \n      /data: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/data\n    command:  ["redis-server","--appendonly","yes"]\n    envs: \n\n    hostname: http://dev.azk.io\n    scalable: \n      limit:   1\n      default: 1\n    depends:  no dependencies\n    image: \n      docker: redis:3.0.6\n  deploy: \n    mounts: \n      /azk/deploy/.config: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/deploy-config\n      /azk/deploy/.ssh:    /home/julio/.ssh\n      /azk/deploy/src:     /tmp/azkdemo_benchmark\n    envs: \n      BOX_NAME:                  azkdemo\n      REMOTE_PROJECT_PATH_ID:    azkdemo\n      ENV_FILE:                  .env\n      GIT_REF:                   final\n      DISABLE_ANALYTICS_TRACKER: true\n    hostname: http://dev.azk.io\n    scalable: \n      default: 0\n      limit:   0\n    depends:  no dependencies\n    image: \n      docker: azukiapp/deploy-digitalocean:latest\n'
      },
      azk_version: '0.17.0',
      time: 2301
    },
    {
      command: 'azk start --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['start'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Skip starting, system `deploy` does not scale.\n\nazk: ↑ starting `redis` system, 1 new instances...\n\nazk: ✓ checking `library/redis:3.0.6` image...\n\nazk: ◴ waiting for `redis` system to start, trying connection to port 6379/tcp...\n\nazk: ↑ starting `azkdemo` system, 1 new instances...\n\nazk: ✓ checking `azukiapp/node:4.2.1` image...\n\nazk: ⎘ syncing files for `azkdemo` system...\n\nazk: ◴ waiting for `azkdemo` system to start, trying connection to port http/tcp...\n\n\n\n System   Inst.  Hostname/url               Instances-Ports \n deploy   0      dev.azk.io                 -               \n redis    1      dev.azk.io                 1-6379:32814    \n azkdemo  1      http://azkdemo.dev.azk.io  1-http:32815    \n'
      },
      azk_version: '0.17.0',
      time: 7906
    },
    {
      command: 'azk status --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['status'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: ' System   Inst.  Hostname/url               Instances-Ports \n deploy   0      dev.azk.io                 -               \n redis    1      dev.azk.io                 1-6379:32814    \n azkdemo  1      http://azkdemo.dev.azk.io  1-http:32815    \n'
      },
      azk_version: '0.17.0',
      time: 4276
    },
    {
      command: 'azk stop --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['stop'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: ↓ stopping `azkdemo` system, 1 instances...\n\nazk: ↓ stopping `redis` system, 1 instances...\n\nazk: Skip stoping, system `deploy` does not scale.\n\n\n\n System   Inst.  Hostname/url        Instances-Ports \n deploy   0      dev.azk.io          -               \n redis    0      dev.azk.io          -               \n azkdemo  0      azkdemo.dev.azk.io  -               \n'
      },
      azk_version: '0.17.0',
      time: 9385
    },
    {
      command: 'azk agent stop --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['agent'], ['stop'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Agent is running...\n\nazk: Agent is being stopped...\n\nazk: Agent has been successfully stopped.\n'
      },
      azk_version: '0.17.0',
      time: 3130
    }
  ],
  [
    {
      command: 'azk agent start --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['agent'], ['start'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Please wait, this process may take several minutes\n\nazk: Loading settings and checking dependencies.\n\nazk: Checking version...\n\nazk: azk 0.17.0 detected\n\nazk: Cleaning 0 lost containers\n\nazk: Settings loaded successfully.\n\nazk: Agent is being started...\n\nazk: Trying to connect to docker (unix:///var/run/docker.sock) (timeout: 20s)...\n\nazk: Starting azk dns service...\n\nazk: Dns service started.\n\nazk: Trying to connect to docker (unix:///var/run/docker.sock) (timeout: 20s)...\n\nazk: Starting azk balancer redirect service...\n\nazk: Check if balancer redirect service is up (tcp://172.17.0.1:80) (timeout: 10000s)...\n\nazk: Balancer redirect started.\n\nazk: Starting memcached service...\n\nazk: Memcached service started.\n\nazk: Starting http balancer service...\n\nazk: Http balancer service started.\n\nazk: Agent has been successfully started.\n'
      },
      azk_version: '0.17.0',
      time: 6910
    },
    {
      command: 'azk version --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['version'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk 0.17.0\n'
      },
      azk_version: '0.17.0',
      time: 2109
    },
    {
      command: 'azk docker --no-color -- version',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['docker'], ['--no-color'], ['--'], ['version']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'Client:\n Version:      1.9.1\n API version:  1.21\n Go version:   go1.4.2\n Git commit:   a34a1d5\n Built:        Fri Nov 20 13:12:04 UTC 2015\n OS/Arch:      linux/amd64\n\nServer:\n Version:      1.9.1\n API version:  \n1.21\n Go version:   go1.4.2\n Git commit:   a34a1d5\n Built:        Fri Nov 20 13:12:04 UTC 2015\n OS/Arch:      linux/amd64\n'
      },
      azk_version: '0.17.0',
      time: 2194
    },
    {
      command: 'azk docker --no-color -- info',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['docker'], ['--no-color'], ['--'], ['info']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'Containers: 127\nImages: 1171\nServer Version: 1.9.1\nStorage Driver: aufs\n Root Dir: /var/lib/docker/aufs\n Backing Filesystem: extfs\n Dirs: 1434\n Dirperm1 Supported: true\nExecution Driver: native-0.2\nLogging Driver: json-file\nKernel Version: 3.16.0-30-generic\nOperating System: Ubuntu 14.04.3 LTS\nCPUs: 4\nTotal Memory: 7.781 GiB\nName: julio-P67A-UD3-B3\nID: XYZ5:IFYM:RTR4:MVNV:YRFU:U2OX:UT63:6NDJ:U5HY:RNZU:IUIP:BIWT\n\nWARNING: No swap limit support\n'
      },
      azk_version: '0.17.0',
      time: 2214
    },
    {
      command: 'azk info --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['info'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'manifest_id:    f4fe0a05e5\nmanifest:       /tmp/azkdemo_benchmark/Azkfile.js\ncache_dir:      /tmp/azkdemo_benchmark/.azk/Azkfile.js\ndefault_system: azkdemo\nsystems: \n  azkdemo: \n    depends: \n      - redis\n    image: \n      docker: azukiapp/node:4.2.1\n    command:  npm start\n    hostname: http://azkdemo.dev.azk.io\n    ports: \n      http: 5000/tcp\n    scalable: \n      default: 1\n      limit:   -1\n    mounts: \n      /azk/azkdemo_benchmark:              /home/julio/.azk/data/sync_folders/f4fe0a05e5/azkdemo/tmp/azkdemo_benchmark\n      /azk/azkdemo_benchmark/node_modules: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/node_modules\n    envs: \n      NODE_ENV: dev\n  redis: \n    scalable: \n      limit:   1\n      default: 1\n    command:  ["redis-server","--appendonly","yes"]\n    envs: \n\n    mounts: \n      /data: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/data\n    depends:  no dependencies\n    hostname: http://dev.azk.io\n    image: \n      docker: redis:3.0.6\n  deploy: \n    scalable: \n      default: 0\n      limit:   0\n    envs: \n      BOX_NAME:                  azkdemo\n      REMOTE_PROJECT_PATH_ID:    azkdemo\n      ENV_FILE:                  .env\n      GIT_REF:                   final\n      DISABLE_ANALYTICS_TRACKER: true\n    mounts: \n      /azk/deploy/.ssh:    /home/julio/.ssh\n      /azk/deploy/.config: /home/julio/.azk/data/persistent_folders/f4fe0a05e5/deploy-config\n      /azk/deploy/src:     /tmp/azkdemo_benchmark\n    depends:  no dependencies\n    hostname: http://dev.azk.io\n    image: \n      docker: azukiapp/deploy-digitalocean:latest\n'
      },
      azk_version: '0.17.0',
      time: 2140
    },
    {
      command: 'azk start --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['start'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Skip starting, system `deploy` does not scale.\n\nazk: ↑ starting `redis` system, 1 new instances...\n\nazk: ✓ checking `library/redis:3.0.6` image...\n\nazk: ◴ waiting for `redis` system to start, trying connection to port 6379/tcp...\n\nazk: ↑ starting `azkdemo` system, 1 new instances...\n\nazk: ✓ checking `azukiapp/node:4.2.1` image...\n\nazk: ⎘ syncing files for `azkdemo` system...\n\nazk: ◴ waiting for `azkdemo` system to start, trying connection to port http/tcp...\n\n\n\n System   Inst.  Hostname/url               Instances-Ports \n deploy   0      dev.azk.io                 -               \n redis    1      dev.azk.io                 1-6379:32816    \n azkdemo  1      http://azkdemo.dev.azk.io  1-http:32817    \n'
      },
      azk_version: '0.17.0',
      time: 7862
    },
    {
      command: 'azk status --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['status'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: ' System   Inst.  Hostname/url               Instances-Ports \n deploy   0      dev.azk.io                 -               \n redis    1      dev.azk.io                 1-6379:32816    \n azkdemo  1      http://azkdemo.dev.azk.io  1-http:32817    \n'
      },
      azk_version: '0.17.0',
      time: 2220
    },
    {
      command: 'azk stop --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['stop'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: ↓ stopping `azkdemo` system, 1 instances...\n\nazk: ↓ stopping `redis` system, 1 instances...\n\nazk: Skip stoping, system `deploy` does not scale.\n\n\n\n System   Inst.  Hostname/url        Instances-Ports \n deploy   0      dev.azk.io          -               \n redis    0      dev.azk.io          -               \n azkdemo  0      azkdemo.dev.azk.io  -               \n'
      },
      azk_version: '0.17.0',
      time: 6312
    },
    {
      command: 'azk agent stop --no-color',
      result: {
        executable: '/home/julio/_git/azk/bin/azk',
        paramsArray: [['agent'], ['stop'], ['--no-color']],
        cwd: '/tmp/azkdemo_benchmark',
        code: 0,
        message: 'azk: Agent is running...\n\nazk: Agent is being stopped...\n\nazk: Agent has been successfully stopped.\n'
      },
      azk_version: '0.17.0',
      time: 3119
    }
  ]
];
