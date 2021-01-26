/**
 * 
 * @param {Object} loginCred 
 */
export async function buildCredential(loginCred) {
  /**
   * id         -> required
   * name       -> optional
   * password   -> required
   * iconURL    -> optional
   * 
   * if user already have id stored in credentials
   * this function will override the old one.
   */
  const credential = new PasswordCredential({
    id: loginCred.username,
    name: loginCred.full_name,
    password: loginCred.password,
    //iconURL: loginCred.avatarUrl
  });
  await navigator.credentials.store(credential);
};

/**
 * this function will trigger login credential to pop up
 * if user have saved login credential.
 * 
 * @returns {PasswordCredential}
 */
export async function getCredential() {
  /**
   * password: true (default false) -> its required, if set
   * to false credential won't pop up.
   * 
   * mediation: "required" -> block auto login using credential
   * if user only have 1 credential.
   */
  return await navigator.credentials.get({
    password: true,
    mediation: "required"
  });
};