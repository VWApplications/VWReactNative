# React Native Apps

## APPs

1. Geração de números randomicos (Básico do JSX)
2. Frases do dia (Visual bonito e Flexbox)
3. Joquempô (Props, State, Modularização)
4. Catalogo de itens (HTTP Request axios, Ciclo de vida, Debugging)
5. Portifolio (Rotas e navegação)
6. Jogo de cara ou coroa (Resumo de tudo, Router Flux)
7. Calculadora (Contexto Léxico e VirtualDOM)
8. Whatsapp clone (Autenticação, CRUD, Firebase, Redux, Deploy)

## Instalação

#### 1) Instalar o nodejs e o npm

Link: https://www.digitalocean.com/community/tutorials/como-instalar-o-node-js-no-ubuntu-16-04-pt

#### 2) Instalar o React Native CLI

```
npm install -g react-native-cli
```

#### 3) Instalar o Java Development Kit

Link de Download: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

#### 4) Instalar o Android Studio

Link de Download: https://developer.android.com/studio/index.html

Tenha certeza que está instalando os seguintes modulos:

```
Android SDK
Android SDK Platform
Android Virtual Device
```

Instalando o Android SDK (Android 9 (Pie)) para emulação:

```
Preferences → Appearance & Behavior → System Settings → Android SDK

Selecione: SDK Platforms → Show Package Details

Tenha certeza que está instalados os seguintes pacotes no "Android 9 (Pie)":
- Android SDK Platform 28
- Intel x86 Atom_64 System Image OU Google APIs Intel x86 Atom System Image

Selecione: SDK Tools → Show Package Details

Verifique no "Android SDK Build-Tools" se ta selecionado a versão: 28.0.3

Aperte Apply para instalar tudo
```

#### 5) Configure o ANDROID_HOME

No arquivo de configuração do seu terminal

```
vim $HOME/.bashrc
```

Insira os seguintes códigos:

```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Atualize o terminal

```
source $HOME/.bashrc
```

Verifique se ta tudo na variável de ambiente

```
echo $PATH
```

#### 6) Instale o Watchman (Opcional)

Link: https://facebook.github.io/watchman/docs/install.html#buildinstall

#### 7) Preparar o emulador

**Celular físico**:

Primeiro vai no seu celular e ative o modo desenvolvedor só ir em Settings/About phone e clicar na tela 7 vezes onde tem o **Build Number**

No modo desenvolvedor ative o modo **USB debugging**

Coloque seu celular no USB, encontre o ID dele. Dica: pluga e despluga executando o comando abaixo

```
lsusb
```

Pegue os 4 primeiros digitos do ID e execute o seguinte comando mudando a varíavel ```ATTR{idVendor}=="<id-aqui>"```:

```
echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules
```

Verifique se ta conectado seu celular com a máquina:

```
adb devices
```

Se aparecer **device** é pq ta conectado.

**Emulador Android Studio**: Vai em AVD Manager e crie o emulador (Pie API Level 28 image)

#### 8) Crie um projeto

```
react-native init <nome-do-projeto>
```

#### 9) Rode o projeto

Dentro do projeto criado execute:

```
react-native run-android
```