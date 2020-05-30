# 1. Install DENO


## Install via command

**With Shell (Mac):**

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

**With PowerShell (Windows):**

```powershell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```
<br>

## Install via Package Manager

**With [Homebrew](https://formulae.brew.sh/formula/deno) (Mac):**

```sh
brew install deno
```

**With [Chocolatey](https://chocolatey.org/packages/deno) (Windows):**

```powershell
choco install deno
```

<br>

Run `deno --version` in the shell to verify the installation. You should get a similar output:

```shell
$ deno --version
deno 1.0.3
v8 8.4.300
typescript 3.9.2
```


<br><br>


# 2. Run DENO server

Open a shell/powershell terminal at the `server.ts` path and run the following command:

```powershell
deno  run --allow-net  [PATH_TO_FILE]\server.ts
```

<br><br>

# Troubleshooting

If the server is not responding to the requests, verify to use `DENO` endpoint (`apiBaseUrl`) in your `environments.ts` file:

```javascript
export const environment = {
  production: false,

  // Use Node Express
  // apiBaseUrl: 'http://localhost:8180/api'

  // Use DENO
  apiBaseUrl: 'http://localhost:8280'  <---
};
```