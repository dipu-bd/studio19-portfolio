# studio19-portfolio

> You need to do this first

- Right click on Windows Start menu and open "Windows PowerShell"
- Now run these commands sequentially:

```sh
> Set-ExecutionPolicy RemoteSigned -scope CurrentUser
> Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

> scoop install git nodejs-lts make
> npm i -g yarn

> git clone https://github.com/dipu-bd/studio19-portfolio
> cd studio19-portfolio
> yarn
```

Running locally:

```sh
> yarn serve
```

Deploying to server:

```sh
> make server-deploy
```
