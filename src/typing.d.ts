declare var process: Process;

interface Process {
  env: Env
}

interface Env {
  API_URL: string
  API_KEY: string
  MENU_TITLE: string
}

interface GlobalEnvironment{
  process: Process;
}
