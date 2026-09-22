/**
 * Decodificador de seguranca em tempo de execucao (Protecao de dados / LGPD)
 * Evita que dados pessoais (como telefone da profissional) fiquem expostos em texto puro no GitHub
 * contra crawlers, bots e indexadores automatizados.
 */
export function decodeProtectedData(token, salt = "VittoriaStudio@2026_SecureKey") {
  if (!token) return "";

  try {
    let raw = "";
    if (typeof window !== "undefined" && typeof window.atob === "function") {
      raw = window.atob(token);
    } else if (typeof Buffer !== "undefined") {
      raw = Buffer.from(token, "base64").toString("latin1");
    } else {
      return "";
    }

    let output = "";
    for (let i = 0; i < raw.length; i++) {
      output += String.fromCharCode(raw.charCodeAt(i) ^ salt.charCodeAt(i % salt.length));
    }
    return output;
  } catch {
    return "";
  }
}
