# vno_study

### vno = Deno + Vue

## Requirements

- [Deno](https://github.com/denoland/deno) >= 1.7
- [vno](https://github.com/open-source-labs/vno)

## Installation

- [Deno](https://github.com/denoland/deno#install)

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

- [vno](https://github.com/open-source-labs/vno#vno-installation)

```sh
deno install --allow-read --allow-write --allow-run --allow-net --unstable -f https://deno.land/x/vno/install/vno.ts
```

## Quick Start

```sh
# create a project
$ vno create myproject
Check https://deno.land/x/vno/install/vno.ts

Would you like to customize your vno project?(yes/no): yes


initializing your vno project...


What would you like to name your root Vue component?(recommend App): App

Name of additional components?(enter 'none' for default): Comp1 Comp2 Comp3

Port number for server: 3000

Your Options:

    Title: myproject
    Root: App
    Additional Component(s): Comp1 Comp2 Comp3
    Port: 3000


Confirm these results and create your project?(yes/no): yes

creating your vno project...

# build the project
$ cd myproject
$ vno build
Check https://deno.land/x/vno/install/vno.ts
[vno: compiling] => App.vue
[vno: compiling] => components/Comp1.vue

  __   ___ __   ___
  \ \ / / '_ \ /   \
   \ V /| | | | (_) |
    \_/ |_| |_|\___/

# run the dev server
$ vno run dev
Check https://deno.land/x/vno/install/vno.ts
[vno: compiling] => App.vue
[vno: compiling] => components/Comp1.vue

  __   ___ __   ___
  \ \ / / '_ \ /   \
   \ V /| | | | (_) |
    \_/ |_| |_|\___/

dev server is listening on http://localhost:3000
```

Then access http://localhost:3000 with your browser.

## License

&copy; 2021 [Ken Kurosaki](https://github.com/quinpallet).<br>
This project is [MIT](https://github.com/quinpallet/vno_study/blob/master/LICENSE) licensed.
