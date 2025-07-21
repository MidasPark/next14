import { exec } from 'child_process';

/**
 * 지정한 포트가 사용 중이면 해당 프로세스를 종료합니다 (개발 환경에서만 동작)
 * @param port 종료할 포트 번호
 */
export async function killPortIfUsed(port: number): Promise<void> {
  if (process.env['NODE_ENV'] !== 'development') return;

  const platform = process.platform;
  let cmd = '';

  if (platform === 'win32') {
    // Windows
    cmd = `for /f "tokens=5" %a in ('netstat -nao ^| findstr :${port}') do taskkill /F /PID %a`;
  } else if (platform === 'darwin' || platform === 'linux') {
    // macOS, Linux
    cmd = `lsof -ti tcp:${port} | xargs kill -9`;
  } else {
    console.warn(`[kill-port] 지원하지 않는 OS: ${platform}`);
    return;
  }

  await new Promise<void>((resolve) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        // 포트 미사용 등 에러 무시
        resolve();
        return;
      }
      if (stdout) console.log(`[kill-port] 종료된 프로세스: ${stdout.trim()}`);
      if (stderr) console.warn(`[kill-port] stderr: ${stderr.trim()}`);
      resolve();
    });
  });
} 