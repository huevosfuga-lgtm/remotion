/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
// Este entorno remoto enruta HTTPS por un proxy con su propia CA que
// Chromium headless no reconoce, lo que rompe la descarga de Google
// Fonts al renderizar. En una máquina local esto no hace falta.
Config.setChromiumIgnoreCertificateErrors(true);
