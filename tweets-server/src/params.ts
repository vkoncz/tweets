export const serverPort = process.env.SERVER_PORT ?? 8080;
export const mongoConnection = validate('MONGO_CONNECTION');

function validate(env: string) {
  const param = process.env[env];
  if (!param) throw Error(`Missing environment variable: ${env}`);

  return param;
}
