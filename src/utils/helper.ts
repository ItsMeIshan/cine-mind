export async function fetchWithErrorHandling(url: URL, options: RequestInit) {
  const response = await fetch(url, options);

  if (response.status !== 200) {
    throw new Error("Error in request");
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  return result;
}
export function validate(email: string, password: string): string | null {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
}
